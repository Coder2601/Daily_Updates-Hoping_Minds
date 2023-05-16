const x = 0
export const counterReducer=(state=x,action)=>{
    switch(action.type){
        case 'INC':
            return state+action.payload;
        case 'DEC':
            return state-action.payload;
        default:
            return state;
    }
}