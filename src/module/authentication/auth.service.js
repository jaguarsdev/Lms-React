import axios from "axios";

import { BASE_AUTH } from '../api/baseUrl'

const API_URL =  `${BASE_AUTH}token`;

const signup = () => {
  return axios
    .post("https://test1.lmsava.ir/api/get_nonce?controller=user&method=register")
    .then((response) => {
      if (response.data) {
        // localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data)
      }

      return response.data;
    });
};


// const signup = (username, email, password) => {
//   getWpnonce()
//   return axios
//     .post(API_URL + "/signup", {
//       username,
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

const login = (username, password) => {
  return axios
    .post(API_URL , {
      "username": `${username}`,
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
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
