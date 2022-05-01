import axios from "axios"

import { PAYMENT, PAYMENT_BACK, PAYMENTV } from "../api/baseUrl"



const requestToPay = (price, email, stId, productId) => {

    let data = '';

    const Pyment_Back = PAYMENT_BACK + `?productId=${productId}&stId=${stId}&amount=${price}`
    console.log(`🚀 ~ Pyment_Back`, Pyment_Back)

    let config = {
        method: 'post',
        url: `${PAYMENT}?amount=${price}0&email=${email}&callback_url=${encodeURIComponent(Pyment_Back)}`,
        headers: { },
        data : data
        };    
    // console.log(`🚀 ~ config`, config)
    return axios(config)
    .then((response) => {
        localStorage.setItem("payKey", JSON.stringify(response.data.data));
    })
    .catch((error) => {
        console.log(error);
    });

}




const requestToVerifyPay = (amount, Authority) => {

    let data = '';

    // const Pyment_Back = PAYMENT_BACK + `?productId=${productId}&stId=${stId}`
    // console.log(`🚀 ~ Pyment_Back`, Pyment_Back)

    let config = {
        method: 'post',
        url: `${PAYMENTV}?amount=${amount}0&authority=${Authority}`,
        headers: { },
        data : data
        };    
    // console.log(`🚀 ~ config`, config)
    return axios(config)
    .then((response) => {
        localStorage.setItem("verf", JSON.stringify(response.data.data));
    })
    .catch((error) => {
        console.log(error);
    });


};




const PaymentControler = {
    requestToPay,
    requestToVerifyPay

  };
  
  export default PaymentControler;