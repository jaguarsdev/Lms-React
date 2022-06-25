import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import axios from 'axios';

import { fetchCourses } from '../../../../../../redux/courses/coursesAction'
import MapCourseDate from '../MapCourseDate'
import MapCourseDateLoading from '../MapCourseDateLoading'
// import { BASE_COURSES_API } from '../baseUrl'

import { Swiper, SwiperSlide } from 'swiper/react';

const GetCourses = () => {

    const dispatch = useDispatch();
    const coursesState = useSelector(state => state.coursesState)

    useEffect(() => {
        dispatch(fetchCourses())
        
    }, [dispatch])

    const DATA_OF_COURSE = coursesState.courses.data


    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            }}
            className="mahbob"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {
                coursesState.loading ? 
                <SwiperSlide><MapCourseDateLoading /></SwiperSlide> :
                coursesState.error ?
                    <p>Somethin went wrong</p> :
                    DATA_OF_COURSE?.map(course => 
                    <SwiperSlide key={Math.random()}>
                        <MapCourseDate key={course.id} keyid={course.id} courseData={course.attributes} />
                    </SwiperSlide>
                    
                    )
            }
        </Swiper>
    );
};

export default GetCourses;