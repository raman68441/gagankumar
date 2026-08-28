import{test,expert} from '@playwright/test';


test("locator",async({page})=>{
await page.goto("https://www.salesforce.com/products/free-trial/developer/");

await page.getByRole('textbox',{name:'First name'}).fill('kdike');
await page.getByLabel('Last name').fill('veeranjaneyulu');
//  await page.getByLabel('Last name').fill('Veeranjaneyulu');

//await page.getByPlaceholder('Job title').fill('thumbalabedu');
//await page.locator('[name="country"]').click();
//await page.getyByRole('combobx',{name:'country'}).click();
//await page.pause();
await page.getByLabel('Country').selectOption({ label: 'Brazil' });
//const checkbox = page.getByRole('checkbox', { name: 'I agree' });
const check=await page.locator('[class="checkbox--faux"]');
check.first().click();
await page.waitForTimeout(1000);
check.last().click();
//checkbox.first().check();
await page.pause();
});