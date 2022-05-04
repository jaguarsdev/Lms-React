import React from 'react';


// import hozori from '../../../assets/svgicon/hozori.svg';
// import majazi from '../../../assets/svgicon/majazi.svg';
// import sazman from '../../../assets/svgicon/sazman.svg';
// import beinolmelal from '../../../assets/svgicon/beinolmelal.svg';


const Slideside = () => {
    return (
        <ul  id="sideSlide" className="grid grid-cols-2 gap-2 col-span-12 md:col-span-4">

                                <a href="/"><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-center items-center p-5 md:p-11 rounded-lg bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-600">
                                    <div className="right flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl py-2 font-bold text-gray-900">
            دوره ها
                                        </h3>
                                    </div>
                                    {/* <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <img src={hozori} className="w-14 h-14" alt="hozori" />
                                    </div> */}
                                </div></li></a>
        
                                <a href="/"><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-center items-center p-5 md:p-11 rounded-lg bg-gradient-to-br from-cyan-200 via-cyan-400 to-cyan-600">
                                    <div className="right flex justify-center flex-col md:col-span-2 inline-block">
                                        <h3 className="text-lg md:text-2xl py-2 font-bold text-gray-900">
            تک درس
                                        </h3>
                                    </div>
                                    {/* <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <img src={majazi} className="w-14 h-14" alt="majazi" />         
                                    </div> */}
                                </div></li></a>
        
                                <a href="/"><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-center items-center p-5 md:p-11 rounded-lg bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600">
                                    <div className="right flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl py-2 font-bold text-gray-900">
            وبینار
                                        </h3>
                                    </div>
                                    {/* <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <img src={beinolmelal} className="w-14 h-14" alt="beinolmelal" />   
                                    </div> */}
                                </div></li></a>
                                
                                <a href="/"><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-center items-center p-5 md:p-11 rounded-lg bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600">
                                    <div className="right flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl py-2 font-bold text-gray-900">
            کتابخانه
                                        </h3>
                                    </div>
                                    {/* <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <img src={sazman} className="w-14 h-14" alt="sazman" />
                                    </div> */}
                                </div></li></a>
                            
                        </ul>
    );
};

export default Slideside;