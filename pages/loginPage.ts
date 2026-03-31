import { Page } from "playwright/test";
import { loginLocators } from '../locators/loginLocators';
import { testData } from '../fixtures/testData';

export class LoginPage {
    constructor(private page:Page) {}

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.page.locator(loginLocators.username).fill(testData.user.username);
        await this.page.locator(loginLocators.password).fill(testData.user.password);
        await this.page.getByRole('button', {name: "Login"}).click();
    }
}