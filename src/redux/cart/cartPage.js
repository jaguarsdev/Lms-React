import React from 'react';

import { useSelector } from 'react-redux';

import Rootheader from '../../components/layout/header/Rootheader';
import Cart from './cart';

const CartPage = () => {

    const state = useSelector(state => state.cartState)
    
    let total = state.selectedItems.map(item => +item.price_type_closed_price)
    total = total.reduce((a, b) => a + b , 0)

    return (
         <>  

            <Rootheader />
            <main className="grid grid-cols-12 text-black dark:text-white h-full">
                <div id="Mainbox" className="col-span-12  flex flex-col  overflow-y-scroll scroll1">
                    <div id="Maincontent" className="bg-white/50 dark:bg-black/25 p-2 mb-52">
                        <div className="grid md:grid-cols-12">
                            <div className="md:col-span-8">
                                {state.selectedItems.map(item => <Cart key={item.id} props={item} />)}


                                <div>total = {total} </div>
                                <div>counter = {state.itemsCounter} </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </>
    );
};

export default CartPage;
