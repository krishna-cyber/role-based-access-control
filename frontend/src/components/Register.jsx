import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password, cPassword, email } = data;
    if (!(password === cPassword)) {
      toast.error("Passwords must be same", {
        position: "top-right",
        icon: "⚠️",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "",
        progressClassName: "bg-yellow-800",
        className: "bg-red-500 text-white",
      });
    }
  };
  return (
    <>
      <section className=' max-w-4xl mx-auto flex justify-center items-center flex-col'>
        <h1 className=' text-center font-bold text-3xl'>Register</h1>

        <form
          action=''
          className=' border-solid border-[2px] border-slate-400 w-[50%] rounded-xl mt-4'
          onSubmit={handleSubmit(onSubmit)}>
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
              <p className='text-red-500'>{errors.password.message}</p>
            )}

            <label className=' font-semibold' htmlFor=''>
              Confirm Password: <span className='text-red-500'>*</span>
            </label>
            <input
              className=' bg-slate-100 outline-none p-2 rounded-md'
              type='password'
              name='cPassword'
              id=''
              {...register("cPassword", {
                required: "Confirm password is required",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
            />
            {errors.cPassword && (
              <p className='text-red-500'>{errors.cPassword.message}</p>
            )}

            <button
              className=' bg-slate-400 text-white w-full p-2 rounded-xl bg-orange-600 hover:bg-orange-500'
              type='submit'>
              Register
            </button>
          </div>
        </form>
      </section>
      <ToastContainer limit={3} />
    </>
  );
};

export default Register;
