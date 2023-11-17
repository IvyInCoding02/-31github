const { webkit, devices } = require('playwright');
const iPhone = devices['iPhone 6'];

(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext({
    ...iPhone
  });
  const page = await context.newPage();
  await page.goto('https://www.wildberries.ru/catalog/189920751/detail.aspx?targetUrl=SP');
  // other actions...
  await browser.close();
});