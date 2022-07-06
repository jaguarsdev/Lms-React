import axios from "axios"

import { PAYMENT, PAYMENT_BACK, PAYMENTV } from "../api/baseUrl"
import {authBar} from '../authentication/auth-header'


const requestToPay = (username, price, email, stId, productId) => {

    let data = '';

    const Pyment_Back = PAYMENT_BACK + `?orderID=${username}&productId=${productId}&CustomerID=${stId}&Zamount=${price}`
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
        console.log("1")
        //Save Data Of Order In DataBase
        
        let objects = [];
        let arrayLength = productId.length;
        for (var i = 0; i < arrayLength; i++) {
            objects[i] = {"id": productId[i]};
        }
        var data = JSON.stringify({
        "data": {
            "UniqueID": `${username+Math.random()}`,
            "productBuyed": objects,
            "customerName": `${username}`,
            "CustomerID": `${stId}`,
            "users_permissions_user": {
                "id": stId
            },
            "Zauthority": `${response.data.data.authority}`,
            "ZAuthMessage": `${response.data.data.message}`,
            "Zamount": `${price}`
        }
        });
        var config = {
        method: 'post',
        url: 'https://back.lmsava.ir/api/orders',
        headers: { 
            'Authorization': `Bearer ${authBar()}`, 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(response.data.data.id);
        // window.location.href = `https://www.zarinpal.com/pg/StartPay/${response.data.data.authority}`;
        console.log("2")
        })
        .catch(function (error) {
        console.log(error);
        });


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