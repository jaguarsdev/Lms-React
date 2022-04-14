const initialState = {
    loading: false,
    courses: [],
    error: ""
}

const coursesReducer = (state:initialState , action) => {
    switch (action.type) {
        case "Fetch_PRODUCT_REQUEST":
            return { 
                ...state,
                loading: true
            }
        case "Fetch_PRODUCT_SUCCESS":
            return {
                loading: false,
                courses: action.payload
            }
        case "Fetch_PRODUCT_FAILURE":
            return {
                loading: false,
                courses: action.payload
            }
        default: return state
    }
}

export default coursesReducer;