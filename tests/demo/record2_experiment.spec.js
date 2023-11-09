import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('record demo 2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/search?q=github&oq=github+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEyMDM2ajBqMqgCALACAA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'GitHub: Let\'s build from here · GitHub GitHub https://github123.com' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});