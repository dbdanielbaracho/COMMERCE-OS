const { test, expect } = require('@playwright/test');
const path=require('path');const {pathToFileURL}=require('url');
const pageUrl=pathToFileURL(path.resolve(__dirname,'../prototype/content-results/index.html')).href;

test('Content v2 separates attributed performance from business context', async ({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(pageUrl);
  await expect(page.locator('.answer').filter({hasText:'Desempenho atribuído'})).toContainText('R$ 5.067,30');
  await expect(page.locator('.context')).toContainText('Contexto ≠ causalidade');
  await expect(page.locator('#businessRevenue')).toContainText('16.438,00');
  await expect(page.locator('#attributedShare')).toContainText('30,8%');
  expect(errors).toEqual([]);
});

test('Content v2 uses Portuguese product language and hides internal state codes', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('body')).toContainText('Provisório');
  await expect(page.locator('body')).toContainText('Liquidado');
  await expect(page.locator('#contentRows')).toContainText('Vídeo');
  await expect(page.locator('#contentRows')).toContainText('Atualizado há 2 h');
  await expect(page.locator('body')).not.toContainText('MEASURED_PROVISIONAL');
  await expect(page.locator('body')).not.toContainText('SETTLED');
  await expect(page.locator('body')).not.toContainText('Freshness');
});

test('Content v2 shows LIVE and Video with margin conversion rpm and trends', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#contentRows tr')).toHaveCount(2);
  await expect(page.locator('#contentRows')).toContainText('Camila Rocha');
  await expect(page.locator('table')).toContainText('Conversão');
  await expect(page.locator('table')).toContainText('Receita / 1k views');
  await expect(page.locator('table')).toContainText('Margem');
  await expect(page.locator('#contentRows .spark')).toHaveCount(2);
  await expect(page.locator('#contentRows')).toContainText('provisória');
});

test('Content v2 separates settled and provisional orders and flags profit incomplete', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#settledOrders')).toHaveText('97');
  await expect(page.locator('#provOrders')).toHaveText('30');
  await expect(page.locator('.creatorSummaryRow')).toContainText('Lucro incompleto');
  await expect(page.locator('.answer').filter({hasText:'Margem atribuída'})).toContainText('Lucro incompleto · provisório');
});

test('Content detail exposes trend efficiency margin provenance and honest link state', async ({page})=>{
  await page.goto(pageUrl);
  await page.locator('#contentRows .detail').first().click();
  await expect(page.locator('#detailModal')).toHaveClass(/show/);
  await expect(page.locator('#detailTitle')).toContainText('Teste de cor + hidratação ao vivo');
  await expect(page.locator('#detailOrders')).toHaveText('86');
  await expect(page.locator('#detailSettled')).toHaveText('63');
  await expect(page.locator('#detailProv')).toHaveText('23');
  await expect(page.locator('#detailConversion')).toContainText('%');
  await expect(page.locator('#detailRpm')).toContainText('R$');
  await expect(page.locator('#detailMargin')).toContainText('provisória');
  await expect(page.locator('#detailTrend .spark')).toHaveCount(1);
  await expect(page.locator('#detailSource')).toHaveText('TikTok Shop Affiliate');
  await expect(page.locator('#detailFreshness')).toHaveText('Atualizado há 2 h');
  await expect(page.locator('#openPublishedContent')).toBeDisabled();
  await expect(page.locator('#openPublishedContent')).toHaveAttribute('title','URL real do conteúdo não disponível neste fixture DEMO');
});

test('Learning closes and explicitly reuses recommendation decision action result history', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('.learningCard')).toContainText('Recomendação');
  await expect(page.locator('.learningCard')).toContainText('Decisão');
  await expect(page.locator('.learningCard')).toContainText('Ação');
  await expect(page.locator('.learningCard')).toContainText('Resultado');
  await expect(page.locator('.learningCard')).toContainText('Reutilização');
  await expect(page.locator('.learningCard')).toContainText('Será usado na próxima Shortlist');
  await expect(page.locator('.learningCard')).toContainText('margem positiva, ainda provisória');
  await page.locator('#showLearning').click();
  await expect(page.locator('#learningCard')).toBeVisible();
});

test('Content v2 filters by type and creator', async ({page})=>{
  await page.goto(pageUrl);
  await page.locator('#typeFilter').selectOption('LIVE');
  await expect(page.locator('#contentRows tr')).toHaveCount(1);
  await expect(page.locator('#contentRows')).toContainText('Teste de cor + hidratação ao vivo');
  await page.locator('#typeFilter').selectOption('all');
  await page.locator('#creatorFilter').selectOption('3');
  await expect(page.locator('#contentRows tr')).toHaveCount(2);
});

test('Content v2 numeric headers sort rows', async ({page})=>{
  await page.goto(pageUrl);
  await page.locator('th[data-sort="views"]').click();
  await expect(page.locator('#contentRows tr').first()).toContainText('Teste de cor + hidratação ao vivo');
  await page.locator('th[data-sort="views"]').click();
  await expect(page.locator('#contentRows tr').first()).toContainText('3 formas de usar o hidratante labial com cor');
});

test('Content v2 confirms continuity with Campaign totals', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('.campaignTruth')).toContainText('2 · LIVE + Vídeo');
  await expect(page.locator('#campaignOrders')).toHaveText('127');
  await expect(page.locator('#campaignRevenue')).toContainText('5.067,30');
});

test('Content v2 topbar and search controls are functional', async ({page})=>{
  await page.goto(pageUrl);
  await page.locator('#periodBtn').click();
  await expect(page.locator('#toast')).toContainText('Período fixado em 30 dias');
  await page.locator('#globalSearch').fill('LIVE');
  await expect(page.locator('#contentRows tr')).toHaveCount(1);
  await expect(page.locator('#contentRows')).toContainText('Teste de cor + hidratação ao vivo');
});
