import axios from "axios";

import { BASE_AUTH, BASE } from '../api/baseUrl'

const API_URL =  `${BASE_AUTH}token`;


const signup = async (username, email, password) => {
  return await axios
    .post(`${BASE}?rest_route=/simple-jwt-login/v1/users&AUTH_KEY=abs456`, {
      "username": `${username}`,
      "email": `${email}`,
      "password": `${password}`,
  })
    .then((response) => {
      if (response) {
        // console.log(`🚀 ~ response`, response)
        // localStorage.setItem("user", JSON.stringify(response.data));
        
      }

      return response.data;
    });
};

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
