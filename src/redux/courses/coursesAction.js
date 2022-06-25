import axios from "axios"
import { BASE_COURSES_API } from "../../module/api/baseUrl"


const fetchCoursesRequest = () => {
    return {
        type: "FETCH_COURSES_REQUEST"
    }
}

const fetchCoursesSuccess = courses => {
    return {
        type: "FETCH_COURSES_SUCCESS",
        payload: courses
    }
}

const fetchCoursesFailure = error => {
    return {
        type: "FETCH_COURSES_FAILURE",
        payload: error
    }
}
export const fetchCourses = () => {
    return (dispatch) => {
        dispatch(fetchCoursesRequest());
        
        var config = {
        method: 'get',
        url: `${BASE_COURSES_API}courses?populate=*`,
        headers: { }
        };

        axios(config)
        .then(function (response) {
            const courses = response.data;
            dispatch(fetchCoursesSuccess(courses))
        })
        .catch(function (error) {
            const errorMsg = error.message
            dispatch(fetchCoursesFailure(errorMsg))
        });
    }
}