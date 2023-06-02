export const counterReducer=(state=0, action)=>{
    switch(action.type){
        case 'INC': return state+1;
        case 'DEC': return state-1;
        case 'MUL12': return state*12;
        case 'MUL30': return state*30;
        default: return state;
    }
}