// import axios from "axios"

// import {BASE} from "../api/baseUrl"



// const requestToPay = () => {


//     let data = JSON.stringify({
//         "merchant_id": "f6c78c4f-d729-408c-abb8-eebe682a6995",
//         "amount": "10000",
//         "description": "خرید تست",
//         "callback_url": "https://www.lmsava.ir",
//         "email": "m.zakeri1998@gmail.com",
//         "mobile": "09198282615"
//     });
    
//     let config = {
//         method: 'post',
//         url: 'https://api.zarinpal.com/pg/v4/payment/request.json',
//         headers: { 
//              'Content-Type': 'application/json'
//         },
//         data : data
//     };


//     axios(config)
//     .then((response) => {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// }



// const paymentControler = {
//     requestToPay,

//   };
  
//   export default paymentControler;