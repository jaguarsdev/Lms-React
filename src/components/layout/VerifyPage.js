import {useEffect, useState} from 'react'
import PaymentControler from '../../module/payment/requsetPay'
import requestOrder from '../../module/cart/requestOrder'
import { Link } from 'react-router-dom';

// http://localhost:3000/pay/?productId=229&stId=7&Authority=A00000000000000000000000000337925605&Status=OK

  // Get Url Params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const productId = urlParams.get('productId')
  const stId = urlParams.get('stId')
  const Authority = urlParams.get('Authority')
  const amount = urlParams.get('amount')


  


const VerifyPage = () => {


    const [Data, setData] = useState({D: "", E: false});

    useEffect(() => {

      handleVerify(amount, Authority)
  

    }, []);



    const handleVerify = async (amount, Authority) => {

        try {
          await PaymentControler.requestToVerifyPay(amount, Authority).then(
            () => {
              
        },
            (error) => {
              console.log(error);
            }
            );
          } catch (err) {
            console.log(err);
        }
        const checkVerfy = () => {
          if(verify.code === 100){
             orderControl(productId, stId, amount)
          }else if(verify.code === 101){
            console.log("موفق بوده")
          }else{
            console.log("با پشتیبان تماس بگیرید")
          }
        
        }
        const verify = JSON.parse(localStorage.getItem("verf"))
        await checkVerfy()
        
        
        
      };
      


   
      const orderControl =async (productId, stId, amount) => {

        try {
          await requestOrder.addOrder(productId, stId, amount).then(
            () => {
              console.log("gfzasdgfdsghfdhgzfdg")
            },
            (error) => {
              console.log(error);
            }
            );
          } catch (err) {
            console.log(err);
        }
  
      }
  
     
  

  




    
    return (
        <> 
        <div className="flex justify-center items-center h-full">
        <button className="m-auto py-3 px-6 bg-sky-400 shadow-md text-white font-bold rounded-lg">
            <Link to={window.location} >تکمیل خرید</Link>
          </button>
          </div> 
          </>
    );
};

export default VerifyPage;