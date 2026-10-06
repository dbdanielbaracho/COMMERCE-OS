const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');
const pageUrl = pathToFileURL(path.resolve(__dirname,'../prototype/campaign/index.html')).href;

async function openFresh(page){
  await page.goto(pageUrl);
  await page.evaluate(()=>localStorage.clear());
  await page.reload();
}

test('Campaign functional opens cleanly with shared creators', async ({page})=>{
  const errors=[]; page.on('pageerror',e=>errors.push(String(e)));
  await openFresh(page);
  await expect(page.locator('#creatorRows')).toContainText('Lucas Ferreira');
  await expect(page.locator('#creatorRows')).toContainText('Camila Rocha');
  await expect(page.locator('#creatorRows')).not.toContainText('FOLLOW_UP_SAMPLE');
  await expect(page.locator('#creatorRows')).not.toContainText('REPEAT_CREATOR');
  await expect(page.locator('#creatorRows')).toContainText('Bruno');
  expect(errors).toEqual([]);
});

test('Campaign sample cards use consistent deadline and clear tracking wording', async ({page})=>{
  await openFresh(page);
  const lucas=page.locator('#sampleCards .sampleCard').filter({hasText:'Lucas Ferreira'});
  await expect(lucas).toContainText('Prazo: 09/10/2026');
  await expect(lucas).toContainText('Enviar amostra até 09/10');
  await expect(lucas).toContainText('Tracking: Aguardando envio');
  await expect(lucas).not.toContainText('Aguardando postagem');
});

test('Bulk actions explain selection and eligibility', async ({page})=>{
  await openFresh(page);
  await expect(page.locator('#bulkSample')).toBeDisabled();
  await expect(page.locator('#bulkSample')).toHaveAttribute('title','Selecione creators');
  await page.locator('#selectAll').check();
  await expect(page.locator('#bulkPreview')).toContainText('Amostras: 1 elegíveis / 1 pulados');
  await expect(page.locator('#bulkPreview')).toContainText('Repetir: 1 / 1');
  await expect(page.locator('#bulkSample')).toBeEnabled();
  await expect(page.locator('#bulkRepeat')).toBeEnabled();
});

test('Add creator modal only exposes creators accepted in Outreach', async ({page})=>{
  await openFresh(page);
  await page.locator('#addCreator').click();
  await expect(page.locator('#creatorModal')).toHaveClass(/show/);
  await expect(page.locator('#eligibleCreators')).toContainText('Lucas Ferreira');
  await expect(page.locator('#eligibleCreators')).not.toContainText('Mariana Silva');
  await expect(page.locator('#eligibleCreators')).not.toContainText('Juliana Mendes');
  await expect(page.locator('#eligibleCreators')).toContainText('Já adicionado');
});

test('Sending sample updates pipeline funnel budget tracking and margin', async ({page})=>{
  await openFresh(page);
  const beforeMargin=await page.locator('#campaignMargin').textContent();
  const beforeSpent=await page.locator('#budgetUsage').textContent();
  await expect(page.locator('#funnel .step').filter({hasText:'Amostra'})).toContainText('1');
  const lucas=page.locator('#creatorRows tr').filter({hasText:'Lucas Ferreira'});
  await lucas.locator('.rowAction').click();
  await expect(page.locator('#funnel .step').filter({hasText:'Amostra'})).toContainText('2');
  await expect(page.locator('#pipeSample')).toContainText('Lucas Ferreira');
  await expect(page.locator('#pipeSample')).toContainText('Enviada');
  await expect(page.locator('#sampleCards .sampleCard').filter({hasText:'Lucas Ferreira'})).toContainText('Tracking: Enviada');
  await expect(page.locator('#shippingCost')).toContainText('29,00');
  expect(await page.locator('#campaignMargin').textContent()).not.toBe(beforeMargin);
  expect(await page.locator('#budgetUsage').textContent()).not.toBe(beforeSpent);
});

test('Sample not posted rule fires after five days and moves creator to content', async ({page})=>{
  await openFresh(page);
  await page.evaluate(()=>window.__campaignTest.setDeliveredPending(2,'01/10/2026'));
  const lucas=page.locator('#creatorRows tr').filter({hasText:'Lucas Ferreira'});
  await expect(lucas).toContainText('Aguardar conteúdo');
  await expect(page.locator('#pipeContent')).toContainText('Lucas Ferreira');
  await expect(page.locator('.exceptionRule .badge')).toContainText('1 creator neste estado agora');
  await expect(page.locator('#bottleneck')).toContainText('recebeu amostra e ainda não publicou');
});

