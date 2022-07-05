import React from 'react';
import { IMGHOST } from '../../../../module/api/baseUrl';

  const Dtail = ({props}) => {
        // console.log(props)

    return (
        
        <div className=" mb-3">

            <img className="w-full rounded-lg shadow-md" src={`${IMGHOST}${props.CourseImage.data.attributes.formats.medium.url}`} alt={props.CourseTitle} />
            <div className="flex justify-center items-center w-full mt-2 p-2 rounded-lg bg-gray-50 dark:bg-white/20 border border-dashed border-gray-400">
                <h2 className="font-medium text-lg"><span className="text-[#41C3D3]">«</span> {props.CourseTitle} <span className="text-[#41C3D3]">»</span></h2>
            </div>
            <div className="flex w-full mt-1 p-2 rounded-lg border border-dashed border-gray-400">
                <p dangerouslySetInnerHTML={{ __html: props.CourseContent }} />
            </div>
        </div>
    );
};

export default Dtail;