const {test, expect} = require('@playwright/test');

test('browser context',async ({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage(); 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login/");
    await page.locator("#userEmail").fill("rishi7196@gmail.com");
    await page.locator("#userPassword").fill("Rishi12345");
    await page.locator("#login").click();
    
    await page.waitForLoadState('networkidle');
   const title= await page .locator(".card-body b").allTextContents();
   console.log(title);
    // get the produtc of list
    const products =await page.locator(".card-body");
    const count= await products.count();
    for(let i=0;i<count;i++)
    {
        if(await products.nth(i).locator("b").textContent()==="ZARA COAT 3")
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
            
        }
    
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();  
    await page.pause();


});