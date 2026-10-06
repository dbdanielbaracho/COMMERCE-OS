const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const pageUrl = pathToFileURL(path.resolve(__dirname,'../prototype/unit-economics/index.html')).href;

test('Unit Economics opens without JavaScript errors and renders waterfall', async ({ page }) => {
  const errors=[];
  page.on('pageerror', e=>errors.push(String(e)));
  await page.goto(pageUrl);
  await expect(page.locator('#waterfallBody tr')).toHaveCount(9);
  await expect(page.locator('#waterfallBody')).toContainText('Receita atribuída');
  await expect(page.locator('#waterfallBody')).toContainText('Margem contribuição');
  await expect(page.locator('#trendCanvas')).toBeVisible();
  expect(errors).toEqual([]);
});

test('Unit Economics critical controls remain interactive', async ({ page }) => {
  const errors=[];
  page.on('pageerror', e=>errors.push(String(e)));
  await page.goto(pageUrl);
  await page.locator('#reviewBtn').click();
  await expect(page.locator('#costModal')).toHaveClass(/show/);
  await page.locator('#cancelCost').click();
  await expect(page.locator('#costModal')).not.toHaveClass(/show/);
  await page.locator('#coverageBtn').click();
  await expect(page.locator('#sidepanel')).toHaveClass(/open/);
  await page.locator('#closePanel').click();
  await expect(page.locator('#sidepanel')).not.toHaveClass(/open/);
  expect(errors).toEqual([]);
});
