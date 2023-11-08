import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('record demo 2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/search?q=youtube&oq=youtube&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI0ODVqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.goto('https://www.youtube.com/?hl=RU');
  await page.goto('https://www.youtube.com/');
  await page.locator('ytd-thumbnail').filter({ hasText: '11:54:57 Текущее видео' }).locator('#thumbnail').click();
  await page.getByLabel('Оформить подписку на канал "Guitar Instrumental"').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});