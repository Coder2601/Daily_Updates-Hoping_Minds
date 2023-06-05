const initialState = [
    {
        id:0,
        task:'List of tasks'
    }
]

export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            return [...state]
        case 'REMOVE': 
            return [...state]
        default: return state;
    }
}