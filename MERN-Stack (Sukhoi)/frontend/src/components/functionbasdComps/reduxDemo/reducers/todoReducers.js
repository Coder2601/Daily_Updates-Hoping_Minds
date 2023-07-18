const initialState = [];

export const todoReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'AddTask':{
            return [...state,action.payload]
        }
        case 'RemoveTask':{
            let id = action.payload;

            let newStete = state.splice(id,1);
            console.log(newStete, state);
            return [...state];
        }
        default: return state;
    }
}