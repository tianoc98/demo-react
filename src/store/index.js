import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// const {createStore} = require('redux')
const initstate = {
    counter: 0
}

//reducer

const counter = (state = initstate,action) => {
    console.log(action)
    switch(action.type){
        case 'SET_COUNTER':
            return {counter: action.data}
        case 'INCREMENT':
            return { counter: state.counter+1}
        case 'DECREMENT':
            return { counter: state.counter-1}
        default:
            return state
    }
}

const enhancer = applyMiddleware(thunk)
const store = createStore(counter,enhancer)


export default store;