import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { inventoryLocators } from '../locators/inventoryLocators';

test('Validate checkout', async ({page})=>{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    const productTitleOne = "Sauce Labs Backpack"
    const productTitleTwo = "Sauce Labs Bike Light"

    // Visiting the page
    await loginPage.goto();

    // Performing Login
    await loginPage.login("standard_user", "secret_sauce");

    // Adding Product One to the cart
    await inventoryPage.getProduct(productTitleOne);
    await inventoryPage.addProductToCart(productTitleOne);

    // Adding Product Two to the cart
    await inventoryPage.getProduct(productTitleTwo);
    await inventoryPage.addProductToCart(productTitleTwo);
    
    // Validating both products were added in the cart
    await page.locator(inventoryLocators.shoppingCart).click();
    await expect(page.locator(inventoryLocators.cartItem)).toContainText([productTitleOne,productTitleTwo]);
    await expect(page.locator(inventoryLocators.cartItem)).toHaveCount(2);

    // Checkout 
    await inventoryPage.clickCheckout();
    await inventoryPage.fillPersonalInfo();
    await inventoryPage.continueCheckout();

    // Validating Success
    await page.locator(inventoryLocators.finishButton).click();
    await expect(page.locator(inventoryLocators.headerField)).toContainText('Thank you for your order!');
})

