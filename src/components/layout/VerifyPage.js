import PaymentControler from '../../module/payment/requsetPay'

// http://localhost:3000/pay/?productId=229&stId=7&Authority=A00000000000000000000000000337925605&Status=OK
const VerifyPage = () => {
    // Get Url Params
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const productId = urlParams.get('productId')
    console.log(productId);

    const stId = urlParams.get('stId')
    console.log(stId);

    const Authority = urlParams.get('Authority')
    console.log(Authority);



    const handleVerify = async () => {

        try {
          await PaymentControler.requestToVerifyPay().then(
            () => {
                //   window.location.reload();
                console.log("hi")
        },
            (error) => {
              console.log(error);
            }
            );
          } catch (err) {
            console.log(err);
        }
      };




    
    return (
        handleVerify()
    );
};

export default VerifyPage;