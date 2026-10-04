const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const pagePath = path.resolve(__dirname, '../prototype/sku-opportunity/index.html');
const pageUrl = pathToFileURL(pagePath).href;

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
  await page.locator('#close').click();
  await expect(page.locator('#drawer')).not.toHaveClass(/open/);

  await page.locator('.cost').first().click();
  await expect(page.locator('#costModal')).toBeVisible();
  await page.locator('#costInput').fill('15.50');
  await page.locator('#costSave').click();
  await expect(page.locator('#costModal')).toBeHidden();

  expect(pageErrors, 'Unhandled JavaScript errors').toEqual([]);
});

test('SKU Opportunity functional screenshot', async ({ page }) => {
  await page.setViewportSize({ width: 1536, height: 960 });
  await page.goto(pageUrl);
  await expect(page.locator('#body tr').first()).toBeVisible();
  await expect(page).toHaveScreenshot('sku-opportunity-functional.png', { fullPage: true });
});
