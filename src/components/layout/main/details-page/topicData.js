import React, { Fragment  } from 'react';

// import Plyr from "plyr-react";
import { Disclosure, Transition, Tab } from '@headlessui/react'
import { Audio, Media, Video, MediaSync, MediaVisibility  } from '@vidstack/player/react';

import leftarrow from '.././../assets/svgicon/leftarrow.svg';
import { IMGHOST } from '../../../../module/api/baseUrl';




const TopicData = ({topicData}) => {
    
    // console.log(topicData)
    // console.log(topicData.LessonFile.data[0].attributes.url)
    
    // const duc = IMGHOST+topicData.LessonFile.data[0].attributes.url
    
    // const duclink = duc
    // console.log(duclink)

    return (

        <Transition className=" w-full"
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        >
        
            <Disclosure.Panel className="text-gray-500 py-2 px-3 md:px-7">

                <Disclosure>
                    <div className="flex justify-center flex-col w-full px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }> 
                        <Disclosure.Button>
                            <div className='flex items-center'>
                                <img src={leftarrow} className="w-5 h-5 ml-1" alt="leftarrow" />
                                <h2 className="text-black dark:text-white">{topicData.LessonName}</h2>
                            </div>
                        </Disclosure.Button>
                        {topicData.LessonContent ?
                        <Disclosure.Panel>
                            <div className="p-2 text-gray-800 dark:text-white/80">
                                <p className="border border-dashed border-gray-400 p-2 rounded-md " dangerouslySetInnerHTML={{ __html: topicData.LessonContent }} />
                                
                                <div className="mt-2">
                                    <Tab.Group>
                                        <Tab.List className="flex justify-center gap-2">
                                            <Tab as={Fragment} >
                                            {({ selected }) => (<button className={selected ? 'flex-1 bg-[#41c3d3] text-white font-semibold border border-[#41c3d3] px-5 py-1 rounded-lg' : 'flex-1 bg-white/0 text-[#41c3d3] font-semibold border border-[#41c3d3] dark:text-white dark:border-white px-5 py-1 rounded-lg'}>ویدئو</button>)}
                                            </Tab>
                                            <Tab as={Fragment} >
                                            {({ selected }) => (<button className={selected ? 'flex-1 bg-[#41c3d3] text-white font-semibold border border-[#41c3d3] px-5 py-1 rounded-lg' : 'flex-1 bg-white/0 text-[#41c3d3] font-semibold border border-[#41c3d3] dark:text-white dark:border-white px-5 py-1 rounded-lg' }>صوت</button>)}
                                            </Tab>
                                            <Tab as={Fragment} >
                                            {({ selected }) => (<button className={selected ? 'flex-1 bg-[#41c3d3] text-white font-semibold border border-[#41c3d3] px-5 py-1 rounded-lg' : 'flex-1 bg-white/0 text-[#41c3d3] font-semibold border border-[#41c3d3] dark:text-white dark:border-white px-5 py-1 rounded-lg' }>فایل</button>)}
                                            </Tab>
                                        </Tab.List>
                                        <Tab.Panels className="mt-2">
                                            <Tab.Panel>
                                                <Media className="w-full">
                                                <MediaSync singlePlayback className="w-full">
                                                <MediaVisibility
                                                    className="w-full"
                                                    enterViewport="play"
                                                    exitViewport="pause"
                                                    intersectionThreshold="1"
                                                    viewportEnterDelay="0"
                                                >
                                                    <Video poster controls media-fullscreen className="w-full rounded-lg overflow-hidden">
                                                        <video
                                                            controls
                                                            preload="none"
                                                            src={IMGHOST+topicData.LessonVideo.data.attributes.url}
                                                            // poster="https://media-files.vidstack.io/poster-seo.png"
                                                        />
                                                    </Video>
                                                </MediaVisibility>
                                                </MediaSync>
                                                </Media>
                                            </Tab.Panel>
                                            <Tab.Panel>
                                                <Media className="w-full">
                                                <MediaSync singlePlayback className="w-full">
                                                <MediaVisibility
                                                    className="w-full"
                                                    enterViewport="play"
                                                    exitViewport="pause"
                                                    intersectionThreshold="1"
                                                    viewportEnterDelay="0"
                                                >
                                                    <Audio controls className="w-full">
                                                        <audio
                                                            className="w-full"
                                                            controls
                                                            preload="none"
                                                            src={IMGHOST+topicData.LessonSot.data.attributes.url}
                                                        />
                                                    </Audio>
                                                </MediaVisibility>
                                                </MediaSync>
                                                </Media>
                                            </Tab.Panel>
                                            <Tab.Panel>
                                                <a href={IMGHOST+topicData.LessonFile.data[0].attributes.url} download >
                                                    <div className="hover:bg-[#41c3d3] hover:text-white text-[#41c3d3] font-semibold border border-[#41c3d3] px-5 py-1 rounded-lg w-11/12 m-auto text-center">
                                                        دانلود
                                                    </div>
                                                </a>
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                </div>

                            </div>
                        </Disclosure.Panel> :

                        ""
                         }
                    </div>
                </Disclosure>

            </Disclosure.Panel>
        </Transition>
        
        
    );
};

export default TopicData;