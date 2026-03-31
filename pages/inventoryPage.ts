import { Page } from '@playwright/test';
import { inventoryLocators } from '../locators/inventoryLocators';
import { testData } from '../fixtures/testData';

export class InventoryPage {
  constructor(private page: Page) {
  }

    async getProduct(productTitle: string) {
        return this.page.locator(inventoryLocators.inventoryItem).filter({
            hasText: productTitle
        });
    }

    async addProductToCart(productTitle: string) {
        const product = await   this.getProduct(productTitle)
        await product.getByRole('button', { name: 'Add to cart' }).click();
    }

    async clickCheckout() {
        await this.page.locator(inventoryLocators.checkoutButton).click();
    }

    async fillPersonalInfo() {
        await this.page.locator(inventoryLocators.firstName).fill(testData.checkout.firstName);
        await this.page.locator(inventoryLocators.lastName).fill(testData.checkout.lastName);
        await this.page.locator(inventoryLocators.postalCode).fill(testData.checkout.postalCode);
    }

    async continueCheckout() {
        await this.page.locator(inventoryLocators.continueButton).click();
    }
}