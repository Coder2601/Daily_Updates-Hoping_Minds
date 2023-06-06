import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDeleteTask } from '../actions/deleteTodo';

const List = () => {
  const taskList = useSelector(state=>state.tasks);
  const dispatch = useDispatch();

  return (
    <>
    <button onClick={()=>dispatch({type:'HIDE'})}>Add another Item</button>
    <table>
      <thead><td><h2>Todo List Tasks</h2></td></thead>
      <tbody>
        {taskList.map((item,index)=>{
          return(
            <tr key={index}>
              <td>{index}</td>
              <td>{item.task}</td>
              <td><button onClick={()=>dispatch(handleDeleteTask(index))}>x</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default List