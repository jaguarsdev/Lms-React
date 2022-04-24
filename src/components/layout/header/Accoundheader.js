import React from 'react';
import { Menu, Transition } from '@headlessui/react'

import Darkandlight from './Darkandlight';

import profile_img from '../assets/images/profile.jpg'



const Accoundheader = () => {
    return (
        <div id="account" className="flex gap-3 items-center">
            <Darkandlight />
            <div id="login" className="md:hidden">
                <Menu>
                    <div id="avatar" className="flex items-center">
                  <Menu.Button className="w-9 h-9 rounded-full mr-3 ring-2 ring-white overflow-hidden">
                        <img src={profile_img} className="" alt="" />
                  </Menu.Button>
                    </div>
                  <Menu.Items className="flex divide-y dark:divide-gray-600 absolute flex-col left-4 mt-2 shadow-xl bg-white dark:bg-black/90 rounded-lg overflow-hidden">
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
                    <Menu.Item className="py-1 px-3 text-red-500 font-medium hover:bg-sky-200">
                      <span className="">خروج از حساب</span>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
            </div>
            <div id="logout" className="hidden md:block">
                <a href="" className="">ثبت نام</a>
                <a href="" className="bg-blue-600 px-4 py-1 rounded-md mr-2 text-white shadow-lg">ورود</a>
            </div>
        </div>
    );
};

export default Accoundheader;