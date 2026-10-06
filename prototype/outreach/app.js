const DEMO=window.CREATOR_COMMERCE_DEMO;
const SKU=DEMO.sku;
const C=DEMO.creators.map(x=>({...x}));
let tab='all',sel=new Set(),quotaUsed=45,quotaMax=2500,demoNowMs=Date.parse('2026-10-05T15:00:00-03:00'),openCreatorId=null;
const $=id=>document.getElementById(id);
const money=n=>'R$ '+n.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});

function avatar(id){
  const cs=['#f9d5c4','#cde1ff','#f8d1da','#e2d4ff','#d4f1df'];
  const bg=cs[id%cs.length];
  return "data:image/svg+xml;base64,"+btoa("<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' rx='32' fill='"+bg+"'/><circle cx='32' cy='24' r='12' fill='#8b5e4b'/><path d='M12 64c3-16 12-24 20-24s17 8 20 24' fill='#223b68'/></svg>");
}
function statusLabel(s){return {new:'Novo',waiting:'Aguardando',responded:'Resposta',accepted:'Aceitou',campaign:'Em campanha',declined:'Recusou',blocked:'Bloqueado'}[s]||s}
function statusClass(s){return s==='accepted'||s==='campaign'?'green':s==='declined'||s==='blocked'?'red':s==='waiting'?'amber':s==='responded'?'blue':'blue'}
function followDate(x){
  const map={'07/10, 14:20':'2026-10-07T14:20:00-03:00','06/10, 16:50':'2026-10-06T16:50:00-03:00','07/10, 13:05':'2026-10-07T13:05:00-03:00'};
  return map[x.outreach.next]||null;
}
function followDue(x){const iso=followDate(x);return x.outreach.status==='waiting'&&iso&&demoNowMs>=Date.parse(iso)}
function inviteEligible(x){return quotaUsed<quotaMax && x.outreach.status==='new'}
function campaignEligible(x){return x.outreach.status==='accepted'||x.outreach.status==='campaign'}
function sampleEligible(x){return x.outreach.status==='accepted'||x.outreach.status==='campaign'}
function marginAfter(x,commission=x.cm){return Math.max(-99,SKU.baseMarginPct-commission)}
function reasonSource(x){const r=x.reason.toLowerCase();return (r.includes('recusa')||r.includes('lojista')||r.includes('já trabalhou'))?'Seu histórico':'TikTok'}

function tabs(){
  const states=[['all','Todos'],['waiting','Aguardando'],['responded','Responderam'],['accepted','Aceitaram'],['campaign','Em campanha'],['declined','Recusaram'],['blocked','Bloqueados']];
  $('tabs').innerHTML=states.map(([k,l])=>"<button class='tab "+(tab===k?'on':'')+"' data-tab='"+k+"'>"+l+" ("+(k==='all'?C.length:C.filter(x=>x.outreach.status===k).length)+")</button>").join('');
  document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{tab=b.dataset.tab;tabs();rows()});
}
function filtered(){
  const q=$('globalSearch').value.trim().toLowerCase();
  return C.filter(x=>(tab==='all'||x.outreach.status===tab)
    &&($('statusFilter').value==='all'||x.outreach.status===$('statusFilter').value)
    &&($('ownerFilter').value==='all'||x.outreach.owner===$('ownerFilter').value)
    &&($('channelFilter').value==='all'||x.outreach.channel===$('channelFilter').value)
    &&(!q||x.n.toLowerCase().includes(q)||x.h.toLowerCase().includes(q)));
}
function nextAction(x){
  const s=x.outreach.status;
  if(s==='waiting')return followDue(x)?"<button class='btn' data-act='follow' data-id='"+x.id+"'>Enviar follow-up</button>":"<span class='badge blue'>Aguardar até "+x.outreach.next+"</span>";
  if(s==='responded')return "<button class='btn' data-act='respond' data-id='"+x.id+"'>Responder</button>";
  if(s==='accepted')return "<button class='btn' data-act='campaign' data-id='"+x.id+"'>Adicionar à campanha</button>";
  if(s==='campaign')return "<button class='btn' data-act='campaign' data-id='"+x.id+"'>Ver campanha</button>";
  if(s==='declined')return "<button class='btn' data-act='decline' data-id='"+x.id+"'>Ver recusa</button>";
  if(s==='blocked')return "<span class='badge red'>Opt-out</span>";
  if(s==='new')return inviteEligible(x)?"<button class='btn primary' data-act='invite' data-id='"+x.id+"'>Convidar</button>":"<span class='badge red'>Cota atingida</span>";
  return "<span class='badge blue'>Sem ação</span>";
}
function sampleText(x){return x.outreach.status==='campaign'?'Enviada':sampleEligible(x)?'Elegível após aceite':'Não enviada'}

