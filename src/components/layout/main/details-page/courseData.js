import React from 'react';




  const Dtail = ({props}) => {
        

    return (
        
        <div className=" mb-3">

            <img className="w-full rounded-lg shadow-md" src={props.acf.image} alt={props.title.rendered} />
            <div className="flex justify-center items-center w-full mt-2 p-2 rounded-lg bg-gray-50 dark:bg-white/20 border border-dashed border-gray-400">
                <h2 className="font-medium text-lg"><span className="text-[#41C3D3]">«</span> {props.title.rendered} <span className="text-[#41C3D3]">»</span></h2>
            </div>
            <div className="flex w-full mt-1 p-2 rounded-lg border border-dashed border-gray-400">
                <p dangerouslySetInnerHTML={{ __html: props.content.rendered }} />
            </div>
    </  div>
    );
};

export default Dtail;