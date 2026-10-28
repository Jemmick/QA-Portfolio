# SauceDemo Playwright Automation Project

This project demonstrates automated end-to-end testing of key e-commerce workflows using Playwright and TypeScript.

## Project Scope

The automated tests cover:

- User login and product page verification
- Adding a specific product to the shopping cart
- Cart quantity validation
- Cart navigation verification
- Product verification inside the cart
- Successful checkout workflow
- Order confirmation validation

## Tools and Technologies

- Playwright
- TypeScript
- Visual Studio Code
- Git
- GitHub

## Browser Coverage

The test suite was executed across:

- Chromium
- Firefox
- WebKit

## Test Results

Three automated test scenarios were executed across three browser projects.

**Result: 9 passed**

## Key Learning

While developing the cart test, a locator initially matched multiple elements and caused a test failure in Chromium. The locator was refined to target the specific product, and an additional URL verification was added to confirm navigation to the cart page.

After debugging, the complete test suite passed successfully across Chromium, Firefox, and WebKit.

## Running the Tests

Run the following command from the project root:

'npx playwright test tests/saucedemo-ecommerce.spec.ts'