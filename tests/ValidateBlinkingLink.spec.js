const {test, expect} = require('@playwright/test');

test("Blinking Link", async ({page}) =>
{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinkingLink =await page.locator("[href*='documents-request']");
    await expect(blinkingLink).toHaveAttribute("class", "blinkingText");


});