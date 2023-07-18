const initialValue = ['apple','grapes','litchi']

export const fruitsReducer = (state=initialValue,action)=>{
    switch(action.type){
        case 'ADD': {
            return [...state,action.payload]
        };
        case 'REMOVE':{
            let x = state.slice(1,1)
            console.log(state,x);
            return [...state];
        }
        default: return state;
    }
}