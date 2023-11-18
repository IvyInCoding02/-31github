// const { chromium } = require('playwright');


// (async () => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext({
//     ...iPhone
//   });
//   const page = await context.newPage();
//   await page.goto('https://www.wildberries.ru/catalog/189920751/detail.aspx?targetUrl=SP');

//   await browser.close();
// });

// const { webkit } = require('playwright');

// (async () => {
//   const browser = await webkit.launch({headless: false, slowMo: 50 });
//   const page = await browser.newPage();
//   await page.goto('https://playwright.dev/');
//   await page.screenshot({ path: `example.png` });
//   await browser.close();
// });

const { webkit,chromium, devices } = require('playwright');
const deviceType = devices['Desktop Chrome'];

(async () => {
   const browser = await chromium.launch({headless: false});
   const context = await browser.newContext({});
   console.log(deviceType);
   const page = await context.newPage();
   await page.goto('https://www.wildberries.ru/')
   await page.screenshot({
     path: `screenshots-${deviceType.name}.png`,
     fullPage: true,
   });
//  await browser.close();
})();