function rows(){
  const a=filtered();
  $('body').innerHTML=a.map(x=>"<tr>"+
    "<td><input class='pick' data-id='"+x.id+"' type='checkbox' "+(sel.has(x.id)?'checked':'')+"></td>"+
    "<td><div class='creator'><img class='av' src='"+avatar(x.id)+"'><div><b>"+x.n+"</b><div class='sub'>"+x.h+(x.live?" · LIVE":"")+"</div></div></div></td>"+
    "<td>"+x.f+"</td><td class='prio'>"+x.p+"</td>"+
    "<td><span class='badge "+statusClass(x.outreach.status)+"'>"+statusLabel(x.outreach.status)+"</span></td>"+
    "<td>"+x.reason+" <span class='sub'>ⓘ "+reasonSource(x)+"</span></td>"+
    "<td>"+x.outreach.last+"</td><td>"+nextAction(x)+"</td>"+
    "<td><b>"+x.cm+"%</b><div class='sub'>"+SKU.commissionRange[0]+"–"+SKU.commissionRange[1]+"% · "+SKU.comparableCount+" comparáveis</div></td>"+
    "<td>"+sampleText(x)+"</td><td>"+x.outreach.owner+"</td>"+
    "<td><button class='btn detail' data-id='"+x.id+"'>Ver detalhes</button></td></tr>").join('');
  bind();bulk();
}
function bind(){
  document.querySelectorAll('.pick').forEach(e=>e.onchange=()=>{const id=+e.dataset.id;e.checked?sel.add(id):sel.delete(id);bulk()});
  document.querySelectorAll('.detail').forEach(e=>e.onclick=()=>open(+e.dataset.id));
  document.querySelectorAll('[data-act]').forEach(e=>e.onclick=()=>doAction(e.dataset.act,+e.dataset.id));
}
function preview(action){
  const picked=C.filter(x=>sel.has(x.id));
  let ok=[];
  if(action==='invite')ok=picked.filter(inviteEligible);
  if(action==='follow')ok=picked.filter(followDue);
  if(action==='campaign')ok=picked.filter(x=>x.outreach.status==='accepted');
  return {ok,skip:picked.filter(x=>!ok.includes(x))};
}
function bulk(){
  const n=sel.size;$('selectedCount').textContent=n+' selecionados';
  const a=preview('invite'),f=preview('follow'),g=preview('campaign');
  $('bulkInvite').disabled=a.ok.length===0;$('bulkFollow').disabled=f.ok.length===0;$('bulkCampaign').disabled=g.ok.length===0;
  $('bulkPreview').textContent=n?('Convite: '+a.ok.length+' elegíveis; '+a.skip.length+' pulados · Follow-up: '+f.ok.length+' elegíveis · Campanha: '+g.ok.length+' elegíveis'):'Selecione creators para prévia de elegibilidade.';
}
function doAction(act,id){
  const x=C.find(v=>v.id===id);
  if(act==='invite'&&!inviteEligible(x))return toast('Envio bloqueado por estado, quota, cooldown ou opt-out');
  if(act==='follow'&&!followDue(x))return toast('Follow-up ainda em cooldown');
  if(act==='campaign'&&!campaignEligible(x))return toast('Disponível após o aceite');
  if(act==='decline')return toast('Recusa registrada. Reavaliar após '+(x.retry||'cooldown'));
  toast(act==='campaign'?'Abrindo campanha de '+x.n:act==='respond'?'Abrindo conversa com '+x.n:'Ação liberada para '+x.n);
}