test('Content approval follows actual content state', async ({page})=>{
  await openFresh(page);
  await page.evaluate(()=>window.__campaignTest.setPendingContent(3));
  const camila=page.locator('#contentQueue .contentItem').filter({hasText:'Camila Rocha'});
  await expect(camila).toContainText('Aguardando aprovação');
  await expect(camila.locator('.approve')).toBeEnabled();
  await camila.locator('.approve').click();
  await expect(camila).toContainText('Aprovado em 05/10/2026');
  await expect(camila.locator('button',{hasText:'Aprovado'})).toBeDisabled();
});

test('Approved content cannot be approved twice', async ({page})=>{
  await openFresh(page);
  const camila=page.locator('#contentQueue .contentItem').filter({hasText:'Camila Rocha'});
  await expect(camila).toContainText('Aprovado em 04/10/2026');
  await expect(camila.locator('button',{hasText:'Aprovado'})).toBeDisabled();
  await expect(camila.locator('.approve')).toHaveCount(0);
});

test('Bulk action reports eligible and skipped creators', async ({page})=>{
  await openFresh(page);
  await page.locator('#selectAll').check();
  await page.locator('#bulkSample').click();
  await expect(page.locator('#toast')).toContainText('1 elegíveis; 1 pulados');
});

test('Campaign editor saves and persists objective owner and budget', async ({page})=>{
  await openFresh(page);
  await page.locator('#editCampaign').click();
  await page.locator('#editObjective').fill('Aumentar vendas com creators recorrentes');
  await page.locator('#editOwner').fill('Ana');
  await page.locator('#editBudget').fill('4200');
  await page.locator('#saveEdit').click();
  await expect(page.locator('#objective')).toHaveText('Aumentar vendas com creators recorrentes');
  await expect(page.locator('#owner')).toHaveText('Ana');
  await expect(page.locator('#budget')).toContainText('4.200,00');
  await page.reload();
  await expect(page.locator('#objective')).toHaveText('Aumentar vendas com creators recorrentes');
  await expect(page.locator('#owner')).toHaveText('Ana');
});

test('Campaign economics use product cost not retail price and show real margin', async ({page})=>{
  await openFresh(page);
  await expect(page.locator('#sampleCost')).toContainText('19,90');
  await expect(page.locator('#sampleCost')).not.toContainText('79,80');
  await expect(page.locator('.marginHero')).toContainText('Margem depois de comissão + amostra + frete');
});

test('Pipeline keeps each creator in one current stage and campaign has six funnel stages', async ({page})=>{
  await openFresh(page);
  await expect(page.locator('#pipeAccepted')).not.toContainText('Lucas Ferreira');
  await expect(page.locator('#pipeSample')).toContainText('Lucas Ferreira');
  await expect(page.locator('#pipeResult')).toContainText('Camila Rocha');
  await expect(page.locator('#funnel .step')).toHaveCount(6);
  await expect(page.locator('#funnel')).not.toContainText('Vendeu');
});

test('Sample tracking and follow-up automation remain visible', async ({page})=>{
  await openFresh(page);
  await expect(page.locator('#sampleCards')).toContainText('Tracking:');
  await expect(page.locator('.automationNote')).toContainText('Automação de follow-up ativa');
  await expect(page.locator('.automationNote')).not.toContainText('WAIT_FOR_CONTENT');
});


test('Campaign open content shows functional detail modal', async ({page})=>{
  await openFresh(page);
  const camila=page.locator('#contentQueue .contentItem').filter({hasText:'Camila Rocha'});
  await camila.locator('.openContent').click();
  await expect(page.locator('#contentModal')).toHaveClass(/show/);
  await expect(page.locator('#contentModalTitle')).toContainText('Teste de cor + hidratação ao vivo');
  await expect(page.locator('#contentCreator')).toHaveText('Camila Rocha');
  await expect(page.locator('#contentOrders')).toHaveText('86');
  await expect(page.locator('#contentRevenue')).toContainText('3.431,40');
});

test('Campaign topbar matches Outreach behavior and search filters visible rows', async ({page})=>{
  await openFresh(page);
  await page.locator('#periodBtn').click();
  await expect(page.locator('#toast')).toContainText('Período fixado em 30 dias');
  await page.locator('#userBtn').click();
  await expect(page.locator('#toast')).toContainText('Workspace Principal');
  await page.locator('#globalSearch').fill('Camila');
  await expect(page.locator('#creatorRows tr').filter({hasText:'Camila Rocha'})).toBeVisible();
  await expect(page.locator('#creatorRows tr').filter({hasText:'Lucas Ferreira'})).toBeHidden();
});

test('Add creator empty state points back to Outreach when no new accepted creator exists', async ({page})=>{
  await openFresh(page);
  await page.locator('#addCreator').click();
  await expect(page.locator('#eligibleCreators')).toContainText('Nenhum creator novo disponível');
  await expect(page.locator('#goOutreach')).toHaveText('Abrir Outreach');
});
