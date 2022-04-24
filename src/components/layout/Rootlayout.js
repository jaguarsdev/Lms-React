import React from 'react';
import Rootheader from './header/Rootheader';
import Rootmain from './main/Rootmain';
import CartBtn from '../../redux/cart/CartBtn';

const Rootlayout = () => {
    return (
        <>
        <Rootheader />
        <Rootmain />
        <CartBtn />
        </>
    );
};

export default Rootlayout;