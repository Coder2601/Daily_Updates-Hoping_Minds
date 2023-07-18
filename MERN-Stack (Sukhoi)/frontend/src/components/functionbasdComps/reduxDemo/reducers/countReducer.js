export const countReducer=(state=10,action)=>{
    switch(action.type){
        case 'INC': return state+action.payload;
        case 'DEC': return state-action.payload;
        default: return state;
    }
}

//useDispatch -> use the dispatch keyword
//useSelector -> to access the states in the store (reducer)

//STORE - holds the updated value from reducer

//REDUCER - updates the state based on action-type passed from UI

//UI - subscribe to store and gets updated component