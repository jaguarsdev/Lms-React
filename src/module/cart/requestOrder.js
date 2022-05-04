import axios from "axios"

const addOrder = (productId, stId, amount) => {

    let data = JSON.stringify({
        "payment_method": "bacs",
        "payment_method_title": "Direct Bank Transfer",
        "set_paid": true,
        "customer_id": stId,
        "line_items": [
            {
                "product_id": productId,
                "quantity": 1
            }
        ],
        "shipping_lines": [
            {
                "method_id": "flat_rate",
                "method_title": "Flat Rate",
                "total": `${amount}`
            }
        ]
    });
    // console.log(`🚀 ~ data`, JSON.parse(data))

    let config = {
        method: 'post',
        url: 'https://test1.lmsava.ir/wp-json/wc/v3/orders?consumer_key=ck_e54a3114686630bf72d7e35e5ce40c67b47a986e&consumer_secret=cs_52d4b51d7d52fdd468df48694c90b286e3805b08',
        data: { 
            '': '', 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

};


const requestOrder = {
    addOrder,

  };
  
  export default requestOrder;

