import React from 'react';

import leftarrow from '.././../assets/svgicon/leftarrow.svg';

const LessonDataLoading = () => {

    
    return (
        
        <div className="flex flex-col items-start">

            <div className="py-2 w-full">
                <div className="flex items-center  w-full px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
                    <img src={leftarrow} className="w-5 h-5 ml-1" alt="leftarrow" />
                    <svg class="spinner" viewBox="0 0 50 50">
                        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                    </svg>
                </div>
            </div>
                
        </div>
        
    );
};

export default LessonDataLoading;