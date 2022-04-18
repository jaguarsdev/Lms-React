// import axios from "axios"
// import { BASE_COURSES_API } from "../../components/api/baseUrl"


// const fetchCoursesRequest = () => {
//     return {
//         type: "FETCH_COURSED_REQUEST"
//     }
// }

// const fetchCoursesSuccess = data => {
//     return {
//         type: "FETCH_COURSED_SUCCESS",
//         payload: data
//     }
// }

//  const fetchCoursed = (pageid) => {
//     return(dispatch)=>{
//         dispatch(fetchCoursesRequest())
//         axios.get(`${BASE_COURSES_API}sfwd-courses/${pageid}`)
//                 .then(response =>{
//                     const data = response.data
//                     dispatch(fetchCoursesSuccess(data))
//                 })
//                 .catch(error => console.log(error.message))
//     }
// }
// export {fetchCoursed}