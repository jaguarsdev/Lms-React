import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isInCart } from './helper/FuncHelper'

import closeicon from '../../components/layout/assets/svgicon/Close.svg'

const Cart = ( {props} ) => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch();

    let total = +props.price_type_closed_price
    const price = total.toLocaleString();

    return (
        <div className='bg-white/80 dark:bg-white/40 w-full rounded-lg p-3 shadow-md flex items-center justify-between'>
            <img src={props.acf.image} alt={props.title.rendered} className='w-1/2 md:w-1/5  rounded-lg shadow-md' />
            <div className='flex flex-col md:flex-row justify-between grow'>
                <h1 className='mx-5 font-bold'> {props.title.rendered} </h1>
                <p className='mx-5'>{price} تومان </p>
                {
                    isInCart(state, props.id) ?
                    <button className="mx-5 font-bold" onClick={() => dispatch({type: "REMOVE_ITEM", payload: props})} ><div className="bg-white/0 rounded-md text-center w-full"><img src={closeicon} alt="icon" /></div></button> :
                    <button className="mx-5 text-white font-bold" onClick={() => dispatch({type: "ADD_ITEM", payload: props})} ><div className="bg-[#41c3d3] py-1 rounded-md  px-2 text-center font-bold w-full">ثبت نام</div></button>
                }
            </div>
        </div>
    );
};

export default Cart;