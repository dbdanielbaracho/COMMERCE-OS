const D=window.CREATOR_COMMERCE_DEMO, STORAGE_KEY='creator-commerce-campaign-functional-v1';
const clone=v=>JSON.parse(JSON.stringify(v));
let state=loadState();
function loadState(){
  const base={campaign:clone(D.campaign),creators:clone(D.creators)};
  try{
    const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
    if(saved&&saved.campaign&&saved.creators)return saved;
  }catch(e){}
  return base;
}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
const $=id=>document.getElementById(id);
const money=n=>'R$ '+Number(n||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const statePt={requested:'Solicitada',review:'Em análise',approved:'Aprovada',shipped:'Enviada',delivered:'Entregue',content_due:'Aguardando conteúdo',posted:'Publicada',expired:'Expirada',pending:'Pendente'};
const actionLabel={FOLLOW_UP_SAMPLE:'Enviar amostra',TRACK_SAMPLE:'Acompanhar entrega',WAIT_FOR_CONTENT:'Aguardar conteúdo',REPEAT_CREATOR:'Repetir creator'};
const avatarEmoji={2:'🧑🏻',3:'👩🏽',1:'👩🏻',4:'👩🏼',5:'🧑🏽',6:'👩🏾',7:'👩🏻',8:'🧑🏼',9:'🧑🏾',10:'🧑🏻'};
let selected=new Set();

function members(){return state.creators.filter(x=>x.activation)}
function eligibleOutreach(){return state.creators.filter(x=>x.outreach?.status==='accepted'&&!x.activation)}
function parseBR(s){
  if(!s||s==='—')return null;
  const [d,m,y]=s.split('/').map(Number);
  if(!d||!m||!y)return null;
  return new Date(y,m-1,d);
}
function formatBR(d){return String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear()}
function addDays(date,days){const d=new Date(date);d.setDate(d.getDate()+days);return d}
function evaluateExceptions(now=new Date()){
  members().forEach(x=>{
    const a=x.activation;
    if(a.sample==='delivered'&&a.content!=='posted'){
      const delivered=parseBR(a.deliveredAt);
      if(delivered){
        const age=Math.floor((now-delivered)/86400000);
        if(age>=state.campaign.sampleSlaDays){
          a.stage='content_due';
          a.nextAction='WAIT_FOR_CONTENT';
          a.contentDue=formatBR(addDays(delivered,state.campaign.sampleSlaDays));
          a.reminder='Prazo vencido: lembrar creator agora';
        }
      }
    }
  });
}
function shippingEffective(x){return ['shipped','delivered'].includes(x.activation?.shipping)?Number(x.activation.shippingCost||0):0}
function totals(){
  const ms=members(), revenue=ms.reduce((a,x)=>a+Number(x.activation?.revenue||0),0);
  const sample=ms.reduce((a,x)=>a+Number(x.activation?.sampleCost||0),0);
  const ship=ms.reduce((a,x)=>a+shippingEffective(x),0);
  const commission=ms.reduce((a,x)=>a+Number(x.activation?.revenue||0)*Number(x.cm||0)/100,0);
  const baseMargin=revenue*Number(D.sku.baseMarginPct||0)/100;
  return {revenue,sample,ship,commission,baseMargin,margin:baseMargin-commission-sample-ship,spent:sample+ship};
}
function funnelData(){
  const all=state.creators;
  const contacted=all.filter(x=>x.outreach&&x.outreach.status!=='new').length;
  const replied=all.filter(x=>['responded','accepted','campaign','declined'].includes(x.outreach?.status)).length;
  const accepted=members().length;
  const sampled=members().filter(x=>['shipped','delivered'].includes(x.activation.shipping)||x.activation.content==='posted').length;
  const posted=members().filter(x=>x.activation.content==='posted').length;
  const converted=members().filter(x=>Number(x.activation.orders||0)>0).length;
  return [['Contatado',contacted],['Respondeu',replied],['Aceitou',accepted],['Amostra',sampled],['Publicou',posted],['Converteu',converted]];
}
function stageView(x){
  const a=x.activation;
  if(a.content==='posted')return ['Publicado','green'];
  if(a.stage==='content_due')return ['Aguardando conteúdo','amber'];
  if(a.shipping==='shipped')return ['Amostra enviada','blue'];
  if(a.sample==='approved')return ['Amostra aprovada','blue'];
  return ['Aceitou','blue'];
}
function due(x){
  const a=x.activation;
  if(a.nextAction==='FOLLOW_UP_SAMPLE')return a.shipDue||'—';
  if(a.nextAction==='TRACK_SAMPLE')return a.tracking?.nextCheck||'—';
  if(a.nextAction==='WAIT_FOR_CONTENT')return a.contentDue||'—';
  return '—';
}
function nextLabel(x){return actionLabel[x.activation.nextAction]||'Revisar'}
function actionReason(x,action){
  const a=x.activation;
  if(action==='sample')return a.nextAction==='FOLLOW_UP_SAMPLE'?null:'Creator não está aguardando envio de amostra';
  if(action==='reminder')return ['FOLLOW_UP_SAMPLE','TRACK_SAMPLE','WAIT_FOR_CONTENT'].includes(a.nextAction)?null:'Creator não tem follow-up pendente';
  if(action==='repeat')return a.nextAction==='REPEAT_CREATOR'?null:'Creator ainda não está elegível para repetição';
  return null;
}
function bulkStatus(action){
  const picked=members().filter(x=>selected.has(x.id));
  const eligible=[], skipped=[];
  picked.forEach(x=>{const reason=actionReason(x,action);reason?skipped.push({x,reason}):eligible.push(x)});
  return {eligible,skipped};
}
function bulkPreview(){
  if(!selected.size)return 'Selecione creators para ver elegíveis e pulados.';
  const s=bulkStatus('sample'),r=bulkStatus('reminder'),p=bulkStatus('repeat');
  return 'Amostras: '+s.eligible.length+' elegíveis / '+s.skipped.length+' pulados · Lembretes: '+r.eligible.length+' / '+r.skipped.length+' · Repetir: '+p.eligible.length+' / '+p.skipped.length;
}
function setBulkButton(btn,status,label){
  btn.disabled=!selected.size||!status.eligible.length;
  btn.title=!selected.size?'Selecione creators':status.eligible.length?status.eligible.length+' elegíveis; '+status.skipped.length+' pulados':(status.skipped[0]?.reason||label+' indisponível');
}
function renderHeader(){
  const C=state.campaign,T=totals();
  $('campaignName').textContent=C.name;$('skuName').textContent=D.sku.name;$('skuMeta').textContent=D.sku.id+' · '+D.sku.category;
  $('objective').textContent=C.objective;$('dates').textContent=C.start+' → '+C.end;$('owner').textContent=C.owner;$('budget').textContent=money(C.budget);
  $('budgetUsage').textContent=money(T.spent)+' gasto · '+money(Math.max(0,C.budget-T.spent))+' restante';
  $('budgetBar').style.width=Math.min(100,T.spent/C.budget*100)+'%';$('campaignType').textContent=C.type;$('samplePolicy').textContent=C.samplePolicy;$('brief').textContent=C.brief;
  $('sampleSla').textContent=C.sampleSlaDays+' dias após entrega';$('exceptionDays').textContent=C.sampleSlaDays;$('reminderRule').textContent=C.sampleReminder;
}
function renderFunnel(){
  const f=funnelData();
  $('funnel').innerHTML=f.map((x,i)=>"<div class='step "+((i===2||i===4)&&i>0&&x[1]<f[i-1][1]?'warn':'')+"'><small>"+x[0]+"</small><b>"+x[1]+"</b><div class='sub'>"+(i?Math.round((x[1]/Math.max(1,f[i-1][1]))*100)+'% da etapa anterior':'base')+"</div></div>").join('');
}
function renderBottleneck(){
  const pending=members().filter(x=>x.activation.nextAction==='FOLLOW_UP_SAMPLE');
  const waiting=members().filter(x=>x.activation.nextAction==='WAIT_FOR_CONTENT');
  let title='Nenhum gargalo crítico',detail='Fluxo sem pendências vencidas.';
  if(waiting.length){title=waiting[0].n+': recebeu amostra e ainda não publicou';detail='Ação recomendada: Aguardar conteúdo · responsável '+waiting[0].activation.owner;}
  else if(pending.length){title=pending[0].n+': amostra aprovada; envio pendente até '+(pending[0].activation.shipDue||'—');detail='Ação recomendada: Enviar amostra · responsável '+pending[0].activation.owner;}
  $('bottleneck').textContent=title;$('bottleneckDetail').textContent=detail;$('bottleneckDetail').title=waiting.length?'WAIT_FOR_CONTENT':pending.length?'FOLLOW_UP_SAMPLE':'';
}
function pipeCard(x,label){return "<div class='pipeCard'><b>"+x.n+"</b><div class='sub'>"+label+"</div></div>"}
function renderPipeline(){
  const ms=members();
  const accepted=ms.filter(x=>x.activation.stage==='accepted');
  const sample=ms.filter(x=>['sample_approved','sample_shipped'].includes(x.activation.stage));
  const content=ms.filter(x=>x.activation.stage==='content_due'||(x.activation.sample==='delivered'&&x.activation.content!=='posted'));
  const result=ms.filter(x=>x.activation.content==='posted');
  $('pipeAccepted').innerHTML=accepted.map(x=>pipeCard(x,'Aceite confirmado')).join('')||'<div class="sub">—</div>';
  $('pipeSample').innerHTML=sample.map(x=>pipeCard(x,(x.activation.shipping==='shipped'?'Enviada':'Enviar até '+(x.activation.shipDue||'—')))).join('')||'<div class="sub">—</div>';
  $('pipeContent').innerHTML=content.map(x=>pipeCard(x,'Aguardando conteúdo')).join('')||'<div class="sub">Nenhuma pendência</div>';
  $('pipeResult').innerHTML=result.map(x=>pipeCard(x,x.activation.orders+' pedidos · '+money(x.activation.revenue))).join('')||'<div class="sub">—</div>';
  let auto=document.querySelector('.automationNote');
  if(!auto){auto=document.createElement('div');auto.className='automationNote';document.querySelector('.pipelineWrap').appendChild(auto)}
  const lucas=ms.find(x=>x.id===2);
  auto.innerHTML="<b>Automação de follow-up ativa</b><span>Próxima checagem: "+(lucas?.activation.tracking?.nextCheck||'sem pendência')+"</span><small title='WAIT_FOR_CONTENT'>Se entregue e sem publicação após "+state.campaign.sampleSlaDays+" dias: Aguardar conteúdo + lembrete automático.</small>";
}
function renderRows(){
  $('creatorRows').innerHTML=members().map(x=>{const st=stageView(x);return "<tr><td><input class='pick' data-id='"+x.id+"' type='checkbox' "+(selected.has(x.id)?'checked':'')+"></td><td><div class='creator'><span class='avatar'>"+(avatarEmoji[x.id]||'👤')+"</span><div><b>"+x.n+"</b><div class='sub'>"+x.h+"</div></div></div></td><td>"+x.cm+"%</td><td><span class='badge "+st[1]+"'>"+st[0]+"</span></td><td>"+x.activation.owner+"</td><td><b title='"+x.activation.nextAction+"'>"+nextLabel(x)+"</b></td><td>"+due(x)+"</td><td>"+x.activation.orders+"</td><td>"+money(x.activation.revenue)+"</td><td><button class='btn rowAction' data-id='"+x.id+"' title='"+x.activation.nextAction+"'>"+nextLabel(x)+"</button></td></tr>"}).join('');
  document.querySelectorAll('.pick').forEach(e=>e.onchange=()=>{const id=+e.dataset.id;e.checked?selected.add(id):selected.delete(id);renderBulk()});
  document.querySelectorAll('.rowAction').forEach(b=>b.onclick=()=>runRowAction(+b.dataset.id));
}
function renderBulk(){
  $('selectedCount').textContent=selected.size+' selecionados';$('bulkPreview').textContent=bulkPreview();
  setBulkButton($('bulkSample'),bulkStatus('sample'),'Enviar amostras');setBulkButton($('bulkReminder'),bulkStatus('reminder'),'Lembrar creators');setBulkButton($('bulkRepeat'),bulkStatus('repeat'),'Repetir creators');
}
function sampleIndex(x){
  if(x.activation.content==='posted')return 6;
  if(x.activation.stage==='content_due')return 5;
  const map={approved:2,shipped:3,delivered:4};return map[x.activation.sample]??2;
}
function renderSamples(){
  const states=['requested','review','approved','shipped','delivered','content_due','posted'];
  $('sampleCards').innerHTML=members().map(x=>{const idx=sampleIndex(x),deadline=x.activation.contentDue&&x.activation.contentDue!=='—'?x.activation.contentDue:(x.activation.shipDue||'—');return "<div class='sampleCard'><div class='row'><div><b>"+x.n+"</b><div class='sub'>1× "+D.sku.name+"</div></div><span class='badge "+(x.activation.content==='posted'?'green':'blue')+"'>"+(x.activation.content==='posted'?'Publicada':'Em andamento')+"</span></div><div class='sampleFlow'>"+states.map((s,i)=>"<span class='"+(i<idx?'done':i===idx?'current':'')+"'>"+statePt[s]+"</span>").join('')+"</div><div class='sampleMeta'><span>Owner: <b>"+x.activation.owner+"</b></span><span>Prazo: <b>"+deadline+"</b></span><span>Lembrete: <b>"+x.activation.reminder+"</b></span><span>Tracking: <b>"+(x.activation.tracking?.status||'—')+"</b></span><span>Código: <b>"+(x.activation.tracking?.code||'—')+"</b></span></div></div>"}).join('');
  const flagged=members().filter(x=>x.activation.nextAction==='WAIT_FOR_CONTENT').length;
  const badge=document.querySelector('.exceptionRule .badge');badge.textContent=flagged+' creator'+(flagged===1?'':'s')+' neste estado agora';badge.className='badge '+(flagged?'amber':'green');
}
function renderEconomics(){
  const T=totals();$('campaignRevenue').textContent=money(T.revenue);$('baseMarginValue').textContent=money(T.baseMargin);$('commissionCost').textContent='− '+money(T.commission);$('sampleCost').textContent='− '+money(T.sample);$('shippingCost').textContent='− '+money(T.ship);$('campaignMargin').textContent=money(T.margin);$('campaignMarginPct').textContent=(T.revenue?T.margin/T.revenue*100:0).toFixed(1).replace('.',',')+'% da receita atribuída';$('salesRevenue').textContent=money(T.revenue);
}
function renderContent(){
  $('contentQueue').innerHTML=members().map(x=>{const a=x.activation.contentAsset;if(!a)return "<div class='contentItem'><div class='thumb pending'>📦</div><div><b>"+x.n+"</b><div class='sub'>Nenhum conteúdo enviado · prazo após entrega da amostra</div></div><button class='btn' disabled title='Aguarde o envio do conteúdo'>Aprovar conteúdo</button></div>";const approved=a.status==='approved';return "<div class='contentItem'><div class='thumb'>"+a.type+"</div><div><b>"+a.title+"</b><div class='sub'>"+x.n+" · "+a.views.toLocaleString('pt-BR')+" visualizações · "+(approved?'Aprovado em '+a.approvedAt:'Aguardando aprovação')+"</div></div><div class='contentActions'>"+(approved?"<button class='btn' disabled title='Conteúdo já aprovado'>Aprovado</button>":"<button class='btn approve' data-id='"+x.id+"'>Aprovar conteúdo</button>")+"<button class='btn openContent' data-id='"+x.id+"'>Abrir conteúdo</button></div></div>"}).join('');
  document.querySelectorAll('.approve').forEach(b=>b.onclick=()=>approveContent(+b.dataset.id));
  document.querySelectorAll('.openContent').forEach(b=>b.onclick=()=>openContent(+b.dataset.id));
}
function renderEligible(){
  const accepted=state.creators.filter(x=>x.outreach?.status==='accepted');
  const addable=accepted.filter(x=>!x.activation);
  $('eligibleCreators').innerHTML=accepted.length?accepted.map(x=>"<div class='eligibleRow'><div class='creator'><span class='creatorPic'>"+(avatarEmoji[x.id]||'👤')+"</span><div><b>"+x.n+"</b><div class='sub'>"+x.h+"</div></div></div>"+(x.activation?"<button class='btn' disabled>Já adicionado</button>":"<button class='btn addEligible' data-id='"+x.id+"'>Adicionar</button>")+"</div>").join(''):"<p class='sub'>Nenhum creator aceito disponível no Outreach.</p>";
  if(!addable.length)$('eligibleCreators').insertAdjacentHTML('beforeend',"<div class='sub' style='margin-top:10px'>Nenhum creator novo disponível. Convide ou aguarde novos aceites no Outreach.</div>");
  document.querySelectorAll('.addEligible').forEach(b=>b.onclick=()=>addAcceptedCreator(+b.dataset.id));
}
function renderAll(){evaluateExceptions();renderHeader();renderFunnel();renderBottleneck();renderPipeline();renderRows();renderBulk();renderSamples();renderEconomics();renderContent();saveState()}
function openModal(id){$('modalOverlay').classList.add('show');$(id).classList.add('show')}
function closeModals(){$('modalOverlay').classList.remove('show');document.querySelectorAll('.modal').forEach(x=>x.classList.remove('show'))}
function sendSample(x){
  if(actionReason(x,'sample'))return false;
  x.activation.stage='sample_shipped';x.activation.sample='shipped';x.activation.shipping='shipped';x.activation.tracking={status:'Enviada',carrier:'Correios',code:'BR'+String(Date.now()).slice(-9)+'BR',nextCheck:'10/10/2026 09:00'};x.activation.reminder='Acompanhar entrega';x.activation.nextAction='TRACK_SAMPLE';x.activation.contentDue='—';return true;
}
function runRowAction(id){
  const x=members().find(v=>v.id===id);if(!x)return;
  if(x.activation.nextAction==='FOLLOW_UP_SAMPLE'){sendSample(x);toast('Amostra enviada para '+x.n);renderAll();return}
  if(x.activation.nextAction==='TRACK_SAMPLE'){toast('Tracking consultado para '+x.n);return}
  if(x.activation.nextAction==='WAIT_FOR_CONTENT'){toast('Lembrete enviado para '+x.n);return}
  if(x.activation.nextAction==='REPEAT_CREATOR'){toast('Creator preparado para nova ativação: '+x.n);return}
}
function runBulk(action){
  const status=bulkStatus(action);
  status.eligible.forEach(x=>{if(action==='sample')sendSample(x);if(action==='reminder')x.activation.reminder='Lembrete enviado agora';});
  const reasons={};status.skipped.forEach(s=>reasons[s.reason]=(reasons[s.reason]||0)+1);
  const suffix=Object.entries(reasons).map(([r,n])=>n+' pulado(s): '+r).join(' · ');
  toast(status.eligible.length+' elegíveis; '+status.skipped.length+' pulados'+(suffix?' · '+suffix:''));
  renderAll();
}
function openContent(id){
  const x=members().find(v=>v.id===id),a=x?.activation?.contentAsset;if(!x||!a)return;
  $('contentModalTitle').textContent=a.title;$('contentModalMeta').textContent='Publicado por '+x.n+' · '+(x.activation.postedAt||'data indisponível');
  $('contentPreview').innerHTML='<div>'+a.type+'<small>'+a.title+'</small></div>';
  $('contentCreator').textContent=x.n;$('contentType').textContent=a.type;$('contentStatus').textContent=a.status==='approved'?'Aprovado':'Aguardando aprovação';
  $('contentViews').textContent=Number(a.views||0).toLocaleString('pt-BR');$('contentOrders').textContent=x.activation.orders||0;$('contentRevenue').textContent=money(x.activation.revenue||0);
  $('goContentResults').dataset.id=x.id;openModal('contentModal');
}
function approveContent(id){
  const x=members().find(v=>v.id===id);if(!x?.activation.contentAsset||x.activation.contentAsset.status==='approved')return;
  x.activation.contentAsset.status='approved';x.activation.contentAsset.approvedAt='05/10/2026';toast('Conteúdo aprovado para '+x.n);renderAll();
}
function addAcceptedCreator(id){
  const x=state.creators.find(v=>v.id===id);if(!x||x.outreach?.status!=='accepted'||x.activation)return;
  x.activation={stage:'accepted',sample:'requested',shipping:'pending',content:'pending',orders:0,revenue:0,sampleCost:D.sku.unitCost,shippingCost:14.5,owner:state.campaign.owner,nextAction:'FOLLOW_UP_SAMPLE',shipDue:'09/10/2026',contentDue:'—',reminder:'Aprovar e enviar amostra',tracking:{status:'Aguardando envio',carrier:'—',code:'—'}};
  closeModals();toast(x.n+' adicionado à campanha');renderAll();
}
$('selectAll').onchange=e=>{selected=e.target.checked?new Set(members().map(x=>x.id)):new Set();renderRows();renderBulk()};
$('bulkSample').onclick=()=>runBulk('sample');$('bulkReminder').onclick=()=>runBulk('reminder');$('bulkRepeat').onclick=()=>runBulk('repeat');
$('editCampaign').onclick=()=>{$('editObjective').value=state.campaign.objective;$('editOwner').value=state.campaign.owner;$('editBudget').value=state.campaign.budget;openModal('campaignModal')};
$('saveEdit').onclick=()=>{state.campaign.objective=$('editObjective').value.trim()||state.campaign.objective;state.campaign.owner=$('editOwner').value.trim()||state.campaign.owner;state.campaign.budget=Math.max(0,Number($('editBudget').value)||state.campaign.budget);closeModals();toast('Campanha salva');renderAll()};
$('cancelEdit').onclick=closeModals;$('addCreator').onclick=()=>{renderEligible();openModal('creatorModal')};$('closeCreatorModal').onclick=closeModals;$('goOutreach').onclick=()=>location.href='../outreach/index.html';$('closeContentModal').onclick=closeModals;$('goContentResults').onclick=()=>location.href='../content-results/index.html';$('modalOverlay').onclick=closeModals;
$('viewPending').onclick=()=>{const p=members().filter(x=>['FOLLOW_UP_SAMPLE','TRACK_SAMPLE','WAIT_FOR_CONTENT'].includes(x.activation.nextAction));toast(p.length?p.map(x=>x.n+': '+nextLabel(x)).join(' · '):'Nenhuma pendência')};
$('openEconomics').onclick=()=>location.href='../unit-economics/index.html';$('navSku').onclick=()=>location.href='../sku-opportunity/index.html';$('navShortlist').onclick=()=>location.href='../creator-shortlist/index.html';$('navOutreach').onclick=()=>location.href='../outreach/index.html';$('navContent').onclick=()=>location.href='../content-results/index.html';$('navEconomics').onclick=()=>location.href='../unit-economics/index.html';
$('periodBtn').onclick=()=>toast('Período fixado em 30 dias neste protótipo');$('userBtn').onclick=()=>toast('Workspace Principal · Daniel Santos');$('market').onchange=()=>toast('Somente Brasil · TikTok Shop disponível neste protótipo');
$('globalSearch').oninput=e=>{const q=e.target.value.toLowerCase().trim();document.querySelectorAll('#creatorRows tr').forEach(tr=>tr.style.display=!q||tr.textContent.toLowerCase().includes(q)?'':'none');document.querySelectorAll('#contentQueue .contentItem').forEach(el=>el.style.display=!q||el.textContent.toLowerCase().includes(q)?'':'none')};
function toast(t){$('toast').textContent=t;$('toast').style.display='block';setTimeout(()=>$('toast').style.display='none',1800)}
window.__campaignTest={
  reset(){localStorage.removeItem(STORAGE_KEY);location.reload()},
  setDeliveredPending(id,deliveredAt){const x=state.creators.find(v=>v.id===id);if(!x?.activation)return;x.activation.sample='delivered';x.activation.shipping='delivered';x.activation.stage='sample_delivered';x.activation.content='pending';x.activation.deliveredAt=deliveredAt;x.activation.nextAction='REVIEW';evaluateExceptions(new Date(2026,9,10));renderAll()},
  setPendingContent(id){const x=state.creators.find(v=>v.id===id);if(!x?.activation)return;x.activation.contentAsset={type:'VIDEO',title:'Conteúdo aguardando aprovação',status:'pending',views:1200};renderAll()},
  getState(){return clone(state)}
};
renderAll();