import axios from "axios"


const payData = {
    merchant_id     : "f6c78c4f-d729-408c-abb8-eebe682a6995",
    amount          : 1000,
    description     : "خرید تست",
    callback_url    : "http://www.yoursite.com/verify.php",
    metadata        : [ {email : "m.zakeri1998@gmail.com"},{mobile : "09198282615"}],
}

axios.post("https://api.zarinpal.com/pg/v4/payment/request.json", payData)