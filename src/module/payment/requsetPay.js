import axios from "axios"

import { PAYMENT } from "../api/baseUrl"



// url: `${PAYMENT}?amount=${price}&email=${email}&callback_url=lmsava.ir`,
const requestToPay = (price, email) => {

let data = '';

let config = {
     method: 'post',
     url: `${PAYMENT}?amount=${price}&email=${email}`,
     headers: { },
     data : data
    };    
return axios(config)
.then((response) => {
     localStorage.setItem("payKey", JSON.stringify(response.data.data));
})
.catch((error) => {
     console.log(error);
});

}




const PaymentControler = {
    requestToPay,

  };
  
  export default PaymentControler;