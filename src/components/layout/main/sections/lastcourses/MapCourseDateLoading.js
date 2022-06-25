import React from 'react';
 
// import iconClock from '../../../assets/svgicon/iconClock.svg';
// import iconUser from '../../../assets/svgicon/iconUser.svg';
// import iconJalasat from '../../../assets/svgicon/iconJalasat.svg';

const MapCourseDateLoading = () => {

    return (
        <>
            <div id="productContBox" className="flex flex-col p-1 xl:p-2 gap-2 bg-white shadow-lg dark:bg-white/30 rounded-lg">

                <div id="prodTitle" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                        <div className="animate-pulse w-10 h-10 bg-slate-200"></div>
                    </div>
                    <div className="animate-pulse bg-slate-200 py-2 w-16 rounded-md"></div>
                </div>

                <div id="content" className="flex flex-col gap-2">
                    <div id="postImg" className="rounded-md overflow-hidden">
                        <div className="animate-pulse w-full h-24 bg-slate-200"></div>
                    </div>
                    <p className="animate-pulse bg-slate-200 py-2 rounded-md"></p>
                </div>

                <div id="option" className="flex flex-col">
                    {/* <div id="ProInfo">
                        <ul>
                            <ul className="p-2 flex flex-wrap justify-center gap-2  cursor-help">
                                <li className="flex hover:text-gray-300">
                                    <img src={iconClock} className="w-4 h-4 ml-1" alt="iconClock" />
                                    f</li>
                                <li className="flex hover:text-gray-300">
                                    <img src={iconJalasat} className="w-4 h-4" alt="iconJalasat" />
                                    f</li> 
                                <li className="flex hover:text-gray-300">
                                    <img src={iconUser} className="w-4 h-4" alt="iconUser" />
                                    f</li>
                                
                            </ul>
                        </ul>
                    </div> */}
                    <div className="animate-pulse bg-blue-600 py-3 rounded-md text-center font-bold w-full mb-1">
                    <div className="text-white"></div>
                    </div>
                    <button className="animate-pulse text-white font-bold" ><div className="bg-[#41c3d3] py-3 rounded-md text-center font-bold w-full"></div></button>
                </div>
            </div>
        </>
        
    );
};

export default MapCourseDateLoading;