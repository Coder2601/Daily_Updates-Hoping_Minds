import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddTask, hanldeInputTask } from '../actions/addTodo';
import { handleShowList } from '../actions/showlist';
import { handleDeleteTask } from '../actions/deleteTodo';

const Todo = () => {
    const dispatch = useDispatch();
    const taskList = useSelector(state => state);


    return (
        <>
            {console.log(taskList)}
            <button onClick={() => dispatch(handleShowList())}>Show List</button>
            <br /><br />
            <div className='section1'>
                <input type="text" placeholder='Add Task here' onChange={(event) => dispatch(hanldeInputTask(event))} />

                &nbsp;&nbsp;

                <button onClick={() => dispatch(handleAddTask())}>+</button>
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
                                <button onClick={handleDeleteTask(index)}>x</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Todo