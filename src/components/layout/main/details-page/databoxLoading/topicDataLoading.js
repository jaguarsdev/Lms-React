import React from 'react';


import leftarrow from '../.././../assets/svgicon/leftarrow.svg';
import SVGComponent from './SVGComponent'
const TopicDataLoading = () => {

    return (
        <div className="text-gray-500 py-2 px-3 md:px-7 w-full">

            <div className="flex justify-center flex-col w-full px-2 py-2 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }> 
                <div className='flex items-center'>
                    <img src={leftarrow} className="w-5 h-5 ml-1" alt="leftarrow" />
                    
                    <SVGComponent />

                </div>
            </div>

        </div>
    );
};

export default TopicDataLoading;