import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function AllTasks(props) {
    const tasks = props.data;

    const navigate = useNavigate();

  return (
    <>
    
    <div className='bg-slate-700 h-full pt-4'>
        <h1 className='  mb-8 text-center box-content mt-6 text-xl sm:text-2xl text-purple-300 font-bold'>"Here are all your added tasks. Complete them as soon as possible</h1>
        <div className='text-center sm:text-left '>
            <span className=' p-3 text-stone-400  text-[15px] sm:text-xl font-bold shadow'>Your All Tasks({tasks.length})</span>
        </div>
        <div className='p-4 mt-12'>
            <div className='flex justify-center flex-wrap gap-6'>
                {
                    tasks.map( (tasks)=>{
                        return (
                            <div key={tasks._id} className={`w-[300px] sm:w-[340px] task_Shadow p-3 ${tasks.status === 'completed' ? 'hidden' : ''}`} >
                            {/* <h1> {tasks.status} </h1> */}
                            <p className="text-green-500 text-sm sm:text-lg">
                                Last date: {new Date(tasks.reminderTime).toLocaleDateString()} :
                                {new Date(tasks.reminderTime).toLocaleTimeString()}
                            </p>
                            <h2 className="text-2xl font-bold text-neutral-400 mb-2"> {tasks.taskName} </h2>
                            <p className="text-slate-400 mb-2">{tasks.taskDesc}</p>
                            <div className="flex justify-around items-center">
                            <div className="flex items-center mb-4 hover:text-green-700">
                                <button onClick={ ()=>{ props.update(tasks._id) } } type="checkbox" value="" className="checkbox mt-4 w-4 h-4 text-blue-500 hover:text-green-400 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"> Done </button>
                            </div>
                            <button onClick={ ()=> { navigate(`/tasks/edit/${tasks._id}`) } } > <FaEdit className="text-xl text-blue-500 hover:text-green-400 duration-500" /> </button>
                            <button onClick={ ()=>{ props.delete(tasks._id) } } > <MdOutlineDelete className="text-xl text-blue-500 hover:text-red-400 duration-500 " /> </button>
                    </div>
                </div>
                        )
                    } )
                }

        </div>
        <div className="text-center mt-4 relative h-5">
                  <button
                    onClick={ ()=>{navigate('/addTask')}  } 
                    className=" AddBtn font-semibold fixed bottom-4 sm:bottom-12 right-2 sm:right-12 end-2 bg-blue-400 hover:bg-green-500 hover:text-white text-slate-700 px-2 rounded text-lg sm:text-xl"
                  >
                    NEW TASK
                  </button>
                </div>
        </div>

    </div>
  </>
  )
}

export default AllTasks
