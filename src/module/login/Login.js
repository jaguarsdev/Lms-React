import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"

import AuthService from "../authentication/auth.service";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = async (values) => {

    try {
      await AuthService.login(values.username, values.password).then(
        () => {
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
      password: '',
    }

    const validationSchema = Yup.object({
      username: Yup.string().required('Req'),
      password: Yup.string().required('Req')
    })


  return (
    <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}  >

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
          placeholder="نام کاربری یا ایمیل"
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

export default Login;
