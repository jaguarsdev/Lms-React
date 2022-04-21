import React from 'react';

import { Disclosure, Transition } from '@headlessui/react'

import leftarrow from '.././../assets/svgicon/leftarrow.svg';

const TopicData = ({topicData}) => {

    return (
        
        <Transition className=" w-full"
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
        <Disclosure.Panel className="text-gray-500 py-2 px-5">

            <div className="flex items-center  w-full px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
                <img src={leftarrow} className="w-5 h-5 ml-1" alt="leftarrow" />
                <h2 className="text-black dark:text-white">{topicData.title.rendered}</h2>
                <p dangerouslySetInnerHTML={{ __html: topicData.content.rendered }} />
            </div>
        </Disclosure.Panel>
        </Transition>
        
        
    );
};

export default TopicData;