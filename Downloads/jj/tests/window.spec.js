import{test,expect} from '@playwright/test';

test('window hadling',async({page,context})=>{

    page.goto('https://the-internet.herokuapp.com/windows?utm_source=chatgpt.com');

  const page1=   page.waitForEvent('popup');
    
  await page.getByText('Click Here').click();

 const newpage= await page1;

 await newpage.waitForLoadState();
console.log(await newpage.title()); 
 // text=await newpage.locato
 await page.pause();


})