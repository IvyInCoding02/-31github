const {webkit, chromium, firefox} = require("playwright");

(async () => {
    for (const browserType of [webkit,firefox, chromium]){
        const browser = await browserType.launch();  //used to lauch each browser 
        const page = await browser.newPage();        //used to open the page
        await page.goto("https://www.wildberries.ru/")      // of the current page
        await page.screenshot({
            path: `screenshot${browserType.name()}.png`,  //save the screenshot 
        })
        await browser.close(); //close the screenshot 

        console.log("success" + browserType.name())  //control the progress
    }
})