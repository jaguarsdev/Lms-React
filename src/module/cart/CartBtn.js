import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'

const CartBtn = () => {

    const state = useSelector(state => state.cartState)

    return (
        <Link to="/cart" ><div className="fixed z-10 shadow-md bottom-3 left-3">
            <button className="flex gap-2 items-center py-2 pr-4 pl-2 bg-[#41c3d3] text-white rounded-xl shadow-md" >
                <div className=" shadow-md absolute -mr-8 bg-sky-600 w-7 h-7 rounded-full flex items-center justify-center">
                    {state.itemsCounter}
                </div> نهایی کردن ثبت نام </button>
        </div></Link>
    );
};


export default CartBtn;