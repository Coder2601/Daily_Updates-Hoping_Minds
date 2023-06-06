export const handleAddTask=(text,taskId)=>{
    const tempObj = {
        id:taskId,
        task:text
    }
    return {type:'ADD', todo:tempObj}
}