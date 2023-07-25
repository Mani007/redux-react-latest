// Old Redux Implementation
// import { createStore } from 'redux';
// // Reducer function should e synchronus function and we should not mutate the original state, means we need to create a copy of state and ten mutate it.  
// const reducerfn = (state = { counter: 10}, action) => {
//     if (action.type === "INC") {
//         return {counter: state.counter+1}      // This is mutated copy of the state variable
//     }
//     if (action.type === "DEC") {
//         return {counter: state.counter-1}      // This is mutated copy of the state variable counter
//     }
//     if (action.type === "ADDBY") {
//         return {counter: state.counter+ action.payload}      // This is mutated copy of the state variable counter
//     }
//    return state

// }

//  const store = createStore(reducerfn);
//  export default store
import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterslice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state, action) {
            state.counter ++
        },
        decrement(state, action) {
            state.counter --
        },
        addby(state, action) {
            state.counter +=action.payload
        },
    }
})

const store = configureStore({
    reducer: counterslice.reducer
})
export const  actions = counterslice.actions;

export default store