# 🐞 Bug Report

## BUG 1: 
- **Title**: User is blocked from continuing checkout
- **Description**: The characters entered on Last name field does not persist in the Last name field.
- **Steps to reproduce**: 
    1. Visit the page https://www.saucedemo.com/
    2. Logs in with credentials:
        - username: problem_user
        - password: secret sauce
    3. Select an item and click "Add to cart"
    4. Click the Shopping cart icon in the top-right corner
    5. Click the "Checkout" button
    6. Enter a value in the First Name field
    7. Enter a value in the Last Name field

- **Actual result**: The text entered in the Last Name field does not persist.
- **Expected result**: The text entered in the Last Name field should persist.

**Severity**: High


## BUG 2: 
- **Title**: Incorrect inventory item displayed after selection
- **Description**: The item displayed on the inventory item page does not match the item selected from the inventory page.
- **Steps to reproduce**: 
    1. Visit the page https://www.saucedemo.com/
    2. Logs in with credentials:
        - username: problem_user
        - password: secret sauce
    3. Select an item by clicking on its product title

- **Actual result**: The displayed item does not correspond to the selected item.
- **Expected result**: The displayed item should match the item selected from the inventory page.

**Severity: High**

## BUG 3: 
- **Title**: Sort functionality is not working
- **Description**: The sorting options do not reorder the products on the inventory page.
- **Steps to reproduce**: 
    1. Visit the page https://www.saucedemo.com/
    2. Logs in with credentials:
        - username: problem_user
        - password: secret sauce
    3. Click on the sort dropdown
    4. Select any sorting option


- **Actual result**: The inventory items remain in the same order regardless of the selected sorting option.
- **Expected result**: The items should be sorted according to the selected option.

**Severity: High**

## BUG 4: 
- **Title**: Product images are identical for all inventory items
- **Description**: All product images displayed on the inventory page appear identical, instead of showing their respective unique images.
- **Steps to reproduce**: 
    1. Visit the page https://www.saucedemo.com/
    2. Logs in with credentials:
        - username: problem_user
        - password: secret sauce
    3. Observe the product images on the inventory page

- **Actual Result**: All inventory items display the same image.
- **Expected Result**: Each inventory item should display its corresponding unique image.

**Severity: Medium**


# QA Automation Project – UI & API Tests

This project contains automated tests for both UI and API using Playwright and TypeScript.

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js

## 📋 Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- npm (comes with Node)

## ⚙️ Installation

Clone the repository and install dependencies

```bash
npm install
```
```bash
npx playwright install
```

## 🔹 Run all tests
```bash
npx playwright test
```

## 🔹 Run UI tests only
```bash
npx playwright test tests/testUICheckout.spec.ts
```

## 🔹 Run API tests only
```bash
npx playwright test tests/testAPIBooking.spec.ts
```


## 🖥️ Execution Modes

1. Headless(Default): 
```bash
    npx playwright test
```
2. Interactive UI mode: 
```bash
    npx playwright test --ui
```
3. Debug Mode:
```bash
    npx playwright test --debug
```


## 📊 Reports
```bash
npx playwright show-report
```

![alt text](image.png)


## 🧱 Framework Architecture

This project follows a clean and scalable structure:
- UI Tests: Implement the Page Object Model (POM), where pages are represented by classes, locators are centralized, and actions are encapsulated in methods.
- API Tests: Designed to be independent, using helper functions to handle authentication and booking creation.

As a result, this framework follows best practices and design patterns, providing benefits such as reusability, maintainability, readability, a clean structure, and adherence to the DRY (Don't Repeat Yourself) principle.

## 👩‍💻 Author
Maria Eleonora Pereira