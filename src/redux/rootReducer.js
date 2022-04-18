import { combineReducers } from "redux";

import coursesReducer from "./courses/coursesReducer"
import coursedReducer from "./course-detail/coursedReducer"

const rootReducer = combineReducers({
    
    coursesState: coursesReducer,
    coursedStates: coursedReducer,

})
export default rootReducer;