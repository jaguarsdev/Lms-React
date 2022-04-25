import React from 'react';

  const DtailLoading = () => {
        

    return (
        
        <div className=" mb-3">

            <div className="flex items-center justify-center w-full h-52 bg-white/60 rounded-lg">
                <svg class="spinner" viewBox="0 0 50 50">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
            </div>
            <div className="flex justify-center items-center w-full mt-2 p-2 rounded-lg bg-gray-50 dark:bg-white/20 border border-dashed border-gray-400">
                <h2 className="font-medium text-lg">
                <svg class="spinner" viewBox="0 0 50 50">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                </h2>
            </div>
            <div className="flex items-center justify-center w-full mt-1 p-2 rounded-lg border border-dashed border-gray-400">
                <svg class="spinner" viewBox="0 0 50 50">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
            </div>
        </div>
    );
};

export default DtailLoading;