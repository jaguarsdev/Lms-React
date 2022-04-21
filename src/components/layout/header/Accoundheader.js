import React from 'react';
import profile_img from '../assets/images/profile.jpg'
import Darkandlight from './Darkandlight';


const Accoundheader = () => {
    return (
        <div id="account" className="flex gap-3 items-center">
            <Darkandlight />
            <div id="login" className="md:hidden">
                <div id="avatar" className="flex items-center">
                    <img src={profile_img} className="w-9 h-9 rounded-full mr-3 ring-2 ring-white" alt="" />
                </div>
            </div>
            <div id="logout" className="hidden md:block">
                <a href="" className="">ثبت نام</a>
                <a href="" className="bg-blue-600 px-4 py-1 rounded-md mr-2 text-white shadow-lg">ورود</a>
            </div>
        </div>
    );
};

export default Accoundheader;