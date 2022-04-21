import React from 'react';

import leftarrow from '.././../assets/svgicon/leftarrow.svg';

const Dtail = ({props}) => {

    return (
        <div className=" mb-3">
            <img src={props.acf.image} alt={props.title.rendered} />
            {/* style={ {boxShadow: "0px 0px 15px -5px #00000090"} } */}
            <div className="flex justify-center items-center w-full mt-2 p-2 rounded-lg bg-gray-50 dark:bg-white/20 border border-dashed border-gray-400">
                {/* <img src={leftarrow} className="w-5 h-5 ml-1" alt="leftarrow" /> */}
                <h2 className="font-medium text-lg"><span className="text-[#41C3D3]">«</span> {props.title.rendered} <span className="text-[#41C3D3]">»</span></h2>
            </div>
            <div className="flex w-full mt-1 p-2 rounded-lg border border-dashed border-gray-400">
                <p dangerouslySetInnerHTML={{ __html: props.content.rendered }} />
            </div>
        </div>
    );
};

export default Dtail;