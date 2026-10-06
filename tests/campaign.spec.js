const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');
const pageUrl = pathToFileURL(path.resolve(__dirname,'../prototype/campaign/index.html')).href;

test('Campaign v2 renders shared creators and operational next actions', async ({page})=>{
  const errors=[]; page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(pageUrl);
  await expect(page.locator('#creatorRows')).toContainText('Lucas Ferreira');
  await expect(page.locator('#creatorRows')).toContainText('Camila Rocha');
  await expect(page.locator('#creatorRows')).toContainText('FOLLOW_UP_SAMPLE');
  await expect(page.locator('#creatorRows')).toContainText('REPEAT_CREATOR');
  await expect(page.locator('#creatorRows')).toContainText('Bruno');
  expect(errors).toEqual([]);
});

test('Campaign v2 exposes sample SLA, Portuguese states and not-posted rule', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#sampleCards')).toContainText('Aprovada');
  await expect(page.locator('#sampleCards')).toContainText('Publicada');
  await expect(page.locator('.exceptionRule')).toContainText('recebeu amostra e não publicou');
  await expect(page.locator('.exceptionRule')).toContainText('WAIT_FOR_CONTENT');
});

test('Campaign v2 shows content approval and real campaign margin', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#contentQueue')).toContainText('Teste de cor + hidratação ao vivo');
  await expect(page.locator('#contentQueue')).toContainText('Aprovar conteúdo');
  await expect(page.locator('.marginHero')).toContainText('Margem depois de comissão + amostra + frete');
  await expect(page.locator('#sampleCost')).not.toContainText('79,80');
});

test('Campaign v2 funnel has no duplicated sold/converted stage and budget shows spend', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#funnel .step')).toHaveCount(6);
  await expect(page.locator('#funnel')).not.toContainText('Vendeu');
  await expect(page.locator('#funnel')).toContainText('Converteu');
  await expect(page.locator('#budgetUsage')).toContainText('gasto');
  await expect(page.locator('#budgetUsage')).toContainText('restante');
});

test('Campaign v2 bulk actions react to creator selection', async ({page})=>{
  await page.goto(pageUrl);
  await page.locator('#selectAll').check();
  await expect(page.locator('#selectedCount')).toContainText('2 selecionados');
  await expect(page.locator('#bulkSample')).toBeEnabled();
  await expect(page.locator('#bulkRepeat')).toBeEnabled();
});


test('Campaign pipeline keeps each creator in one current stage', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#pipeAccepted')).not.toContainText('Lucas Ferreira');
  await expect(page.locator('#pipeSample')).toContainText('Lucas Ferreira');
  await expect(page.locator('#pipeResult')).toContainText('Camila Rocha');
});

test('Campaign approved content does not offer approval twice and sample tracking is visible', async ({page})=>{
  await page.goto(pageUrl);
  const camila=page.locator('#contentQueue .contentItem').filter({hasText:'Camila Rocha'});
  await expect(camila).toContainText('Aprovado em 04/10/2026');
  await expect(camila.locator('button',{hasText:'Aprovado'})).toBeDisabled();
  await expect(page.locator('#sampleCards')).toContainText('Tracking:');
  await expect(page.locator('.automationNote')).toContainText('Automação de follow-up ativa');
});
