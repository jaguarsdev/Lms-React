import React from 'react';

import { Link } from 'react-router-dom';


const MapCourseDate = ({courseData}) => {

  
    return (
        <>
            {/* <img src={courseData.acf.image} className="rounded-lg" alt={courseData.title.rendered} />
            <h1 className="font-semibold">{courseData.title.rendered}</h1>
            <p>{courseData.acf.summary}</p> */}



                                        <div id="productContBox" className="flex flex-col p-2 gap-2 bg-white shadow-lg dark:bg-white/30 rounded-lg">


                                            <div id="prodTitle" className="flex items-center gap-2">
                                                <a href=""><div className="w-10 h-10 border border-teal-500 rounded-lg overflow-hidden">
                                                    <img src={courseData.acf.ostad_img} alt={courseData.title.rendered} />
                                                </div></a>
                                                <a href=""><h3 className="font-bold">{courseData.title.rendered}</h3></a>
                                            </div>



                                            <div id="content" className="flex flex-col gap-2">
                                                <div id="postImg" className="rounded-md overflow-hidden">
                                                    <img src={courseData.acf.image} alt={courseData.title.rendered} className="w-full" />
                                                </div>
                                                <p className="">{courseData.acf.summary}</p>
                                            </div>


                                            <div id="option" className="flex flex-col">
                                                <div id="ProInfo">
                                                    <ul>
                                                        <ul className="p-2 flex justify-center gap-2  cursor-help">
                                                            <li className="flex hover:text-gray-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            5ساعت
                                                            </li>
                                                            <li className="flex hover:text-gray-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                                </svg>
                                                            200جلسه
                                                            </li>
                                                            <li className="flex hover:text-gray-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                            500دانشپژوه
                                                            </li>
                                                            
                                                        </ul>
                                                    </ul>
                                                </div>
                                                <div className="bg-blue-600 py-1 rounded-md text-center font-bold w-full">
                                                    <Link to={`/course/${courseData.id}`} className="text-white">ثبت نام و شروع دوره</Link>
                                                </div>
                                            </div>
                                        </div>
        </>
        
    );
};

export default MapCourseDate;