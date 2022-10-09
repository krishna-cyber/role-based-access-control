import React from "react";

const Main = () => {
  return (
    <>
      <main className=' max-w-4xl mx-auto mt-8 flex p-5 flex-col justify-center items-center'>
        <h1 className=' font-bold text-center text-3xl underline'>
          Role Based Access Control
        </h1>
        <section className=' w-[70%] mt-4 rounded-2xl border-solid border-[3px] border-slate-500'>
          <ol
            className=' p-12 flex flex-col gap-4 flex w-full list-decimal text-lg'
            type='1'>
            <li>
              <span className='font-bold'>Express js</span>
            </li>
            <li>
              <span className=' font-bold'>EJS</span> template engine
            </li>
            <li>
              Styling- custom Css,<span>TAILWIND</span>
            </li>
            <li>
              <span className='font-bold'>Passport.js</span> local
              authentication(email,password)
            </li>
            <li>
              Roles{" "}
              <span className='font-bold'>
                (admin,moderator and user routes)
              </span>
            </li>
            <li>
              <span className='font-bold'>Mongoose</span>(ORM for Mongodb)
            </li>
            <li>How to use Expire Session</li>
            <li>
              Use session to persist login after server reboot (using Mongo
              store)
            </li>
            <li>
              Redirect to <span className='font-bold'>same page</span> after
              login
            </li>
            <li>
              Validating <span className='font-bold'>user input</span> server
              side
            </li>
            <li>Flash Messages</li>
            <li>
              Handling <span className='font-bold'>Http error</span>(ex.404)
            </li>
            <li>Something are always extra 🪄💥</li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default Main;
