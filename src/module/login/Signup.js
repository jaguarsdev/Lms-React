import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"

import  {BASE} from '../api/baseUrl'
import AuthService from "../authentication/auth.service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const getWpnonce = () => {
  //   return axios
  //     .get(`${BASE}api/get_nonce/?controller=user&method=register`)
  //     .then((response) => {
  //       if (response.data) {
  //         // localStorage.setItem("user", JSON.stringify(response.data));
  //         console.log(response.data)
  //       }
  
  //       return response.data;
  //     });
  // }


  const handleSignup = async (values) => {
    console.log(values)
    try {
      await AuthService.signup(values.username, values.email, values.password).then(
        (response) => {
          // check for token and user already exists with 200
          //   console.log("Sign up successfully", response);
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  
  
  const initialValues = {
    username: '',
    email: '',
    password: '',
  }
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required('ضروری'),
    email: Yup.string().email('لطفا ایمیل معتبر وارد کنید').required('ضروری'),
    password: Yup.string().required('ضروری')
  })
  

  return (
    <Formik initialValues={initialValues} onSubmit={handleSignup} validationSchema={validationSchema}  >
      <Form className='flex flex-col gap-2 p-3'>
        <Field
          className="py-2 px-4 rounded-lg shadow-md bg-white 
          mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          control="input"
          id="inputme"
          name="username"
          label="username"
          placeholder="نام کاربری"
          type="text"
        />
        
        <Field
          className="py-2 px-4 rounded-lg shadow-md bg-white 
          mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          control="input"
          id="inputme"
          name="email"
          label="email"
          placeholder="ایمیل"
          type="email"
        />
        <Field
          className="py-2 px-4 rounded-lg shadow-md bg-white 
          mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          control="input"
          id="inputme"
          name="password"
          label="password"
          placeholder="رمز عبور"
          type="password"
        />


        <button type="submit" className='py-2 px-4 md:w-fit shadow-md bg-[#41c3d3] rounded-lg text-white font-bold' >ورود</button>
      </Form>
    </Formik>
  );
};

export default Signup;
