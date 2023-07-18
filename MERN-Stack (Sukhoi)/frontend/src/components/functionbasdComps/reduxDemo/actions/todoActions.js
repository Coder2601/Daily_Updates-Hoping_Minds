export const updateTodo=(task)=>{
    return {type:'AddTask',payload:task}
}

export const deleteTask=(id)=>{
    console.log(id);
    return {type:'RemoveTask', payload:id}
}


