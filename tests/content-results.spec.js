const { test, expect } = require('@playwright/test');
const path=require('path');const {pathToFileURL}=require('url');
const pageUrl=pathToFileURL(path.resolve(__dirname,'../prototype/content-results/index.html')).href;

test('Content results separates attributed performance from business context', async ({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(pageUrl);
  await expect(page.locator('.answer').filter({hasText:'Desempenho atribuído'})).toContainText('R$ 5.067,30');
  await expect(page.locator('.context')).toContainText('Contexto ≠ causalidade');
  await expect(page.locator('#businessRevenue')).toContainText('16.438,00');
  expect(errors).toEqual([]);
});

test('Content results shows published LIVE and VIDEO with creator and dates', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#contentRows')).toContainText('LIVE');
  await expect(page.locator('#contentRows')).toContainText('VIDEO');
  await expect(page.locator('#contentRows')).toContainText('Camila Rocha');
  await expect(page.locator('#contentRows')).toContainText('04/10/2026');
  await expect(page.locator('#contentRows')).toContainText('02/10/2026');
});

test('Content results separates settled and provisional orders', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#settledOrders')).toHaveText('97');
  await expect(page.locator('#provOrders')).toHaveText('30');
  await expect(page.locator('#contentRows')).toContainText('63');
  await expect(page.locator('#contentRows')).toContainText('23');
});

test('Content detail opens and exposes attributed order state', async ({page})=>{
  await page.goto(pageUrl);
  await page.locator('#contentRows .detail').first().click();
  await expect(page.locator('#detailModal')).toHaveClass(/show/);
  await expect(page.locator('#detailTitle')).toContainText('Teste de cor + hidratação ao vivo');
  await expect(page.locator('#detailOrders')).toHaveText('86');
  await expect(page.locator('#detailSettled')).toHaveText('63');
  await expect(page.locator('#detailProv')).toHaveText('23');
});

test('Learning closes recommendation decision action result loop', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('.learningCard')).toContainText('Recomendação');
  await expect(page.locator('.learningCard')).toContainText('Decisão');
  await expect(page.locator('.learningCard')).toContainText('Ação');
  await expect(page.locator('.learningCard')).toContainText('Resultado');
  await expect(page.locator('.learningCard')).toContainText('Lucas Ferreira');
  await expect(page.locator('.learningCard')).toContainText('Camila Rocha');
});

test('Content topbar and search controls are functional', async ({page})=>{
  await page.goto(pageUrl);
  await page.locator('#periodBtn').click();
  await expect(page.locator('#toast')).toContainText('Período fixado em 30 dias');
  await page.locator('#globalSearch').fill('LIVE');
  await expect(page.locator('#contentRows tr').filter({hasText:'Teste de cor + hidratação ao vivo'})).toBeVisible();
  await expect(page.locator('#contentRows tr').filter({hasText:'3 formas de usar'})).toBeHidden();
});


test('Content results filters by type and creator', async ({page})=>{
  await page.goto(pageUrl);
  await page.locator('#typeFilter').selectOption('LIVE');
  await expect(page.locator('#contentRows tr')).toHaveCount(1);
  await expect(page.locator('#contentRows')).toContainText('Teste de cor + hidratação ao vivo');
  await page.locator('#typeFilter').selectOption('all');
  await page.locator('#creatorFilter').selectOption('3');
  await expect(page.locator('#contentRows tr')).toHaveCount(2);
});

test('Content results exposes efficiency provenance and honest link state', async ({page})=>{
  await page.goto(pageUrl);
  await expect(page.locator('#contentRows')).toContainText('Pedidos / 1k views');
  await expect(page.locator('#contentRows')).toContainText('freshness 2 h');
  await page.locator('#contentRows .detail').first().click();
  await expect(page.locator('#detailSource')).toHaveText('TikTok Shop Affiliate');
  await expect(page.locator('#detailFreshness')).toHaveText('2 h');
  await expect(page.locator('#openPublishedContent')).toBeDisabled();
  await expect(page.locator('#openPublishedContent')).toHaveAttribute('title','URL real do conteúdo não disponível neste fixture DEMO');
});
