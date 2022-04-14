import axios from "axios"

import { BADE_LEARN_URL } from '../../components/Api/globalApi'


const fetchProductRequest = () => {
    return{ type: "Fetch_PRODUCT_REQUEST"}
}

const fetchProductSuccsess = courses => {
    return{ type: "Fetch_PRODUCT_SUCCESS", payload: courses}
}

const fetchProductFailure = error => {
    return{ type: "Fetch_PRODUCT_FAILURE", payload: error}
}

export const fetchCourses = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest());
        axios.get(`${BADE_LEARN_URL}sfwd-courses`)
            .then(response => {
                const courses = response.data;
                dispatch(fetchProductSuccsess())
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductFailure(errorMsg))
            })
    }
}