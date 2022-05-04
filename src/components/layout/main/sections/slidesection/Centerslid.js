import React from 'react';

import ava from '../../../assets/svgicon/ava.svg'

const Centerslid = () => {
    return (
        <div id="mainSlider" className="col-span-12 md:col-span-6 h-full shadow-lg">
            <div id="slideItem" className="grid grid-cols-12 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 p-3 rounded-lg h-full">
                <div className="right flex justify-center flex-col col-span-7 inline-block">
                    <h3 className="text-xl lg:text-4xl font-bold text-white">مدرسه سازمان ها و ارگان ها</h3>
                    <p className="text-justify md:text-lg xl:text-xl md:font-bold text-gray-900 font-medium">شرح کوتاهی از برنامه و اهداف مدرسه آوای توحید در نوشته میشود. شرح کوتاهی از برنامه و د. </p>
                </div>
                <div className="left flex justify-center items-center flex-col col-span-5 inline-block">
                    <img src={ava} className="w-4/5" alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Centerslid;