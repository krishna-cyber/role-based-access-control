import React from "react";
import Main from "./Main";
import Page404 from "./Page404";
import Register from "./Register";
import Login from "./Login";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=' max-w-4xl mx-auto flex justify-between py-6'>
        <h2 className=' font-medium text-xl'>RBAC</h2>
        <ul className='flex justify-around gap-5 text-orange-600 font-medium'>
          <li className=' cursor-pointer'>
            <Link to='/'>Home</Link>
          </li>
          <li className=' cursor-pointer'>
            <Link to='/register'>Register</Link>
          </li>
          <li className=' cursor-pointer'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Navbar;
