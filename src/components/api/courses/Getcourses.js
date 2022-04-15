import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import axios from 'axios';

import { fetchCourses } from '../../../redux/courses/coursesAction'
import MapCourseDate from '../../layout/main/sections/mahbobsection/MapCourseDate'
// import { BASE_COURSES_API } from '../baseUrl'

import { Swiper, SwiperSlide } from 'swiper/react';

const GetCourses = () => {

    const dispatch = useDispatch();
    const coursesState = useSelector(state => state.coursesState)

    useEffect(() => {
        dispatch(fetchCourses())
        
    }, [])


    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {
                coursesState.loading ? 
                <h1>loading</h1> :
                coursesState.error ?
                    <p>Somethin went wrong</p> :
                    coursesState.courses.map(course => 
                    <SwiperSlide>
                        <MapCourseDate key={course.id} courseData={course} />
                    </SwiperSlide>
                    
                    )
            }
        </Swiper>
    );
};

export default GetCourses;