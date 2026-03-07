// ///import { test, expect } from
//   //await page.fill('#username', 'tomsmith');
//   //await page.fill('#password', 'SuperSecretPassword!');

//   //await page.click('button[type="submit"]');

// //});
//  '@playwright/test';

// ///test('Login Test', async ({ page }) => {

//   //await page.goto('https://the-internet.herokuapp.com/login');


// import
// {
//    test,expect

// }

// from '@playwright/test';

// test('Open Google',async({page})=>
// {
//     await page.goto('https://www.google.com');
// });



import 
{
    test,expect

}

from '@playwright/test';
import { defineConfig } from '@playwright/test';

export default defineConfig({
    use:
    {
        headless: false;
    }
});

test('Amazon Search test', async({  page }) =>
{
    await page.goto('https://www.amazon.in');
    await page.fill('#twotabsearchtextbox','laptop');
    await page.press('#twotabsearchtextbox','Enter');

    await expect(page).toHaveURL(/s/);
});
    