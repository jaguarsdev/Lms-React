import React from 'react';

const Dtail = ({props}) => {

    return (
        <div>
            <h1>Course Data Page</h1>
            <h1>{props.id}</h1>
            <img src={props.acf.image} alt={props.title.rendered} />
            <p dangerouslySetInnerHTML={{ __html: props.content.rendered }} />
            {}
        </div>
    );
};

export default Dtail;