import React from 'react';

import { Link } from 'react-router-dom'

const CartBtn = () => {

    return (
        <Link to="/cart" ><div className="fixed bottom-3 left-3">
            <button className="py-2 px-5 bg-[#41c3d3] text-white rounded-xl shadow-md" > نهایی کردن ثبت نام </button>
        </div></Link>
    );
};


export default CartBtn;