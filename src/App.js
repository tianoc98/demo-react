
import * as React from "react";
import { Outlet } from "react-router";
import {useDispatch,useSelector} from "react-redux"
import './App.css';
import { decrement, increment, setCounter } from "./store/action";

function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  // const increment = () => {
  //   dispatch({
  //     type: 'INCREMENT'
  //   })
  // }

  // const decrement = () => {
  //   dispatch({
  //     type: 'DECREMENT'
  //   })
  // }

  // const customeValue = (addvalue) => {
  //   dispatch({
  //     type: 'SET_COUNTER',
  //     data: state.counter + addvalue
  //   })
  // }

  const incrementValue = () =>dispatch(increment())
  const decrementvalue = () =>dispatch(decrement())
  const setCounters = (value) =>dispatch(setCounter(state.counter+value))
  return (
      <div className="App">
        <Outlet></Outlet>
        <h3>{state.counter}</h3>
        <button onClick={incrementValue}>add </button>
        <button onClick={decrementvalue}>minus </button>
        <button onClick={()=>setCounters(10)}>add by 10 </button>
    </div>

  );
}

export default App;
