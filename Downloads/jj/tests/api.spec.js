import{test,expect} from '@playwright/test';

test("api testing",async({request})=>{
const response =await request.post("https://restful-booker.herokuapp.com/auth",{


    data:{
        username:'admin',
        password:'password123'
    }
})
expect(response.status()).toBe(200);
const responseBody=await response.json();
console.log('response',responseBody);

 const token = response.token;

    console.log('Token:', token);
const bookingResponse=await request.post('https://restful-booker.herokuapp.com/booking',{

headers:{
'content-Type':'application/json'
},
data:{
    firstname:'kathrikir',
    lastname:'raman',
    totalprice:159,
    depositpaid:true,
    bookingDates:{
        checkin:'2006-08-20',
        checkout:'2026-08-21'
    },
    additional:'breakfast'
}

})

//expect(bookingResponse.status()).toBe(200);
const bookingData=await bookingResponse.json();
console.log('Booking Id',bookingData.bookingid);
expect(bookingData.bookingid).toBeTruthy();



});