function proposalHTML(x){
  const canCampaign=campaignEligible(x);
  return "<div class='proposal card' style='padding:10px;margin-top:12px'>"+
    "<div class='row'><b>Resumo da proposta</b><button class='btn' id='editProposal'>Editar</button></div>"+
    "<div class='row'><span>Produto</span><b>"+SKU.name+"</b></div>"+
    "<div class='row'><span>Comissão proposta</span><b><input id='proposalCommission' type='number' min='0' max='50' step='1' value='"+x.cm+"' style='width:64px'>%</b></div>"+
    "<div class='row'><span>Faixa observada</span><b>"+SKU.commissionRange[0]+"–"+SKU.commissionRange[1]+"% · "+SKU.comparableCount+" comparáveis</b></div>"+
    "<div class='row'><span>Margem depois da comissão</span><b id='afterMargin'>"+marginAfter(x).toFixed(1).replace('.',',')+"%</b></div>"+
    "<div class='row'><span>Amostra</span><b>"+(sampleEligible(x)?'Elegível':'Após aceite')+"</b></div>"+
    "<div class='row'><span>Canal</span><b>"+x.outreach.channel+"</b></div>"+
    "<div class='row'><span>Validade</span><b>7 dias</b></div>"+
    "<button class='btn primary' id='campaignFromDrawer' style='width:100%;margin-top:10px' "+(!canCampaign?'disabled title="Disponível após o aceite"':'')+">"+(x.outreach.status==='campaign'?'Ver campanha':'Adicionar à campanha')+"</button>"+
    (!canCampaign?"<div class='sub' style='text-align:center;margin-top:5px'>Disponível após o aceite</div>":"")+"</div>";
}
function pane(x,p){
  document.querySelectorAll('.drawerTabs button').forEach(b=>b.classList.toggle('on',b.dataset.pane===p));
  if(p==='conversation'){
    $('pane').innerHTML="<div class='timeline'><b>"+x.outreach.last+"</b><div class='sub'>Convite via "+x.outreach.channel+"</div><div class='bubble'>Olá, "+x.n.split(' ')[0]+"! Queremos convidar você para divulgar nosso "+SKU.name+".<br><br>Comissão proposta: <b>"+x.cm+"%</b><br>Amostra: após aceite.</div><div class='sub'>Próxima ação: "+x.outreach.next+"</div></div><textarea id='msg' style='width:100%;margin-top:12px' placeholder='Digite uma mensagem...'></textarea><button class='btn primary' id='sendMsg' style='margin-top:8px' "+(x.outreach.status==='blocked'?'disabled title="Opt-out"':'')+">Enviar</button>"+proposalHTML(x);
  }else if(p==='details'){
    $('pane').innerHTML="<h3>Detalhes</h3><p>Motivo: "+x.reason+"</p><p>Responsável: "+x.outreach.owner+"</p><p>Canal: "+x.outreach.channel+"</p>";
  }else if(p==='economics'){
    $('pane').innerHTML=proposalHTML(x);
  }else{
    $('pane').innerHTML="<h3>Conteúdos</h3><p>"+(x.live?'LIVE + vídeos':'Vídeos')+" usados como evidência na Shortlist.</p>";
  }
  bindDrawer();
}
function bindDrawer(){
  const x=C.find(v=>v.id===openCreatorId);
  const inp=$('proposalCommission');if(inp)inp.oninput=()=>{$('afterMargin').textContent=(SKU.baseMarginPct-(+inp.value||0)).toFixed(1).replace('.',',')+'%'};
  const b=$('campaignFromDrawer');if(b)b.onclick=()=>doAction('campaign',x.id);
  const send=$('sendMsg');if(send)send.onclick=()=>toast(x.outreach.status==='blocked'?'Bloqueado por opt-out':'Mensagem preparada para envio');
}
function open(id){
  openCreatorId=id;const x=C.find(v=>v.id===id);
  $('dName').textContent=x.n;$('dHandle').textContent=x.h;
  $('dBadges').innerHTML="<span class='badge "+statusClass(x.outreach.status)+"'>"+statusLabel(x.outreach.status)+"</span> "+(x.live?"<span class='badge red'>LIVE</span>":"");
  pane(x,'conversation');$('drawer').classList.add('open');
}
function toast(s){$('toast').textContent=s;$('toast').style.display='block';setTimeout(()=>$('toast').style.display='none',1800)}

$('skuName').textContent=SKU.name;$('skuMeta').textContent=SKU.id+' · '+SKU.category;$('skuPrice').textContent=money(SKU.price);$('skuCommission').textContent=SKU.commissionPct+'%';$('skuMargin').textContent=SKU.baseMarginPct.toFixed(1).replace('.',',')+'%';$('skuStock').textContent=SKU.stock;
$('quotaUsed').textContent=quotaUsed;$('quotaMax').textContent=quotaMax;
['statusFilter','ownerFilter','channelFilter'].forEach(id=>$(id).onchange=rows);$('globalSearch').oninput=rows;
$('all').onclick=e=>{const visible=filtered();sel=e.currentTarget.checked?new Set(visible.map(x=>x.id)):new Set();rows()};
$('bulkInvite').onclick=()=>{const p=preview('invite');toast(p.ok.length+' elegíveis; '+p.skip.length+' pulados por estado/quota/cooldown/opt-out')};
$('bulkFollow').onclick=()=>{const p=preview('follow');toast(p.ok.length+' elegíveis; '+p.skip.length+' pulados')};
$('bulkCampaign').onclick=()=>{const p=preview('campaign');toast(p.ok.length+' aceitos; '+p.skip.length+' pulados')};
$('close').onclick=()=>$('drawer').classList.remove('open');
document.querySelectorAll('.drawerTabs button').forEach(b=>b.onclick=()=>{const x=C.find(v=>v.id===openCreatorId);if(x)pane(x,b.dataset.pane)});
$('navSku').onclick=()=>location.href='../sku-opportunity/index.html';$('navShortlist').onclick=()=>location.href='../creator-shortlist/index.html';$('navEconomics').onclick=()=>location.href='../unit-economics/index.html';
$('periodBtn').onclick=()=>toast('Período fixado em 30 dias neste protótipo');$('userBtn').onclick=()=>toast('Workspace Principal · Daniel Santos');$('market').onchange=()=>toast('Somente Brasil · TikTok Shop disponível neste protótipo');$('exportBtn').onclick=()=>toast('Exportação aguarda decisão jurídica P0');
tabs();rows();