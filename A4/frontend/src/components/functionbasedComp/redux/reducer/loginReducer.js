const initialState = false;

export const loginReducer=(state = initialState,action)=>{
    switch(action.type){
        case 'IN':return true;
        case 'OUT':return false;
        default:return state
    }
}