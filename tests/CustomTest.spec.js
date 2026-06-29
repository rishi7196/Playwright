//const {test, expect} = require('@playwright/test');
 const {customTest}=require('../utils/test-base')
 const {POManager} = require('../pageobjects/POManager');


 customTest('Client App login', async ({page,testDataForOrder})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
    //  const username = "rishi7196@gmail.com";
    //  const password = "rishi12345"
     const productName = 'ZARA COAT 3';
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(testDataForOrder.productName);
     await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.Checkout();
 });
