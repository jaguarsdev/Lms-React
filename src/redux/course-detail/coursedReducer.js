const initialState = {
    loading: false,
    coursed: [],
    error: ""
}

const coursedReducer = (state=initialState , action) => {
    switch (action.type) {
        case "FETCH_COURSED_REQUEST":
            return { 
                ...state,
                loading: true
            }
        case "FETCH_COURSED_SUCCESS":
            return {
                loading: false,
                coursed: action.payload
            }
        default: return state
    }
}

export default coursedReducer;