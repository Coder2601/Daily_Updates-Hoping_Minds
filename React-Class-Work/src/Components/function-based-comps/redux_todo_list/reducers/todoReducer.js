const initialState = []

export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            return [...state, action.todo]
        case 'REMOVE': {
            state.splice(action.payload,1);
            console.log(state);
            return [...state];
        }
        default: return state;
    }
}