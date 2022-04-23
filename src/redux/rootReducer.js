import { combineReducers } from "redux";

import coursesReducer from "./courses/coursesReducer"
import coursedReducer from "./course-detail/coursedReducer"
import cartReduser from "./cart/cartReducer"

const rootReducer = combineReducers({
    
    coursesState: coursesReducer,
    coursedStates: coursedReducer,
    cartState: cartReduser,

})
export default rootReducer;