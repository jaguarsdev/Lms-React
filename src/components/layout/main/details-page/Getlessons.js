import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../api/baseUrl';

import LessonData from './lessonData';

const Getlessons = ({courseId}) => {

    const [Data, setData] = useState({D: "", E: false});

    useEffect(() => {
        // Get Lessons Data
        axios.get(`${BASE_COURSES_API}sfwd-lessons?course=${courseId}`, {
            headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdDEubG1zYXZhLmlyIiwiaWF0IjoxNjQ5OTMzMDU2LCJuYmYiOjE2NDk5MzMwNTYsImV4cCI6MTY1MDUzNzg1NiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.7IfVjwwg34hmw-KYdGCZJf2lU9zrCbETyqdKYzO9jxY'}
        })
            .then(res => setData({...Data, D: res.data}))
            .catch(error => setData({...Data, E: true}))
            // setData({...Data, D: res.data})

    }, [courseId]); 
    console.log(Data.D)
    // console.log(Data.D.map(lesson => lesson.id))




    return (
        <>
        <h1>hiiii</h1>

        {!Data.D ? 
            <h1>LOADING</h1> :
                Data.E ?
                <p>Somethin went wrong</p> :
                Data.D.map(lesson => <LessonData key={lesson.id} lessonData={lesson} />)
            }
                        
        
        </>
    );
};

export default Getlessons;
