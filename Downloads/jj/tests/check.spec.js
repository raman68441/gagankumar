import {test,expect} from '@playwright/test';

test('check',async({page})=>{

    await page.goto('https://practice.expandtesting.com/checkboxes?utm_source=chatgpt.com');

    //await page.locator('#checkboxes'). click();
    await page.getByLabel('Checkbox 1').check();
await page.getByLabel('Checkbox 2').uncheck();



});