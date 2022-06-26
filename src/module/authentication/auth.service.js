import axios from "axios";

import { BASE_AUTH, BASE } from '../api/baseUrl'

const API_URL =  `${BASE_AUTH}auth/local`;


const signup = async (username, email, password, phoneNumber) => {
  return await axios
    .post(`${BASE}auth/local/register`, {
      "username": `${username}`,
      "email": `${email}`,
      "password": `${password}`,
      "phoneNumber": `${phoneNumber}`,
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
      "identifier": `${username}`,
      "password": `${password}`
  })
    .then((response) => {
      if (response.data.jwt) {
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
