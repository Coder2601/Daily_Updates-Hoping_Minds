import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddTask } from '../actions/addTodo';
import { handleShowList } from '../actions/showlist';
import { handleDeleteTask } from '../actions/deleteTodo';

const Todo = () => {
    const dispatch = useDispatch();
    const taskList = useSelector(state => state.tasks);
    const [text, setText] = useState();

    const [id, setId] = useState(taskList.length - 1);

    const hanldeInputTask = (event) => {
        setText(event.target.value);
        setId(taskList.length);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById('taskText').value = '';
        console.log(taskList)
        console.log(id)
    }

    return (
        <>
            <button onClick={() => dispatch({type:'SHOW'})}>Show List</button>
            <br /><br />
            <div className='section1'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Add Task here' onChange={(event) => hanldeInputTask(event)} id='taskText' />

                    &nbsp;&nbsp;

                    <button onClick={() => dispatch(handleAddTask(text, id))}>+</button>
                </form>
            </div>
            <br /><br />
            <div className='section2'>
                <h4>Todo List</h4>
                <ul>
                    {taskList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.task}
                                &nbsp; &nbsp;
                                <button onClick={()=>dispatch(handleDeleteTask(index))}>x</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Todo