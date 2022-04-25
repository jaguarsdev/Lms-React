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
        axios.get(`${BASE_COURSES_API}sfwd-courses`)
            .then(response => {
                const courses = response.data;
                dispatch(fetchCoursesSuccess(courses))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCoursesFailure(errorMsg))
            })
    }
}