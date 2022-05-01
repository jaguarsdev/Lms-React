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
        url: 'https://test1.lmsava.ir/wp-json/wc/v3/orders?consumer_key=ck_2764a950d4ffa6f6900958205f3a36f17603e090&consumer_secret=cs_cc3c45c80161941ee0215f5e59715f768e1a8f82',
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

