import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [match, setMatch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Error! 😓 Passwords must be  same", {
        icon: "⚠️",
        className: " bg-red-400 text-white font-medium text-lg",
      });
    } else {
      toast.success("Congratulation 🎊 Registration successfully!!", {
        icon: "✅",
        className: " bg-green-400 text-white font-medium text-lg",
      });
    }
    console.log(e.target.value);
  };
  return (
    <>
      <section className=' max-w-4xl mx-auto flex justify-center items-center flex-col'>
        <h1 className=' text-center font-bold text-3xl'>Register</h1>
        <Toaster />
        <form
          action=''
          className=' border-solid border-[2px] border-slate-400 w-[50%] rounded-xl mt-4'
          onSubmit={handleSubmit}>
          <div className='form-content p-8 flex flex-col gap-3'>
            <label htmlFor='' className=' font-semibold'>
              Email/Username: <span className='text-red-500'>*</span>
            </label>
            <input
              className=' bg-slate-100 outline-none p-2 rounded-md'
              type='text'
              name='email'
              id='username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className=' font-semibold' htmlFor=''>
              Password: <span className='text-red-500'>*</span>
            </label>
            <input
              className=' bg-slate-100 outline-none p-2 rounded-md'
              type='password'
              name='password'
              id=''
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className=' font-semibold' htmlFor=''>
              Confirm Password: <span className='text-red-500'>*</span>
            </label>
            <input
              className=' bg-slate-100 outline-none p-2 rounded-md'
              type='password'
              name='cPassword'
              id=''
              value={cPassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <button
              className=' bg-slate-400 text-white w-full p-2 rounded-xl bg-orange-600 hover:bg-orange-500'
              type='submit'>
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
