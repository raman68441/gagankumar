const {
    Given,g
    When,
    Then,
    Before,
    After
} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

Before(async function () {
    await this.openBrowser();
    this.loginPage = new LoginPage(this.page);
});

After(async function () {
    await this.closeBrowser();
});

Given('I am on the e-commerce login page', async function () {

    await this.page.goto(
        'https://www.saucedemo.com/'
    );

});

When('I enter valid username {string}', async function (username) {

    await this.loginPage.enterUsername(username);

});

When('I enter valid password {string}', async function (password) {

    await this.loginPage.enterPassword(password);

});

When('I enter invalid password {string}', async function (password) {

    await this.loginPage.enterPassword(password);

});

When('I click on the Login button', async function () {

    await this.loginPage.clickLogin();

});

Then('I should be successfully logged into the application', async function () {

    await expect(
        this.loginPage.productsTitle
    ).toBeVisible();

});

Then('I should see an invalid login error message', async function () {

    await expect(
        this.loginPage.errorMessage
    ).toBeVisible();

});