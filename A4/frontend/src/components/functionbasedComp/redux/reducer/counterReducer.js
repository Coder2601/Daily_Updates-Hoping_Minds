export const counterReducer = (state = 0,action)=>{
    switch(action.type){
        case 'INC':return state+1;
        case 'DEC':return state-1;
        case 'MUL':return state*action.payload;
        case 'DIV':return state/action.payload;
        default:return state;
    }
}