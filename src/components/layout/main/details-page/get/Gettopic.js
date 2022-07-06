import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../../../module/api/baseUrl';
import {authHeader} from '../../../../../module/authentication/auth-header'

import TopicData from '../topicData'
import TopicDataLoading from '../databoxLoading/topicDataLoading'

const Gettopic = ({lessonId, courseId}) => {

    const [Data, setData] = useState({D: "", E: false});
    const [Test, setTest] = useState();

    
    useEffect(() => {
        
        // Get Lessons Data
        const getLessonsID = ()=>{
            axios.get(`${BASE_COURSES_API}lessons/${lessonId}?populate=*`, {headers: authHeader() })
            .then(res =>setData({...Data, D: res.data.data.attributes.lessons })
            // .then(res =>setData({...Data, D: res.data.data.attributes.lessons||res.data[0].msg })
            //     {
            //     const DATA_OF_LESSON = res.data.data.attributes.lessons
            //     console.log(DATA_OF_LESSON)
            //     DATA_OF_LESSON.map(lesson=>console.log(lesson)) 
            // }
            )
            .catch(error => setData({...Data, E: true}))
            // mapLessonID()
        };
        
        const user = localStorage.getItem("user");
        // console.log(user)

        function if_login (){
            if(user){
                getLessonsID()
            }else{
                return setData({...Data, D: `دوره خریداری نشده` })
            }
        }
        if_login()

            
    }, []);
    console.log(Data)
    
    useEffect(()=>{
    
        const DATA_RETURN = async () =>{
            // if(Data.E === true){
            //     return setTest(<TopicData key={Math.random()} topicData={{LessonName : "لطفا برای دسترسی دوره را خریداری نمائید!"}} /> )
            // }
            if(Data.D.msg !== "you dont have prem"){
                return await setTest(Data.D.map(topic => <TopicData key={topic.id} topicData={topic} />))
            }
            if(Data.D.msg === "you dont have prem"){
                return setTest(<TopicData key={Math.random()} topicData={{LessonName : "لطفا برای دسترسی دوره را خریداری نمائید!"}} /> )
            }
        }

        const RETURN_ME_IF_USER = ()=>{
            const user = localStorage.getItem("user");
            if(user){
                return DATA_RETURN()
            }else{
                return setTest(<TopicData key={Math.random()} topicData={{LessonName : "لطفا برای دسترسی دوره را خریداری نمائید!"}} />)
            }
        }
        RETURN_ME_IF_USER()

    },[Data])




    // console.log(Test)

    
    
    
    return (
        <>
            {!Data.D ? 
            <TopicDataLoading /> :
                Data.E ?
                <p>لطفا یعد از اطمینان از اتصال شبکه با پشتیبانی تماس حاصل نمائید!</p> :
                Test
}
        </>
    );
};

export default Gettopic;

