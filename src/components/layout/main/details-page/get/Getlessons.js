import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../../../module/api/baseUrl';
import authHeader from '../../../../../module/authentication/auth-header'

import LessonData from '../lessonData';
import LessonDataLoading from '../databoxLoading/lessonDataLoading';

const Getlessons = ({courseId}) => {

    const [Data, setData] = useState({D: "", E: false});

    useEffect(() => {
        // Get Lessons Data
        axios.get(`${BASE_COURSES_API}courses/${courseId}?populate=lessons`, {
            headers: authHeader() 
        })
            .then(res => setData({...Data, D: res.data.data.attributes.lessons.data}))
            .catch(error => setData({...Data, E: true}))
            // setData({...Data, D: res.data})

    }, [courseId]); 
    
    const DATA_OF_LESSON = Data.D
    // console.log(authHeader())


    return (
        <>
        {!Data.D ? 
            <LessonDataLoading /> :
                Data.E ?
                <p>لطفا یعد از اطمینان از اتصال شبکه با پشتیبانی تماس حاصل نمائید!</p> :
                DATA_OF_LESSON?.map(lesson =>
                <LessonData key={lesson.id} lessonData={lesson} courseId={courseId} />
                )
            }        
        </>
    );
};

export default Getlessons;
