import React, { useState } from 'react';
import Nav from './Nav';
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function AddTask() {
  const [inputData, setInputData] = useState( {taskName: "", taskDesc: "", reminderTime: "" } )
  
  function getTaskInput(e){
    setInputData( (preValues)=>{
      return { ...preValues, [e.target.name]: e.target.value }
    } )
  }
  
  const navigate = useNavigate();

  const AddTaskHandler = async (e)=>{
    e.preventDefault();

    if (inputData.taskName == "" || inputData.taskDesc == "" || inputData.reminderTime == ""  ) {
      toast.error("Please fill all input fields");
    } else {
      try {
        const TaskRoute = await fetch("http://localhost:4000/tasks", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(inputData),
        });

        const TaskData = await TaskRoute.json();
        console.log("Task data:", TaskData);

        if (TaskRoute.ok) {
          toast.success("Task added successfully");
          setInputData({ taskName: "", taskDesc: "", reminderTime: "" });
          navigate("/home");
        } else {
          toast.error(TaskData.message);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An unexpected error occurred");
      }
    }
  }
  
  return (
    <>
        <Nav/>
        <div className='mt-16 sm:mt-16 bg-slate-700 h-screen py-8'>
          <h1 className=' mb-[-1.6rem] sm:mb-[-1rem] text-center box-content mt-0 text-xl sm:text-2xl text-purple-300 font-bold'><br /> <span className=''>Add your daily Tasks</span> </h1>
          <div className="CreateNote w-[300px] sm:w-[500px] ">
              <h1 className="text-center text-xl sm:text-2xl font-semibold underline text-gray-500">
                Add Task
              </h1>
              <form action="" className="form ">
                <input
                  className="title w-full shadow p-2 mt-4 bg-slate-300 rounded text-black "
                  name="taskName"
                  onChange={getTaskInput}
                  type="text"
                  placeholder="Task Title"
                  autoComplete="off"
                />
                <textarea
                  name="taskDesc"
                  onChange={getTaskInput}
                  rows="6"
                  className=" title NoteText p-2 shadow bg-slate-300 rounded text-black"
                  placeholder="Add Task Note"
                />
                <input
                  className="title text-sm w-full shadow p-2 mt-4 bg-slate-300 rounded text-black"
                  name="reminderTime"
                  onChange={getTaskInput}
                  type="datetime-local"
                  placeholder="Date"
                  autoComplete="off"
                />
                {/* <input className='title text-sm w-full shadow p-2 mt-4 ' name='currentTime' onChange={getTaskData}  type="time" placeholder='time' autoComplete='off' /> */}
                <div className="text-center my-4 h-5">
                  <button
                    onClick={AddTaskHandler}
                    className=" AddBtn font-semibold  text-center bg-blue-400 hover:bg-green-500 hover:text-white text-slate-700 px-2 rounded text-lg sm:text-xl"
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
            <p className='inline mx-2 mt-5 text-blue-400 hover:text-red-300 duration-500 text-left'>
              <Link to={'/home'}>Go Back</Link>
            </p>
        </div>
    </>
  )
}

export default AddTask;
