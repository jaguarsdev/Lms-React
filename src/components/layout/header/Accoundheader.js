import React, { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import AuthService from '../../../module/authentication/auth.service'
import Darkandlight from './Darkandlight';
import { IMGHOST } from '../../../module/api/baseUrl';
import profile_img from '../assets/images/profile.jpg'
import { authBar } from '../../../module/authentication/auth-header';



const Accoundheader = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [Accimg, setAccimg] = useState(undefined);

  const logOut = () => {
    AuthService.logout();
    window.location.reload();
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    const userId = (currentUser ? JSON.parse(localStorage.getItem("user")).user.id : JSON.parse(localStorage.getItem("pleaseLogin")).user_id)
    var config = {
      method: 'get',
      url: `https://back.lmsava.ir/api/users/${userId}?populate=profilePic`,
      headers: { 
        'Authorization': `Bearer ${authBar()}`, 
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(async function (response) {
      const res = await response
      await setAccimg( await res.data.profilePic? await res.data.profilePic.formats.thumbnail.url : "/uploads/sabkezendegi_4cfbd65118.webp")
      console.log(res);
      console.log(Accimg);
    })
    .catch(function (error) {
      console.log(error);
    });


  }, []);



  const  pleaseLogin = {
    token: "pleaseLogin",
    user_display_name: "pleaseLogin",
    user_email: "pleaseLogin@pleaseLogin.pleaseLogin",
    user_id: "pleaseLogin",
    user_nicename: "pleaseLogin"
  }
  if(currentUser === undefined){
    localStorage.setItem("pleaseLogin", JSON.stringify(pleaseLogin));
  } 




    return (
      <div id="account" className="flex gap-3 items-center">
            <Darkandlight />

            {currentUser && (
            <div id="login" >
                <Menu>
                    <div id="avatar" className="flex items-center">
                  <Menu.Button className="w-9 h-9 rounded-full mr-3 ring-2 ring-white overflow-hidden">
                        <img src={IMGHOST+Accimg} className="" alt="" />
                  </Menu.Button>
                    </div>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                  <Menu.Items className=" flex min-w-32 divide-y dark:divide-gray-600 absolute flex-col left-4 mt-2 shadow-xl bg-white dark:bg-black/90 rounded-lg overflow-hidden">
                    <Menu.Item className="py-1 px-3 hover:bg-sky-200">
                      {({ active }) => (
                        <a
                          className={`${active && 'bg-blue-500'}`}
                          href="/account-settings"
                        >
                          حساب کاربری
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item className="py-1 px-3 hover:bg-sky-200">
                      {({ active }) => (
                        <a
                          className={`${active && 'bg-blue-500'}`}
                          href="/account-settings"
                        >
                          تنظیمات
                        </a>
                      )}
                    </Menu.Item>
                    {currentUser && (
                    <Menu.Item onClick={logOut} className="py-1 px-3 text-red-500 font-medium hover:bg-sky-200">
                      <button className="">خروج از حساب</button>
                    </Menu.Item>
                    )}
                  </Menu.Items>
                  </Transition>
                </Menu>
            </div>
            )}

            {!currentUser && (
            <div id="logout" >
                <Link to="/register" className="">ثبت نام</Link>
                <Link to="/login" className="bg-blue-600 px-4 py-1 rounded-md mr-2 text-white shadow-lg">ورود</Link>
            </div>
            )}
      </div>
    );
};

export default Accoundheader;