import axios from "axios";

import { BASE_AUTH } from '../api/baseUrl'

const API_URL =  `${BASE_AUTH}token`;
// const signup = (email, password) => {
//   return axios
//     .post(API_URL + "/signup", {
//       email,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };

const login = (email, password) => {
  return axios
    .post(API_URL , {
      "username": `${email}`,
      "password": `${password}`
  })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  // signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
