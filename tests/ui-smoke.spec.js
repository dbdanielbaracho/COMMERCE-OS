const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

const pagePath = path.resolve(__dirname, '../prototype/sku-opportunity/index.html');
const referencePath = path.resolve(__dirname, '../prototype/sku-opportunity/reference-approved.html');
const pageUrl = pathToFileURL(pagePath).href;
const referenceUrl = pathToFileURL(referencePath).href;

test('SKU Opportunity renders and critical controls work', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(String(error)));

  await page.goto(pageUrl);
  await expect(page.locator('#body tr')).toHaveCount(8);
  await expect(page.locator('#body tr').first()).toBeVisible();

  await page.locator('#search').fill('Sérum');
  await expect(page.locator('#body tr')).toHaveCount(1);
  await page.locator('#search').fill('');

  await page.locator('[data-sort="price"]').click();
  await expect(page.locator('#body tr').first()).toContainText('Kit Skincare 3 em 1');

  await page.locator('.detail').first().click();
  await expect(page.locator('#drawer')).toHaveClass(/open/);
  await expect(page.locator('#p-overview')).toContainText('GMV total da loja');
  await expect(page.locator('#p-overview img')).toHaveCount(1);
  await page.locator('#close').click();
  await expect(page.locator('#drawer')).not.toHaveClass(/open/);

  await page.locator('.cost').first().click();
  await expect(page.locator('#costModal')).toBeVisible();
  await page.locator('#costInput').fill('15.50');
  await page.locator('#costSave').click();
  await expect(page.locator('#costModal')).toBeHidden();

  expect(pageErrors, 'Unhandled JavaScript errors').toEqual([]);
});

test('SKU Opportunity contract rules from 13.1.1 are protected', async ({ page }) => {
  await page.goto(pageUrl);

  // Zero stock must not propose creator activation.
  await page.locator('#stock').selectOption('zero');
  await expect(page.locator('#body tr')).toHaveCount(2);
  await expect(page.locator('#body .stockAct')).toHaveCount(2);
  await expect(page.locator('#body .creatorAct')).toHaveCount(0);

  // Bulk creator action must explicitly exclude zero-stock SKUs.
  await page.locator('#stock').selectOption('all');
  await page.locator('#all').check();
  await page.locator('#massCreators').click();
  await expect(page.locator('#toast')).toContainText('6 elegíveis; 2 excluídos por estoque zerado');

  // "O que fazer hoje" must open the real underlying recut.
  const cases = [
    ['high', 2],
    ['zeroactive', 1],
    ['nocost', 2],
    ['highcomm', 2]
  ];
  for (const [q, expected] of cases) {
    await page.locator(`[data-q="${q}"]`).click();
    await expect(page.locator('#body tr')).toHaveCount(expected);
  }
});

test('SKU Opportunity layout gate at 1536px', async ({ page }, testInfo) => {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(String(error)));

  await page.setViewportSize({ width: 1536, height: 960 });
  await page.goto(pageUrl);
  await expect(page.locator('#body tr').first()).toBeVisible();

  const overflow = await page.evaluate(() => {
    const box = document.querySelector('.tablebox');
    return {
      pageScrollWidth: document.documentElement.scrollWidth,
      pageClientWidth: document.documentElement.clientWidth,
      tableScrollWidth: box.scrollWidth,
      tableClientWidth: box.clientWidth
    };
  });
  expect(overflow.pageScrollWidth, 'Page must not overflow horizontally at 1536px').toBeLessThanOrEqual(overflow.pageClientWidth);
  expect(overflow.tableScrollWidth, 'SKU table must fit without hidden/cut right-side actions at 1536px').toBeLessThanOrEqual(overflow.tableClientWidth);

  const screenshotPath = testInfo.outputPath('sku-opportunity-functional.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await testInfo.attach('functional-render', { path: screenshotPath, contentType: 'image/png' });

  expect(pageErrors, 'Unhandled JavaScript errors').toEqual([]);
});

test('SKU Opportunity visual regression compares to frozen approved reference', async ({ browser }) => {
  const viewport = { width: 1536, height: 960 };
  const livePage = await browser.newPage({ viewport });
  const refPage = await browser.newPage({ viewport });

  await livePage.goto(pageUrl);
  await refPage.goto(referenceUrl);
  await expect(livePage.locator('#body tr').first()).toBeVisible();
  await expect(refPage.locator('#body tr').first()).toBeVisible();

  const liveBuffer = await livePage.screenshot({ fullPage: true });
  const refBuffer = await refPage.screenshot({ fullPage: true });
  const live = PNG.sync.read(liveBuffer);
  const ref = PNG.sync.read(refBuffer);

  expect(live.width).toBe(ref.width);
  expect(live.height).toBe(ref.height);

  const diff = new PNG({ width: live.width, height: live.height });
  const mismatched = pixelmatch(live.data, ref.data, diff.data, live.width, live.height, {
    threshold: 0.12,
    includeAA: false
  });
  const ratio = mismatched / (live.width * live.height);
  expect(ratio, 'Visual regression against frozen approved reference').toBeLessThanOrEqual(0.002);

  await livePage.close();
  await refPage.close();
});
