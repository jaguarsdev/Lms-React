import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../../../module/api/baseUrl';

import LessonData from '../lessonData';
import LessonDataLoading from '../databoxLoading/lessonDataLoading';

const Getlessons = ({courseId}) => {

    const [Data, setData] = useState({D: "", E: false});

    useEffect(() => {
        // Get Lessons Data
        axios.get(`${BASE_COURSES_API}sfwd-lessons?course=${courseId}`, {
            headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdDEubG1zYXZhLmlyIiwiaWF0IjoxNjUwNTQ5NTY1LCJuYmYiOjE2NTA1NDk1NjUsImV4cCI6MTY1MTE1NDM2NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.DLxC6mtcRjQv_DuAh2NA2fEPk_v3m1tKYg1CYLS27iQ'}
        })
            .then(res => setData({...Data, D: res.data}))
            .catch(error => setData({...Data, E: true}))
            // setData({...Data, D: res.data})

    }, [courseId]); 


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
