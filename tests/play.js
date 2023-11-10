const { webkit,chromium, devices } = require('playwright');
const deviceType = devices['iPhone 8'];

(async () => {
   const browser = await chromium.launch({headless: false});
   const context = await browser.newContext({
       viewport: deviceType.viewport,
       userAgent: deviceType.userAgent
   });
   console.log(deviceType);
   const page = await context.newPage();
   await page.goto('https://habr.com')
   await page.screenshot({ path: `example-${deviceType.name}.png`});
//    await browser.close();
})();