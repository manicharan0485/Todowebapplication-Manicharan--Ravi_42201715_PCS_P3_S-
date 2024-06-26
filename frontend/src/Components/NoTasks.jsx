import React from 'react';
import NoTask from '/todoImgs.png';
import { Link } from 'react-router-dom';

function NoTasks() {
  return (
    <>
        <section className=' hidden sm:block bg-slate-700 h-screen p-10'>
            <div className="flex justify-evenly items-center">

                <div className='mt-4 w-[36rem] '>
                    <p className=' lg:block hidden parashadow text-center box-content text-md lg:text-xl text-purple-300 font-bold '>
                    "Welcome to Your Ultimate Productivity Companion! Stay organized and on track with our sleek todo web app. Effortlessly manage tasks, set reminders, and conquer your goals with ease. Experience productivity redefined. Try it now!"                    </p>
                    <p className=' block lg:hidden mt-16 parashadow1 text-center box-content text-md lg:text-xl text-purple-300 font-bold '>
                    "Stay organized and never miss a beat with our intuitive todo app. Effortlessly manage tasks and stay on track!"                    </p>
                    <h1 className=' text-center mt-8 md:text-2xl font-bold text-teal-400' >No task available. Add task!</h1>
                    <div className="text-center mt-5">
                        <Link to={'/addTask'} className='text-xl sm:text-2xl font-semibold bg-blue-500 hover:bg-green-600 text-gray-100 px-3 rounded-sm'>Add Task</Link>
                    </div>
                </div>

                <div className=' sm:w-300 '>
                    <div className=''>
                        <figure className=''>
                            <img src={NoTask} className=' dropShadow w-[32rem] mt-0 text-center ' title='No Task Added. Add Task Now!!' alt="No Task Available Image" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>

        <section className=' sm:hidden bg-slate-700 h-screen p-10'>
            <div className=' m-auto sm:w-300 '>
                <h1 className=' text-center box-content text-2xl text-purple-300 font-bold'>Add Your Daily Tasks Here!!</h1>
                <div className='text-center '>
                    <figure className='grid place-content-center'>
                        <img src={NoTask} className=' dropShadow w-[24rem] mt-0 text-center ' title='No Task Added. Add Task Now!!' alt="No Task Available Image" />
                        <figcaption className=' md:text-2xl font-bold text-teal-400' >No task available. Add task!</figcaption>
                    </figure>
                </div>
            </div>
            <div className='flex justify-center items-center mt-4 '>
                <Link to={'/addTask'} className='text-xl sm:text-2xl font-semibold bg-blue-400 hover:bg-green-500 px-3 rounded-sm text-white'>Add Task</Link>
                {/* <AddTask/> */}
            </div>
        </section>

    </>

  )
}

export default NoTasks
