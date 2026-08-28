import {test,epect} from '@playwright/test';

test('test window',async({page})=>{

page.goto('https://demoqa.com/browser-windows?utm_source=chatgpt.com');

const page1=await page.waitForEvent('popup');

await page.getByText('New Tab').click();

const newpage=await page1;

 await newpage.waitForLoadState();

 console.log(await newpage.title());



});