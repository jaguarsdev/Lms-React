import axios from "axios"

import { HOST } from "../api/baseUrl"



const requestToPay = (price, email) => {
// console.log(`🚀 ~ email`, email)
// console.log(`🚀 ~ price`, price)

    let data = JSON.stringify({
        "merchant_id": "f6c78c4f-d729-408c-abb8-eebe682a6995",
        "amount": `${price}`,
        "description": "خرید از سیستم آموزشی",
        "callback_url": `${HOST}`,
        "email": `${email}`
    });
    
    let config = {
        method: 'post',
        url: 'https://api.zarinpal.com/pg/v4/payment/request.json',
        headers: { 
             'Content-Type': 'application/json'
        },
        data : data
    };


    return axios(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });

}



const PaymentControler = {
    requestToPay,

  };
  
  export default PaymentControler;