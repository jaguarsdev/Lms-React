import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { isInCart } from '../../../../../module/cart/helper/FuncHelper'
 
import iconClock from '../../../assets/svgicon/iconClock.svg';
import iconUser from '../../../assets/svgicon/iconUser.svg';
import iconJalasat from '../../../assets/svgicon/iconJalasat.svg';

const MapCourseDate = ({courseData, keyid}) => {
    // console.log(`http://localhost:1337${courseData.teachers.TeacherImage.data.attributes.formats.medium.url}`)
    // console.log(keyid)

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    
    return (
        <>
            <div id="productContBox" className="flex flex-col p-1 xl:p-2 gap-2 bg-white shadow-lg dark:bg-white/30 rounded-lg">

                <div id="prodTitle" className="flex items-center gap-2">
                <Link to={`/course/${keyid}`}><div className="w-10 h-10 border border-teal-500 rounded-lg overflow-hidden">
                        <img src={`http://localhost:1337${courseData.CourseImage.data.attributes.formats.medium.url}`} alt={courseData.CourseTitle} />
                    </div></Link>
                    <Link to={`/course/${keyid}`}><h3 className="font-bold">{courseData.CourseTitle}</h3></Link>
                </div>

                <div id="content" className="flex flex-col gap-2">
                    <div id="postImg" className="rounded-md overflow-hidden">
                        <img src={`http://localhost:1337${courseData.CourseImage.data.attributes.formats.medium.url}`} alt={courseData.CourseTitle} className="w-full" />
                    </div>
                    <p className="">{courseData.summary}</p>
                </div>

                <div id="option" className="flex flex-col">
                    <div id="ProInfo">
                            <ul className="p-2 flex flex-wrap justify-center gap-2  cursor-help">
                                <li className="flex hover:text-gray-300">
                                    <img src={iconClock} className="w-4 h-4 ml-1" alt="iconClock" />
                                    {courseData.CourseTime}</li>
                                <li className="flex hover:text-gray-300">
                                    <img src={iconJalasat} className="w-4 h-4 ml-1" alt="iconJalasat" />
                                    {courseData.CourseSession}</li> 
                                <li className="flex hover:text-gray-300">
                                    <img src={iconUser} className="w-6 h-5 ml-1" alt="iconUser" />
                                    {courseData.CourseMember}</li>
                                
                            </ul>
                    </div>
                    <div className="bg-blue-600 py-1 rounded-md text-center font-bold w-full mb-1">
                    <Link to={`/course/${keyid}`} className="text-white">جزئیات بیشتر</Link>
                    </div>
                    
                    {
                        isInCart(state, keyid) ?
                        <button className="font-bold" onClick={() => dispatch({type: "REMOVE_ITEM", payload: courseData})} ><div className="bg-white/0 border text-[#41c3d3] border-[#41c3d3] py-1 rounded-md text-center w-full">انصراف</div></button> :
                        <button className="text-white font-bold" onClick={() => dispatch({type: "ADD_ITEM", payload: courseData})} ><div className="bg-[#41c3d3] py-1 rounded-md text-center font-bold w-full">ثبت نام</div></button>
                    }
                </div>
            </div>
        </>
        
    );
};

export default MapCourseDate;