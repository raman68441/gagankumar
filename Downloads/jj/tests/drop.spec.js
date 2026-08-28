import{test,expect} from '@playwright/test';

test('drop',async({page})=>{
page.goto('https://qaplayground.com/practice/dropdowns?utm_source=chatgpt.com');
const expectedValues = ['Python', 'Java', 'JavaScript', 'TypeScript'];
//await page.locator('#countrySelect').selectOption('India');
await page.getByLabel('Select Country').selectOption('India');
await page.getByLabel('Select Language').selectOption('Python');
await page.getByRole('button',{name:'Select Last'}).click();
const test=await page.locator('#result-s03');
const alltext=await test.allTextContents();
for(const value of alltext){
    if (expectedValues.includes(value.trim())) {
        console.log(`${value} is available`);
    } else {
        console.log(`${value} is NOT expected`);
    }

}


console.log(await test.textContent());

await page.locator('#citySearch').fill("Pune");

//await page.getByRole('option'{name:'Pune'}).click();
await page.getByRole('option', { name: 'Pune' }).click();

await page.pause();


});
