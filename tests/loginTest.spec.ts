import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');


  await expect(page).toHaveURL(/inventory/);

});

test('Add To Cart Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});

test('Invalid Login Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'wrong_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
  

});