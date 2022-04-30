import axios from "axios"

import { PAYMENT } from "../api/baseUrl"



// url: `${PAYMENT}?amount=${price}&email=${email}&callback_url=lmsava.ir`,
const requestToPay = (price, email) => {

let data = '';

let config = {
     method: 'post',
     url: `https://test2.lmsava.ir/request.php?amount=${price}&email=${email}&callback_url=lmsava.ir`,
     headers: { },
     data : data
    };    
return axios(config)
.then((response) => {
     const requestRes = response.data;
})
.catch((error) => {
     console.log(error);
});

}




const PaymentControler = {
    requestToPay,

  };
  
  export default PaymentControler;