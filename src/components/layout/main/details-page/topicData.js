import React from 'react';

import { Disclosure } from '@headlessui/react'

import leftarrow from '.././../assets/svgicon/leftarrow.svg';

const TopicData = ({topicData}) => {

    return (

        
        <Disclosure.Panel className="text-gray-500 w-full py-2 px-5">

            <div className="flex items-center  w-full px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
                <img src={leftarrow} className="w-5 h-5 ml-1" alt="leftarrow" />
                <h2 className="text-black dark:text-white">{topicData.title.rendered}</h2>
                <p dangerouslySetInnerHTML={{ __html: topicData.content.rendered }} />
            </div>
        </Disclosure.Panel>
        
        
    );
};

export default TopicData;