import {test, expect} from "@playwright/test";

test('Selectors Demo', async({page}) => {
    await page.goto('https://www.collegeessayguy.com/');
    await page.pause();
    // using any project property
    await page.click("id=firstname");
    await page.locator(["id=firstname"]).fill("Aibiike")
})