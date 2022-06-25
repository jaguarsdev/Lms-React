import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../../../module/api/baseUrl';
import authHeader from '../../../../../module/authentication/auth-header'

import TopicData from '../topicData'
import TopicDataLoading from '../databoxLoading/topicDataLoading'

const Gettopic = ({lessonId, courseId}) => {

    const [Data, setData] = useState({D: "", E: false});
    // const [LessonID, setLessonID] = useState({D: "", E: false});

    
    useEffect(() => {

        // Get Lessons Data
        const getLessonsID = ()=>{
            axios.get(`${BASE_COURSES_API}lessons/${lessonId}?populate=*`, {headers: authHeader() })
            .then(res =>setData({...Data, D: res.data.data.attributes.lessons})
            //     {
            //     const DATA_OF_LESSON = res.data.data.attributes.lessons
            //     console.log(DATA_OF_LESSON)
            //     DATA_OF_LESSON.map(lesson=>console.log(lesson)) 
            // }
                )
            .catch(error => setData({...Data, E: true}))
            // mapLessonID()
        };
        getLessonsID()
        

            
        
    }, []);

    // console.log(Data)
    
    
    
    return (
        <>
            {!Data.D ? 
            <TopicDataLoading /> :
                Data.E ?
                <p>لطفا یعد از اطمینان از اتصال شبکه با پشتیبانی تماس حاصل نمائید!</p> :
                Data.D.map(topic => <TopicData key={topic.id} topicData={topic} />
                )
            }
        </>
    );
};

export default Gettopic;

