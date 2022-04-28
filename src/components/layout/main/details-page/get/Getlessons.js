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
        axios.get(`${BASE_COURSES_API}sfwd-lessons?course=${courseId}`, {headers: authHeader() })
            .then(res => setData({...Data, D: res.data}))
            .catch(error => setData({...Data, E: true}))
            // setData({...Data, D: res.data})

    }, [courseId]); 


    console.log(`🚀 ~ file: Getlessons.js ~ line 27 ~ Getlessons ~ Data`, Data.E)
    return (
        <>
        {!Data.D ? 
            <LessonDataLoading /> :
                Data.E ?
                <p>لطفا یعد از اطمینان از اتصال شبکه با پشتیبانی تماس حاصل نمائید!</p> :
                Data.D.map(lesson => <LessonData key={lesson.id} lessonData={lesson} courseId={courseId} />)
            }
                        
        
        </>
    );
};

export default Getlessons;
