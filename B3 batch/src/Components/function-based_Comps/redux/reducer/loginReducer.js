export const loginReducer=(state=false,action)=>{
    switch(action.type){
        case 'IN':
            return state=true;
        case 'OUT':
            return state=false;
        default:
            return state
    }
}