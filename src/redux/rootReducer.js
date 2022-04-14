import { combineReducers } from "redux";

import coursesReducer from "./courses/coursesReducer";


// Dark & Night Button Reducer
// import darknightReducer from "./darknight(off)/darknightReducer"


const rootReducer = combineReducers({
    
    // Dark & Night Button Reducer
    // darknightState: darknightReducer,

    coursesState: coursesReducer,

})
export default rootReducer;