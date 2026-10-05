const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

const pagePath = path.resolve(__dirname, '../prototype/creator-shortlist/index.html');
const refPath = path.resolve(__dirname, '../prototype/creator-shortlist/reference-approved.html');
const pageUrl = pathToFileURL(pagePath).href;
const refUrl = pathToFileURL(refPath).href;

test('Creator Shortlist relationship-action contract', async ({ page }) => {
  const errors=[]; page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(pageUrl);
  await expect(page.locator('#body tr')).toHaveCount(10);

  const declined = page.locator('#body tr').filter({hasText:'Rafael Costa'});
  await expect(declined).toContainText('Aguardar');
  await expect(declined).not.toContainText('Convidar');

  const active = page.locator('#body tr').filter({hasText:'Camila Rocha'});
  await expect(active).toContainText('Ver campanha');
  await expect(active).not.toContainText('Convidar');

  const worked = page.locator('#body tr').filter({hasText:'Lucas Ferreira'});
  await expect(worked).toContainText('Convidar de novo');

  const newCreator = page.locator('#body tr').filter({hasText:'Letícia Santos'});
  await expect(newCreator).toContainText('Novo');
  await expect(newCreator).not.toContainText('histórico com o lojista');

  expect(errors).toEqual([]);
});

test('Creator Shortlist ordering and bulk eligibility', async ({ page }) => {
  await page.goto(pageUrl);

  // Default order: eligible creators first, blocked relationships at the end.
  const names = await page.locator('#body tr td:nth-child(3) b').allTextContents();
  expect(names.slice(-2)).toEqual(['Rafael Costa','Gustavo Almeida']);

  await page.locator('#all').check();
  await page.locator('#bulkInvite').click();
  await expect(page.locator('#toast')).toContainText('8 elegíveis; 0 pulados');

  // Active/declined are disabled in selection and therefore never enter bulk invite.
  await expect(page.locator('#body tr').filter({hasText:'Camila Rocha'}).locator('.pick')).toBeDisabled();
  await expect(page.locator('#body tr').filter({hasText:'Rafael Costa'}).locator('.pick')).toBeDisabled();
});

test('Creator Shortlist stock zero blocks invitations', async ({ page }) => {
  await page.goto(pageUrl);
  await page.evaluate(()=>{ stock=0; document.getElementById('stockKpi').textContent='0'; rows(); bulk(); });
  await expect(page.locator('#body [data-action="invite"]')).toHaveCount(0);
  await expect(page.locator('#bulkInvite')).toBeDisabled();
});

test('Creator Shortlist provenance, heuristic and LIVE are visible', async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator('#body')).toContainText('TikTok');
  await expect(page.locator('#heuristic')).toHaveAttribute('title',/Heurística v0.1/);
  await expect(page.locator('#body')).toContainText('LIVE');

  await page.locator('.creator').first().click();
  await expect(page.locator('#drawer')).toHaveClass(/open/);
  await expect(page.locator('#pane')).toContainText('Heurística v0.1 — não é previsão calibrada');

  await page.locator('[data-pane="content"]').click();
  await expect(page.locator('#pane')).toContainText('LIVE');
  await expect(page.locator('#pane')).toContainText('Vídeo');
});

test('Creator Shortlist visual regression', async ({ browser }) => {
  const viewport={width:1536,height:960};
  const live=await browser.newPage({viewport});
  const ref=await browser.newPage({viewport});
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
