import React, { useEffect, useState } from 'react'
import { deleteTask, updateTodo } from './actions/todoActions'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    useEffect(()=>{

    })
    const dispatch = useDispatch();
    const listItems = useSelector(state=>state.todos);

    const [task,setTask] = useState({
        taskValue:'',
        time:''
    })
    const handleInputVal=(e)=>{
        setTask({...task,[e.target.id]:e.target.value})
    }

    const handleAddTask=()=>{
        console.log(task);
        dispatch(updateTodo(task))
    }

  return (
    <div>
        <h2>Todo</h2>
        <br />
        <input required type="text" id="taskValue" placeholder='Enter any task' onChange={handleInputVal} />
        <br />
        <input required type="time" id='time' placeholder='Enter the timings' onChange={handleInputVal} />
        <br />
        <button onClick={handleAddTask} >Add Task</button>

        <br /><br />
        <ul>
            <p>Display List of tasks</p>
            
            {
                listItems.map((item,index)=>{
                    return(
                        <>
                            <li key={index}>{item.taskValue} ------   {item.time}</li>
                            <button onClick={()=>dispatch(deleteTask(index))}>Remove</button>
                        </>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Todo