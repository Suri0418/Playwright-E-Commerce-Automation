import { test, expect } from '@playwright/test';

test('Open Website', async ({ page }) => {

await page.goto('https://automationexercise.com')

await expect(page.locator('body')).toBeVisible()

});



test('Open Login Page', async ({ page }) => {

await page.goto('https://automationexercise.com')

await page.click('text=Signup / Login')

await expect(page.locator('text=New User Signup')).toBeVisible()

});


test('User Registration', async ({ page }) => {

await page.goto('https://automationexercise.com')
  
await page.waitForLoadState('domcontentloaded')

await page.click('text=Signup / Login')

await page.fill('[data-qa="signup-name"]','TestUser')

await page.fill('[data-qa="signup-email"]','test'+Date.now()+'@mail.com')

await page.click('[data-qa="signup-button"]')

await expect(page.locator('text=Enter Account Information')).toBeVisible()

});


test('Search Product', async ({ page }) => {

await page.goto('https://automationexercise.com')

await page.click('text=Products')

await page.fill('#search_product','shirt')

await page.click('#submit_search')

await expect(page.locator('text=Searched Products')).toBeVisible()

});


test('Add Product To Cart', async ({ page }) => {

await page.goto('https://automationexercise.com')

await page.click('text=Products')

await page.locator('.product-image-wrapper').first().scrollIntoViewIfNeeded()

await page.click('text=Add to cart')

await page.waitForTimeout(2000)

});


test('Login User', async ({ page }) => {

await page.goto('https://automationexercise.com')

await page.click('text=Signup / Login')

await page.fill('[data-qa="login-email"]','demo@demo.com')

await page.fill('[data-qa="login-password"]','demo123')

await page.click('[data-qa="login-button"]')

await page.waitForTimeout(2000)

});


test('Logout User', async ({ page }) => {

await page.goto('https://automationexercise.com')


await page.waitForTimeout(2000)

});

