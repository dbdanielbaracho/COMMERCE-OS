const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

const pageUrl = pathToFileURL(path.resolve(__dirname,'../prototype/outreach/index.html')).href;
const refUrl = pathToFileURL(path.resolve(__dirname,'../prototype/outreach/reference-approved.html')).href;
const shortlistUrl = pathToFileURL(path.resolve(__dirname,'../prototype/creator-shortlist/index.html')).href;

test('Outreach preserves Shortlist continuity from shared data', async ({ browser }) => {
  const a=await browser.newPage(), b=await browser.newPage();
  await a.goto(shortlistUrl); await b.goto(pageUrl);
  await expect(a.locator('body')).toContainText('Hidratante Labial com Cor');
  await expect(b.locator('#skuName')).toHaveText('Hidratante Labial com Cor');
  await expect(b.locator('#skuMeta')).toContainText('SKU-001');
  await expect(b.locator('#skuPrice')).toHaveText('R$ 39,90');
  await expect(b.locator('#skuCommission')).toHaveText('12%');
  await expect(b.locator('#skuStock')).toHaveText('248');
  const shortMariana=await a.locator('#body tr').filter({hasText:'Mariana Silva'}).innerText();
  const outMariana=await b.locator('#body tr').filter({hasText:'Mariana Silva'}).innerText();
  expect(shortMariana).toContain('@marisilva');
  expect(outMariana).toContain('@marisilva');
  expect(shortMariana).toContain('2,1M');
  expect(outMariana).toContain('2,1M');
  await a.close(); await b.close();
});

test('Outreach campaign and sample unlock only after acceptance', async ({ page }) => {
  await page.goto(pageUrl);
  const waiting=page.locator('#body tr').filter({hasText:'Mariana Silva'});
  await waiting.locator('.detail').click();
  await expect(page.locator('#campaignFromDrawer')).toBeDisabled();
  await expect(page.locator('#pane')).toContainText('Disponível após o aceite');
  await page.locator('#close').click();

  const accepted=page.locator('#body tr').filter({hasText:'Lucas Ferreira'});
  await accepted.locator('.detail').click();
  await expect(page.locator('#campaignFromDrawer')).toBeEnabled();
  await expect(page.locator('#pane')).toContainText('Elegível');
});

test('Outreach declined and opt-out creators cannot receive invite', async ({ page }) => {
  await page.goto(pageUrl);
  const declined=page.locator('#body tr').filter({hasText:'Rafael Costa'});
  await expect(declined).toContainText('Recusou');
  await expect(declined).not.toContainText('Convidar');

  const blocked=page.locator('#body tr').filter({hasText:'Bianca Oliveira'});
  await expect(blocked).toContainText('Bloqueado');
  await expect(blocked).toContainText('Opt-out');
  await blocked.locator('.detail').click();
  await expect(page.locator('#sendMsg')).toBeDisabled();
});

test('Outreach quota blocks new invitation at limit', async ({ page }) => {
  await page.goto(pageUrl);
  await page.evaluate(()=>{ quotaUsed=quotaMax; rows(); });
  const fresh=page.locator('#body tr').filter({hasText:'Pedro Martins'});
  await expect(fresh).not.toContainText('Convidar');
  await page.locator('#all').check();
  await expect(page.locator('#bulkInvite')).toBeDisabled();
});

test('Outreach follow-up only unlocks after cooldown', async ({ page }) => {
  await page.goto(pageUrl);
  const mariana=page.locator('#body tr').filter({hasText:'Mariana Silva'});
  await expect(mariana).toContainText('Aguardar até 07/10, 14:20');
  await expect(mariana).not.toContainText('Enviar follow-up');

  await page.evaluate(()=>{ demoNowMs=Date.parse('2026-10-08T09:00:00-03:00'); rows(); });
  const marianaAfter=page.locator('#body tr').filter({hasText:'Mariana Silva'});
  await expect(marianaAfter).toContainText('Enviar follow-up');
});

test('Outreach bulk actions report eligible and skipped creators', async ({ page }) => {
  await page.goto(pageUrl);
  await page.locator('#all').check();
  await expect(page.locator('#bulkPreview')).toContainText('pulados');
  const preview=await page.locator('#bulkPreview').innerText();
  expect(preview).toMatch(/Convite: \d+ elegíveis; \d+ pulados/);
});

test('Outreach margin reacts to proposed commission', async ({ page }) => {
  await page.goto(pageUrl);
  await page.locator('#body tr').filter({hasText:'Mariana Silva'}).locator('.detail').click();
  await expect(page.locator('#afterMargin')).toHaveText('18,1%');
  await page.locator('#proposalCommission').fill('18');
  await expect(page.locator('#afterMargin')).toHaveText('12,1%');
});

test('Outreach uses canonical navigation labels', async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator('.nav')).toContainText('OPPORTUNITIES');
  await expect(page.locator('.nav')).toContainText('INTELLIGENCE');
  await expect(page.locator('.nav')).toContainText('CREATORS');
  await expect(page.locator('.nav')).toContainText('CAMPAIGNS');
  await expect(page.locator('.nav')).toContainText('PERFORMANCE');
  await expect(page.locator('.nav')).toContainText('Unit Economics');
  await expect(page.locator('.nav')).not.toContainText('Medição');
});

test('Outreach visual regression', async ({ browser }) => {
  const viewport={width:1536,height:960};
  const live=await browser.newPage({viewport}), ref=await browser.newPage({viewport});
  await live.goto(pageUrl); await ref.goto(refUrl);
  await expect(live.locator('#body tr').first()).toBeVisible();
  await expect(ref.locator('#body tr').first()).toBeVisible();
  const a=PNG.sync.read(await live.screenshot({fullPage:true}));
  const b=PNG.sync.read(await ref.screenshot({fullPage:true}));
  expect(a.width).toBe(b.width); expect(a.height).toBe(b.height);
  const diff=new PNG({width:a.width,height:a.height});
  const mismatched=pixelmatch(a.data,b.data,diff.data,a.width,a.height,{threshold:.12,includeAA:false});
  expect(mismatched/(a.width*a.height)).toBeLessThanOrEqual(.002);
  await live.close(); await ref.close();
});
