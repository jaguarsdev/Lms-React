import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Dtail from './dtail';
import { BASE_COURSES_API } from '../../../api/baseUrl';
// import { fetchCoursed } from '../../../../redux/course-detail/coursedAction'
const GetCoursed = () => {
    const params = useParams();
    const pageid = params.id;

    const [Data, setData] = useState({D: "", E: false});

    // const dispatch = useDispatch();
    // const coursedStates = useSelector(state => state.coursedStates)

    useEffect(() => {

        axios.get(`${BASE_COURSES_API}sfwd-courses/${pageid}`)
                .then(res => setData({...Data, D: res.data}))
                .catch(error => setData({...Data, E: true}))

    }, [pageid]);
    console.log(Data.D)
    return (
        <>
            {!Data.D ? 
            <h1>LOADING</h1> :
                Data.E ?
                <p>Somethin went wrong</p> :
                <Dtail props={Data.D} />
            
            }
        </>
    );
};
export default GetCoursed;