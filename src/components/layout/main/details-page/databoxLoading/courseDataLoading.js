import React from 'react';
import SVGComponent from './SVGComponent'
  const DtailLoading = () => {
        

    return (
        
        <div className=" mb-3">

            <div className="flex items-center justify-center w-full h-52 bg-white/60 rounded-lg">
            <SVGComponent/>
            </div>
            <div className="flex justify-center items-center w-full mt-2 p-2 rounded-lg bg-gray-50 dark:bg-white/20 border border-dashed border-gray-400">
                <h2 className="font-medium text-lg">
                <SVGComponent/>
                </h2>
            </div>
            <div className="flex items-center justify-center w-full mt-1 p-2 rounded-lg border border-dashed border-gray-400">
            <SVGComponent/>
            </div>
        </div>
    );
};

export default DtailLoading;