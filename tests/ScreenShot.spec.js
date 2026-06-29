const {test, expect} = require('@playwright/test');

test('browser context',async ({browser})=>
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
    await page.screenshot({path: 'screenshot.png'})
    await page.locator("[type='submit']").screenshot({path: 'screenshot1.png'})

    await page.locator("[type='submit']").click();

});
// test.only('Visual testing',async ({page})=>
// {
//     await page.goto("https://www.google.com/");
//     expect(await page.screenshot()).toMatchSnapshot('google.png');

// });