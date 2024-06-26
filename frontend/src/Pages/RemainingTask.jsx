import { useState,useEffect } from 'react';
import React from 'react';
import Nav from './Nav';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
 

function RemainingTask() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
// ---------------------------fetching remaining tasks----------------------
  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:4000/tasks/remaining", {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        });
        if (response.ok) {
        const resData = await response.json();
        
        setData(resData); 
        console.log(resData);
        } else {
        console.error("Failed to fetch tasks:", response.status);
        }
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
    };

fetchData();
}, []);

// ----------------------------------delete task functionality on remaining page---------------------
const updateTasksAfterDeletion = (deletedTaskId) => {
  const updatedTasks = data.filter(task => task._id !== deletedTaskId);
  setData(updatedTasks);
}
const deleteTask = async (id)=>{

  try {
    const TaskRoute = await fetch("http://localhost:4000/tasks/delete", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id}),
    });
    const TaskData = await TaskRoute.json();
    console.log("Task data:", TaskData);

    if (TaskRoute.ok) {
      toast.success("Task deleted successfully");
      updateTasksAfterDeletion(id);
      navigate("#");
    } else {
      toast.error(TaskData.message);
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("An unexpected error occurred");
  }
} 

// ------------------------update remaining task status-----------------
const UpdateStatus = async(id)=>{
  try {
    const TaskRoute = await fetch("http://localhost:4000/tasks/status", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id}),
    });
    const TaskData = await TaskRoute.json();
    console.log("Task data:", TaskData);

    if (TaskRoute.ok) {
      toast.success("Task Completed!!");
      updateTasksAfterDeletion(id);
      navigate("#");
    } else {
      toast.error(TaskData.message);
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("An unexpected error occurred");
  }
}

  return (
    <>
        <Nav/>
      {
          <div className='sm:mt-16 mt-10 bg-slate-700 h-screen pt-12 px-2' >
            <div className=" w-300 sm:w-[700px] card ">
              <div className=' font-bold text-slate-400 text-xl sm:text-3xl ' style={{borderBottom:'3px solid gray', paddingBottom:'0.7rem', marginBottom:'rem'}}>
                  <h2>Remaining Tasks({data.length})</h2>
              </div>
              
              {
                data.map( (tasks)=>{
                  return(
                    <div key={tasks._id}  className= ' bg-slate-600 p-2 rounded' style={{borderBottom:'1px solid gray', display:'flex', justifyContent:'space-between', alignItems:'center'}} >
                      <div className="">
                        <p style={{padding:'0.2rem 0rem'}} className='text-slate-300 font-semibold ' > {tasks.taskName} </p>
                        <p className='text-xs text-green-500' style={{padding:'0.2rem 0rem', marginTop:'-0.4rem'}} > Last Date: {new Date(tasks.reminderTime).toLocaleDateString()}   {new Date(tasks.reminderTime).toLocaleTimeString()}  </p>
                      </div>
                      <div className="flex justify-center items-center gap-3 " style={{margin:'-1rem 0rem'}} >
                        <button onClick={ ()=>{ UpdateStatus(tasks._id) } } style={{border:'none', boxShadow:'1px 1px 4px rgba(39, 36, 36, 0.844)' }} > <span className='text-blue-400 px-1  hover:text-green-400 text-sm  ' > Done </span> </button>
                        {/* <button style={{border:'none',backgroundColor:'white'}} > <span > <FaEdit className=' text-blue-400 hover:text-red-700' /> </span> </button> */}
                        <button onClick={ ()=>{ deleteTask(tasks._id) } }  style={{border:'none', boxShadow:'1px 1px 4px rgba(39, 36, 36, 0.844)' }} > <MdDelete className='deleteIcon' /> </button>
                      </div>
                  </div>
                  )
                } )
              }

            </div>
          </div>

      }

    </>
  )
}

export default RemainingTask
