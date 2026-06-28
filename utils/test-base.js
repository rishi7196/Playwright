const base= require('@playwright/test');
exports.customTest=base.test.extend({

    testDataForOrder : {
    username : "rishi7196@gmail.com",
    password : "rishi12345",
    productName : "Zara Coat 3"

    }
});