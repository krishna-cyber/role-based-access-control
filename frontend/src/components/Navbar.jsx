import React from "react";
import Main from "./Main";

const Navbar = () => {
  return (
    <>
      <nav className=' max-w-4xl mx-auto flex justify-between py-6'>
        <h2 className=' font-medium text-xl'>RBAC</h2>
        <ul className='flex justify-around gap-5 text-orange-600 font-medium'>
          <li className=' cursor-pointer'>Register</li>
          <li className=' cursor-pointer'>Home</li>
          <li className=' cursor-pointer'>Login</li>
        </ul>
      </nav>
      <Main />
    </>
  );
};

export default Navbar;
