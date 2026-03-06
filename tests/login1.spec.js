const {test, expect} = require('@playwright/test');

test.only('browser context',async ({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //get  title
    console.log(await page.title());
    // validate title
    expect(await page .title()).toBe("OrangeHRM")

    // ENTER TEXT IN TEXT FIELD
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");  
    await page.locator("[type='submit']").click();    //

    const admin=await page.locator('a.oxd-main-menu-item[href*="admin"]').first().textContent();
    console.log(admin);

});
test('Invalid login',async ({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //get  title
    console.log(await page.title());
    // validate title
    expect(await page .title()).toBe("OrangeHRM")

    // ENTER TEXT IN TEXT FIELD
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admi");  
    await page.locator("[type='submit']").click();

    // extract text from element
    const errorMessage=await page.locator('a.oxd-main-menu-item[href*="admin"]').textContent();
    console.log(errorMessage);

});