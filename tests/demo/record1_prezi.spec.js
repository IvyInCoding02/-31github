import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=college+guy&oq=college+guy&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM2MDBqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
});