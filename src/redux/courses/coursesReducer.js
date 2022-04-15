const initialState = {
    loading: false,
    courses: [],
    error: ""
}

const coursesReducer = (state=initialState , action) => {
    switch (action.type) {
        case "FETCH_COURSES_REQUEST":
            return { 
                ...state,
                loading: true
            }
        case "FETCH_COURSES_SUCCESS":
            return {
                loading: false,
                courses: action.payload
            }
        case "FETCH_COURSES_FAILURE":
            return {
                loading: false,
                courses: action.payload
            }
        default: return state
    }
}

export default coursesReducer;