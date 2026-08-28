import {test,expect} from '@playwright/test';

test('clear text',async({page})=>{


await page.goto('https://practice.expandtesting.com/dropdown?utm_source=chatgpt.com');

await page.locator('#country').selectOption('India');
await page.getByLabel('Elements per Page:').selectOption('20');
await page.locator('#dropdown').selectOption('Option 2');
await page.pause();

    });



