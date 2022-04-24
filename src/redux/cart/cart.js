import React from 'react';

const Cart = ( {props} ) => {

    console.log(props)

    return (
        <div>
            <h1> {props.title.rendered} </h1>
            <h1> {props.price_type_closed_price} </h1>
        </div>
    );
};

export default Cart;