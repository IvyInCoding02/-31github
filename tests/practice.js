const {webkit, chromium, firefox} = require("playwright");

(async () => {
    for (const browserType of [webkit,firefox, chromium]){
        const browser = await browserType.launch();
        const page = await browser.newPage();
        await page.goto("")
    }
    

})