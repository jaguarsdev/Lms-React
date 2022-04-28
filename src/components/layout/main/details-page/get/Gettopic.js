import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../../../module/api/baseUrl';
import authHeader from '../../../../../module/authentication/auth-header'

import TopicData from '../topicData'
import TopicDataLoading from '../databoxLoading/topicDataLoading'

const Gettopic = ({lessonId, courseId}) => {

    const [Data, setData] = useState({D: "", E: false});

    useEffect(() => {
        // Get Lessons Data
        axios.get(`${BASE_COURSES_API}sfwd-topic?lesson=${lessonId}&course=${+courseId}`, {headers: authHeader() })
            .then(res => setData({...Data, D: res.data}))
            .catch(error => setData({...Data, E: true}))
            // setData({...Data, D: res.data})

    }, [courseId, lessonId]); 

    return (
        <>
            {!Data.D ? 
            <TopicDataLoading /> :
                Data.E ?
                <p>لطفا یعد از اطمینان از اتصال شبکه با پشتیبانی تماس حاصل نمائید!</p> :
                Data.D.map(topic => <TopicData key={topic.id} topicData={topic} />)
            }
        </>
    );
};

export default Gettopic;

