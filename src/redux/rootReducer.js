import { combineReducers } from "redux";

import coursesReducer from "./courses/coursesReducer"

const rootReducer = combineReducers({
    
    coursesState: coursesReducer,

})
export default rootReducer;