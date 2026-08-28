class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');

        this.errorMessage = page.locator('[data-test="error"]');
        this.productsTitle = page.locator('.title');
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

    async isLoginSuccessful() {
        return await this.productsTitle.isVisible();
    }
}

module.exports = LoginPage;