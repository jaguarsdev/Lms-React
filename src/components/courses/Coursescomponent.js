import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCourses } from '../../redux/courses/coursesAction';


const Coursescomponent = () => {
    
    const dispatch = useDispatch;
    const coursesState = useSelector(state => state.coursesState)
    
    useEffect(() => {
        dispatch(fetchCourses());
    }, []);

    return (
        <div>
            {/* {
                coursesState.loading ?
                <h2>loading</h2> :
                coursesState.error ?
                    <p>problem</p> :
                    coursesState.courses.map(course => console.log(course))

            } */}
        </div>
    );
};

export default Coursescomponent;