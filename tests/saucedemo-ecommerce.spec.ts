import { test, expect } from '@playwright/test';

test('user can log in and view products', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Products')).toBeVisible();
});

test('user can add a product to the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('.shopping_cart_link').click();

  await expect(page).toHaveURL(/cart\.html/);

  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();
});

test('user can complete checkout successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('.shopping_cart_link').click();

  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('First Name').fill('Jackie');
  await page.getByPlaceholder('Last Name').fill('Test');
  await page.getByPlaceholder('Zip/Postal Code').fill('78642');

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByText('Checkout: Overview')).toBeVisible();

  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(
    page.getByText('Thank you for your order!')
  ).toBeVisible();
});