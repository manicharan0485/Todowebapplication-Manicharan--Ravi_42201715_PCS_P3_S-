import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [toggle, setToggle] = useState(0);

  function ToggleHandler(){
    setToggle(!toggle);
  }

  return (
    <div className='navbar shadow-md p-4 bg-slate-600 ' >
         <div className='flex justify-between items-center '>
             <span className=" custom_text_shadow  text-green-500 shadow-xl font-bold text-4xl">TODO's</span>
              <span onClick={ToggleHandler} className='sm:hidden text-2xl shadow p-1 rounded bg-slate-700 text-zinc-400 hover:text-zinc-300'> <GiHamburgerMenu/> </span>

              <div className=' hidden sm:flex justify-center items-center gap-6' >
                <p className='links md:px-1 lg:px-3  '>
                <Link to={'/home'} className=" block hover:text-blue-300 duration-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                </p>
                <p className='links md:px-1 lg:px-3 '>
                  <Link to={'/addTask'} className=" block md:border-0 hover:text-blue-300 duration-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Task</Link>
                </p>
                <p className='links md:px-1 lg:px-3 '>
                <Link to={'/completedTask'} className="block py-2 px-3 hover:text-blue-300 duration-700 md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Completed Task</Link>
                </p>
                <p className='links md:px-1 lg:px-3 '>
                <Link to={'/remainingTask'} className="block py-2 px-3 hover:text-blue-300 duration-700 md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Remaining Task</Link>
                </p>
                <p className='links md:px-1 lg:px-3 '>
                    <Link to={'/login'} className="block py-2 px-3 font-bold hover:text-blue-300 duration-700 md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Logout </Link>
                </p>
            </div>
        </div>

        {/* <div className=' sm:hidden text-center mt-3' > */}
        <div className={`  sm:hidden text-center mt-3 ${toggle ? '' : 'hidden'}`} >
                <p className='mt-4 text-slate-100 ' >
                  <Link to={'/home'} className=" shadow px-3 py-1 hover:text-blue-300 duration-700 inline smallScreenLinks md:p-0" aria-current="page">Home</Link>
                </p>
                <p className='mt-4 text-slate-100 '>
                  <Link to={'/addTask'} className=" px-3 py-1 hover:text-blue-300 duration-700 shadow inline md:p-0 ">Add Task</Link>
                </p>
                <p className='mt-4 text-slate-100'>
                  <Link to={'/remainingTask'} className=" px-3 py-1 hover:text-blue-300 duration-700 shadow inline md:border-0  md:p-0">Remaining Task</Link>
                </p>
                <p className='mt-4 text-slate-100'>
                  <Link to={'/completedTask'} className="px-3 py-1 hover:text-blue-300 duration-700 shadow inline md:border-0 md:p-0">Completed Task</Link>
                </p>
                <p className='mt-4 text-slate-100'>
                  <Link to={'/login'} className=" px-3 py-1 hover:text-blue-300 duration-700 shadow inline md:border-0 md:p-0"> Logout </Link>
                </p>
            </div>

    </div>
  )
}





export default Nav
