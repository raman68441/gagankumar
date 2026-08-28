import {test,expect} from '@playwright/test';


test('practice formfillin',async({page})=>{

    page.goto("https://demoqa.com/automation-practice-form");

    await page.locator('#firstName').fill("kahrikir");
    await page.locator('#lastName').fill("ramanaj");
    await page.locator('#userEmail').fill("ram@gmail.com");
    await page.locator('[value="Male"]').click();
    await page.locator('#dateOfBirthInput').click();
     await page.locator('.react-datepicker__month-select').selectOption({label:'June'});

     await page.locator('.react-datepicker__year-select').selectOption('1990');
     await page.waitForTimeout(1000);
     //await page.locator('[class="react-datepicker__day react-datepicker__day--004 react-datepicker__day--keyboard-selected"]').click();
    await page.locator(
  '.react-datepicker__day--004:not(.react-datepicker__day--outside-month)'
).click();
     await page.pause();
})