const initialState = { 
    className : ""
}

const darknightReducer = (state=initialState, action) => {
    switch ( action.type ) {
        case "DARK": 
            return { 
                className : "dark"
            }
        // case "LIGHT": 
        //     return { 
        //         className : ""
        //     }
        default:
            return state;
    }
}

export default darknightReducer;