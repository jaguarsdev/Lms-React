import axios from "axios"

import { PAYMENT, PAYMENT_BACK, PAYMENTV } from "../api/baseUrl"
import {authBar} from '../authentication/auth-header'


const requestToPay = (username, price, email, stId, productId) => {




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
                // "Zauthority": `${response.data.data.authority}`,
                // "ZAuthMessage": `${response.data.data.message}`,
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
                console.log(response.data.data);
                const ORDER_ID = response.data.data.id

                // Request TO Pay
                let data = '';
                const Pyment_Back = PAYMENT_BACK + `?orderID=${ORDER_ID}&amount=${price}0&barr=${authBar()}`
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
                    // console.log(response.data.data.authority)

                        const Zar_Auth = response.data.data.authority
                    
                        // UPDATE ORDER & ADD ZARINPAL AUTH
                        var data = JSON.stringify({
                        "data": {
                            "Zauthority": `${Zar_Auth}`,
                            "ZAuthMessage": `${Zar_Auth}`
                        }
                        });

                        var config = {
                        method: 'put',
                        url: `https://back.lmsava.ir/api/orders/${ORDER_ID}`,
                        headers: { 
                            'Authorization': `Bearer ${authBar()}`, 
                            'Content-Type': 'application/json'
                        },
                        data : data
                        };

                        axios(config)
                        .then(function (response) {
                        console.log(JSON.stringify(response.data));
                            
                            // SEND FOR ZARINPAL PAYMENT
                            window.location.href = `https://www.zarinpal.com/pg/StartPay/${Zar_Auth}`;
                        })
                        .catch(function (error) {
                        console.log(error);
                        });




                })
                .catch((error) => {
                    console.log(error);
                });



            })
            .catch(function (error) {
                console.log(error);
            });
            

            
    
    
    
    // localStorage.setItem("payKey", JSON.stringify(response.data.data));
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