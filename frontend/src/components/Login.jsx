import React from "react";

import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className=' max-w-4xl mx-auto flex justify-center items-center flex-col'>
        <h1 className=' text-center font-bold text-3xl'>Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=''
          className=' border-solid border-[2px] border-slate-400 w-[50%] rounded-xl mt-4'>
          <div className='form-content p-8 flex flex-col gap-3'>
            <label htmlFor='' className=' font-semibold'>
              Email/Username: <span className='text-red-500'>*</span>
            </label>
            <input
              className=' bg-slate-100 outline-none p-2 rounded-md'
              type='text'
              name='email'
              id='username'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
            <label className=' font-semibold' htmlFor=''>
              Password: <span className='text-red-500'>*</span>
            </label>
            <input
              className=' bg-slate-100 outline-none p-2 rounded-md'
              type='password'
              name='password'
              id=''
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className=' text-red-400'>{errors.password.message}</p>
            )}
            <button
              className=' bg-slate-400 text-white w-full p-2 rounded-xl bg-orange-600 hover:bg-orange-500'
              type='submit'>
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
