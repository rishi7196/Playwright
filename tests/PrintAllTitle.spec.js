const {test, expect} = require('@playwright/test');

test("GellAllText", async ({browser}) => 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();

    // get all titile 
    await page.waitForLoadState("networkidle");
    const PrintTitles= await page.locator(".oxd-text").allTextContents();
   console.log(PrintTitles);

   console.log(await page.locator(".oxd-text").first().textContent());
});
