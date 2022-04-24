import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { isInCart } from '../../../../../redux/cart/helper/FuncHelper'
 
import iconClock from '../../../assets/svgicon/iconClock.svg';
import iconUser from '../../../assets/svgicon/iconUser.svg';
import iconJalasat from '../../../assets/svgicon/iconJalasat.svg';

const MapCourseDate = ({courseData}) => {
    // console.log(courseData)

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    
    return (
        <>
            <div id="productContBox" className="flex flex-col p-1 xl:p-2 gap-2 bg-white shadow-lg dark:bg-white/30 rounded-lg">

                <div id="prodTitle" className="flex items-center gap-2">
                <Link to={`/course/${courseData.id}`}><div className="w-10 h-10 border border-teal-500 rounded-lg overflow-hidden">
                        <img src={courseData.acf.ostad_img} alt={courseData.title.rendered} />
                    </div></Link>
                    <Link to={`/course/${courseData.id}`}><h3 className="font-bold">{courseData.title.rendered}</h3></Link>
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
                            <ul className="p-2 flex flex-wrap justify-center gap-2  cursor-help">
                                <li className="flex hover:text-gray-300">
                                    <img src={iconClock} className="w-4 h-4 ml-1" alt="iconClock" />
                                    {courseData.acf.hours}</li>
                                <li className="flex hover:text-gray-300">
                                    <img src={iconJalasat} className="w-4 h-4" alt="iconJalasat" />
                                    {courseData.acf.sessions}</li> 
                                <li className="flex hover:text-gray-300">
                                    <img src={iconUser} className="w-4 h-4" alt="iconUser" />
                                    {courseData.acf.users}</li>
                                
                            </ul>
                        </ul>
                    </div>
                    <div className="bg-blue-600 py-1 rounded-md text-center font-bold w-full mb-1">
                    <Link to={`/course/${courseData.id}`} className="text-white">جزئیات بیشتر</Link>
                    </div>
                    
                    {
                        isInCart(state, courseData.id) ?
                        <button className="font-bold" onClick={() => dispatch({type: "REMOVE_ITEM", payload: courseData})} ><div className="bg-white/0 border text-[#41c3d3] border-[#41c3d3] py-1 rounded-md text-center w-full">انصراف</div></button> :
                        <button className="text-white font-bold" onClick={() => dispatch({type: "ADD_ITEM", payload: courseData})} ><div className="bg-[#41c3d3] py-1 rounded-md text-center font-bold w-full">ثبت نام</div></button>
                    }
                </div>
            </div>
        </>
        
    );
};

export default MapCourseDate;