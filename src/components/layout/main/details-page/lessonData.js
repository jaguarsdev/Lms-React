import React from 'react';

import { Disclosure } from '@headlessui/react'

import Gettopic from './Gettopic';

import leftarrow from '.././../assets/svgicon/leftarrow.svg';

const LessonData = ({lessonData, courseId}) => {

    
    return (
        
        
        <Disclosure>
            <div className="flex flex-col items-start">

            <Disclosure.Button className="py-2 w-full">
                <div className="flex items-center  w-full px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
                    <img src={leftarrow} className="w-5 h-5 ml-1" alt="leftarrow" />
                    <h2 className="font-medium">{lessonData.title.rendered}</h2>
                    <p dangerouslySetInnerHTML={{ __html: lessonData.content.rendered }} />
                </div>
            </Disclosure.Button>
            
            <Gettopic lessonId={lessonData.id} courseId={courseId} />
            </div>
        </Disclosure>
        
    );
};

export default LessonData;