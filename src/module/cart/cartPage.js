import React from 'react';

import { useSelector } from 'react-redux';
import PaymentControler from '../payment/requsetPay'
import Rootheader from '../../components/layout/header/Rootheader';
import Cart from './cart';

const CartPage = () => {

    const state = useSelector(state => state.cartState)
    
    let total = state.selectedItems.map(item => +item.price_type_closed_price)
    total = total.reduce((a, b) => a + b , 0);
    const price = total.toLocaleString();

    // const coursrId = state.selectedItems.map(item => item.acf.idwo )
    // const productId = state.selectedItems.map(item => item.id )
    
    // console.log(coursrId,productId)

    // const sum = () => {
    // }
    const useremail = JSON.parse(localStorage.getItem("user")).user_email;
    // const totalPrice = total;
    // handlePay(useremail,totalPrice)

    const handlePay = async (useremail,total) => {

        try {
          await PaymentControler.requestToPay(total, useremail).then(
            () => {
            //   navigate("/home");
            //   window.location.reload();
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
         <>  

            <Rootheader />
            <main className="grid grid-cols-12 text-black dark:text-white h-full">
                <div id="Mainbox" className="col-span-12  flex flex-col  overflow-y-scroll scroll1">
                    <div id="Maincontent" className="bg-white/50 dark:bg-black/25 p-2 mb-52">
                        <div className="grid md:grid-cols-12">
                            <div className="md:col-span-8 flex flex-col gap-2">
                                {state.selectedItems.map(item => <Cart key={item.id} props={item} /> )}

                                <div className='flex flex-col items-center md:flex-row gap-2'>
                                    <div className='bg-white/80 dark:bg-white/40 w-full rounded-lg p-3 shadow-md flex items-center justify-between'>
                                        <p className='px-5'><span className='font-bold' > مجموع دوره ها : </span>{state.itemsCounter}</p>
                                        <p className='px-5'><span className='font-bold' > جمع پرداختی : </span> { price } تومان </p>
                                    </div>
                                    <button onClick={() => handlePay(useremail,total)} className="text-white font-bold rounded-md shadow-md w-full md:w-fit" >
                                        <div className="bg-[#41c3d3] hover:bg-[#239dad] py-3 md:px-12 rounded-md text-center font-bold w-full"> پرداخت </div>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </>
    );
};

export default CartPage;
