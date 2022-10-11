import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className=' max-w-4xl mx-auto flex justify-center items-center flex-col'>
        <h1 className=' text-center font-bold text-3xl'>Login</h1>
        <form
          onSubmit={handleSubmit}
          action=''
          className=' border-solid border-[2px] border-slate-400 w-[50%] rounded-xl mt-4'>
          <div className='form-content p-8 flex flex-col gap-3'>
            <label htmlFor='' className=' font-semibold'>
              Email/Username: <span className='text-red-500'>*</span>
            </label>
            <input
              className=' bg-slate-100 outline-none p-2 rounded-md'
              type='text'
              name=''
              id='username'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className=' font-semibold' htmlFor=''>
              Password: <span className='text-red-500'>*</span>
            </label>
            <input
              className=' bg-slate-100 outline-none p-2 rounded-md'
              type='password'
              name=''
              id=''
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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
