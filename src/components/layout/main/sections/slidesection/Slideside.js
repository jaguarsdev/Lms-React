import React from 'react';


// import hozori from '../../../assets/svgicon/hozori.svg';
// import majazi from '../../../assets/svgicon/majazi.svg';
// import sazman from '../../../assets/svgicon/sazman.svg';
// import beinolmelal from '../../../assets/svgicon/beinolmelal.svg';


const Slideside = () => {
    return (
        <ul  id="sideSlide" className="grid grid-cols-2 gap-2 col-span-12 md:col-span-4">

                                <a href="/"><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-center items-center p-6 md:p-11 rounded-lg bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600">
                                    <div className="right py-2 flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
            شعبه قم
                                        </h3>
                                    </div>
                                    {/* <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <img src={hozori} className="w-14 h-14" alt="hozori" />
                                    </div> */}
                                </div></li></a>
        
                                <a href="/"><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-center items-center p-6 md:p-11 rounded-lg bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-600">
                                    <div className="right py-2 flex justify-center flex-col md:col-span-2 inline-block">
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
            شعبه تهران
                                        </h3>
                                    </div>
                                    {/* <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <img src={majazi} className="w-14 h-14" alt="majazi" />         
                                    </div> */}
                                </div></li></a>
        
                                <a href="/"><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-center items-center p-6 md:p-11 rounded-lg bg-gradient-to-br from-purple-300 via-purple-400 to-purple-600">
                                    <div className="right py-2 flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
            شعبه اصفهان
                                        </h3>
                                    </div>
                                    {/* <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <img src={beinolmelal} className="w-14 h-14" alt="beinolmelal" />   
                                    </div> */}
                                </div></li></a>
                                
                                <a href="/"><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-center items-center p-6 md:p-11 rounded-lg bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600">
                                    <div className="right py-2 flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
            شعبه شیراز
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