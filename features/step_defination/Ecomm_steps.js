const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../../pageobjects/POManager');
const { chromium, expect } = require('playwright');

Given('a login to Ecommerce application with {string} and {string}', { timeout: 60000 }, async function (username, password) {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    this.browser = browser;
    this.context = context;
    this.page = page;
    this.poManager = new POManager(page);

    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});

When('Add {string} to the cart', { timeout: 60000 }, async function (productName) {

    // Store product name so other steps can use it
    this.productName = productName;

    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(this.productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the cart', { timeout: 60000 }, async function () {

    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(this.productName);
    await cartPage.Checkout();
});

When('Enter valid details and place the Order', { timeout: 60000 }, async function () {

    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");

    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify order in present in the order history', { timeout: 60000 }, async function () {

    await this.dashboardPage.navigateToOrders();

    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);

    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

    await this.browser.close();
});