import React from 'react';

const Dtail = ({props}) => {

    console.log(props.id)

    return (
        <div>
            helooo
            <h1>{props.id}</h1>
            <img src={props.acf.image} alt={props.title.rendered} />
            <p>{props.content.rendered}</p>
        </div>
    );
};

export default Dtail;