import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../api/baseUrl';

import TopicData from './topicData'

const Gettopic = ({lessonId, courseId}) => {

    const [Data, setData] = useState({D: "", E: false});

    useEffect(() => {
        // Get Lessons Data
        axios.get(`${BASE_COURSES_API}sfwd-topic?lesson=${lessonId}&course=${+courseId}`, {
            headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdDEubG1zYXZhLmlyIiwiaWF0IjoxNjUwNTQ5NTY1LCJuYmYiOjE2NTA1NDk1NjUsImV4cCI6MTY1MTE1NDM2NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.DLxC6mtcRjQv_DuAh2NA2fEPk_v3m1tKYg1CYLS27iQ'}
        })
            .then(res => setData({...Data, D: res.data}))
            .catch(error => setData({...Data, E: true}))
            // setData({...Data, D: res.data})

    }, [courseId, lessonId]); 

    return (
        <>
            {!Data.D ? 
            <h1>LOADING</h1> :
                Data.E ?
                <p>Somethin went wrong</p> :
                Data.D.map(topic => <TopicData key={topic.id} topicData={topic} />)
            }
        </>
    );
};

export default Gettopic;

