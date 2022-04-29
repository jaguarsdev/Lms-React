import { combineReducers } from "redux";

import coursesReducer from "./courses/coursesReducer"
// import coursedReducer from "./course-detail/coursedReducer"
import cartReduser from "../module/cart/redux/cartReducer"

const rootReducer = combineReducers({
    
    coursesState: coursesReducer,
    // coursedStates: coursedReducer,
    cartState: cartReduser,

})
export default rootReducer;