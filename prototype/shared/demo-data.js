window.CREATOR_COMMERCE_DEMO = {
  sku: {
    id: 'SKU-001',
    name: 'Hidratante Labial com Cor',
    category: 'Beleza e Cuidados Pessoais',
    price: 39.90,
    baseMarginPct: 30.1,
    commissionPct: 12,
    commissionRange: [10,20],
    comparableCount: 38,
    stock: 248,
    unitCost: 9.95
  },
  campaign: {
    id: 'CMP-001',
    name: 'Escala Hidratante Labial — Outubro',
    objective: 'Gerar vendas incrementais com creators de beleza',
    type: 'Affiliate activation',
    start: '08/10/2026',
    end: '31/10/2026',
    owner: 'Bruno',
    budget: 3500,
    samplePolicy: '1 unidade por creator aceito; frete incluso',
    brief: 'Demonstrar cor, hidratação e uso diário. Priorizar vídeo curto e LIVE quando houver fit.',
    bottleneck: 'Lucas: amostra aprovada; envio pendente até 09/10',
    sampleSlaDays: 5,
    sampleReminder: 'Lembrar creator 24h antes do prazo e novamente no vencimento'
  },
  contentResults: {
    businessContext: {orders: 412, revenue: 16438.00, period: 'Últimos 30 dias', source: 'TikTok Shop · loja', freshness: '2 h'},
    contents: [
      {id:'CNT-001',creatorId:3,type:'LIVE',title:'Teste de cor + hidratação ao vivo',publishedAt:'04/10/2026 19:30',views:48200,orders:86,revenue:3431.40,settledOrders:63,settledRevenue:2513.70,provisionalOrders:23,provisionalRevenue:917.70,source:'TikTok Shop Affiliate',status:'MEASURED_PROVISIONAL',link:'#live-demo'},
      {id:'CNT-002',creatorId:3,type:'VIDEO',title:'3 formas de usar o hidratante labial com cor',publishedAt:'02/10/2026 14:10',views:31600,orders:41,revenue:1635.90,settledOrders:34,settledRevenue:1356.60,provisionalOrders:7,provisionalRevenue:279.30,source:'TikTok Shop Affiliate',status:'MEASURED_PROVISIONAL',link:'#video-demo'}
    ],
    learning: [
      {creatorId:3,recommendation:'Repetir creator com conteúdo LIVE',decision:'Aprovada',action:'LIVE publicada + comissão 15%',result:'127 pedidos atribuídos · R$ 5.067,30 · margem positiva'},
      {creatorId:2,recommendation:'Acompanhar amostra antes de cobrar conteúdo',decision:'Em execução',action:'Amostra enviada / tracking ativo',result:'Sem conteúdo publicado ainda'}
    ]
  },
  creators: [
    {id:1,n:'Mariana Silva',h:'@marisilva',f:'2,1M',e:'4,8%',v:128400,sim:14,cm:12,rel:'new',relLabel:'Novo',aff:'Muito alta',reason:'Já promoveu 8 produtos similares',p:92,live:true,source:'TikTok',content:'live',outreach:{status:'waiting',owner:'Ana',channel:'TikTok Affiliate',last:'05/10, 14:20',next:'07/10, 14:20'}},
    {id:2,n:'Lucas Ferreira',h:'@lucasferr',f:'1,8M',e:'3,9%',v:96200,sim:12,cm:10,rel:'worked',relLabel:'Já trabalhou · 15/08/26',aff:'Alta',reason:'Alto engajamento em beleza',p:88,live:false,source:'TikTok',content:'video',outreach:{status:'accepted',owner:'Bruno',channel:'TikTok Affiliate',last:'05/10, 10:15',next:'Adicionar à campanha'},activation:{stage:'sample_approved',sample:'approved',shipping:'pending',content:'pending',orders:0,revenue:0,sampleCost:9.95,shippingCost:14.5,owner:'Bruno',nextAction:'FOLLOW_UP_SAMPLE',sampleApprovedAt:'07/10/2026',shipDue:'09/10/2026',contentDue:'—',reminder:'Enviar amostra até 09/10',tracking:{status:'Aguardando envio',carrier:'—',code:'—',nextCheck:'09/10/2026 09:00'}}},
    {id:3,n:'Camila Rocha',h:'@camilarocha',f:'1,2M',e:'6,1%',v:78500,sim:11,cm:15,rel:'active',relLabel:'Ativo em campanha',aff:'Alta',reason:'Já promoveu 5 produtos similares',p:85,live:true,source:'TikTok',content:'live',outreach:{status:'campaign',owner:'Bruno',channel:'TikTok Affiliate',last:'04/10, 10:15',next:'Ver campanha'},activation:{stage:'posted',sample:'delivered',shipping:'delivered',content:'posted',orders:86,revenue:3431.4,sampleCost:9.95,shippingCost:14.5,owner:'Bruno',nextAction:'REPEAT_CREATOR',sampleApprovedAt:'01/10/2026',shipDue:'02/10/2026',deliveredAt:'03/10/2026',contentDue:'08/10/2026',postedAt:'04/10/2026',reminder:'Concluído antes do prazo',tracking:{status:'Entregue',carrier:'Correios',code:'BR123456789BR',deliveredAt:'03/10/2026'},contentAsset:{type:'LIVE',title:'Teste de cor + hidratação ao vivo',status:'approved',approvedAt:'04/10/2026',views:48200}}},
    {id:4,n:'Juliana Mendes',h:'@julianamendes',f:'680K',e:'5,2%',v:54800,sim:7,cm:18,rel:'new',relLabel:'Novo',aff:'Média',reason:'Conteúdo de maquiagem com boa afinidade',p:78,live:false,source:'TikTok',content:'video',outreach:{status:'waiting',owner:'Carlos',channel:'TikTok Affiliate',last:'04/10, 16:50',next:'06/10, 16:50'}},
    {id:5,n:'Thiago Lima',h:'@thiagolima',f:'420K',e:'4,1%',v:41200,sim:6,cm:8,rel:'worked',relLabel:'Já trabalhou · 12/07/26',aff:'Média',reason:'Já promoveu 3 produtos similares',p:74,live:false,source:'TikTok',content:'video',outreach:{status:'responded',owner:'Ana',channel:'TikTok Affiliate',last:'05/10, 09:34',next:'Responder'}},
    {id:6,n:'Letícia Santos',h:'@letisantos',f:'310K',e:'5,8%',v:38600,sim:5,cm:12,rel:'new',relLabel:'Novo',aff:'Média',reason:'Engajamento alto e crescimento recente',p:71,live:true,source:'TikTok',content:'live',outreach:{status:'responded',owner:'Ana',channel:'TikTok Affiliate',last:'05/10, 09:34',next:'Responder'}},
    {id:7,n:'Bianca Oliveira',h:'@biancaoliveira',f:'180K',e:'4,9%',v:28100,sim:3,cm:12,rel:'new',relLabel:'Novo',aff:'Baixa',reason:'Boa afinidade, baixo volume',p:64,live:false,source:'TikTok',content:'video',outreach:{status:'blocked',owner:'Carlos',channel:'TikTok Affiliate',last:'02/10, 11:00',next:'Bloqueado (opt-out)'}},
    {id:8,n:'Pedro Martins',h:'@pedromartins',f:'150K',e:'3,1%',v:21700,sim:2,cm:10,rel:'new',relLabel:'Novo',aff:'Baixa',reason:'Novo para o lojista, conteúdo promissor',p:61,live:false,source:'TikTok',content:'video',outreach:{status:'new',owner:'Ana',channel:'TikTok Affiliate',last:'—',next:'Convidar'}},
    {id:9,n:'Rafael Costa',h:'@rafaelcosta',f:'950K',e:'3,4%',v:62100,sim:9,cm:10,rel:'declined',relLabel:'Recusou · 21/09/26',aff:'Alta',reason:'Conversão forte, mas recusa recente',p:32,live:false,source:'TikTok',content:'video',retry:'21/12/26',outreach:{status:'declined',owner:'Bruno',channel:'TikTok Affiliate',last:'21/09, 11:12',next:'21/12/26'}},
    {id:10,n:'Gustavo Almeida',h:'@gustavoalmeida',f:'290K',e:'3,4%',v:32400,sim:4,cm:10,rel:'declined',relLabel:'Recusou · 10/08/26',aff:'Média',reason:'Crescimento recente; aguardando cooldown',p:28,live:false,source:'TikTok',content:'video',retry:'10/11/26',outreach:{status:'declined',owner:'Bruno',channel:'TikTok Affiliate',last:'10/08, 13:05',next:'10/11/26'}}
  ]
};
