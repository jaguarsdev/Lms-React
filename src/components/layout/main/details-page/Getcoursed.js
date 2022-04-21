import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../api/baseUrl';

import Dtail from './courseData';
import Rootheader from '../../header/Rootheader';
import Getlessons from './Getlessons';

const GetCoursed = () => {
    const params = useParams();
    const pageid = params.id;

    const [Data, setData] = useState({D: "", E: false});

    useEffect(() => {
        // Get Course Data
        axios.get(`${BASE_COURSES_API}sfwd-courses/${pageid}`)
                .then(res => setData({...Data, D: res.data}))
                .catch(error => setData({...Data, E: true}))

    }, [pageid]);
    // console.log(Data.D)
    return (
        <>  
            <Rootheader />

            {!Data.D ? 
            <h1>LOADING</h1> :
                Data.E ?
                <p>Somethin went wrong</p> :
                <Dtail props={Data.D} />
            }

            <Getlessons courseId={pageid} />
        </>
    );
};
export default GetCoursed;