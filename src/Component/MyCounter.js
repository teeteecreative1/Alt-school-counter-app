import React from "react";
import { useReducer } from "react";
//initial state will be set to 0

const initialState = { counter: 0 };
const reduceCount = (state, action) => {
  //addition
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  //subtraction
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  //goes back to default value
  if (action.type === "reset") {
    return { counter: 0 };
  }
  if (action.type === "setValue") {
    return { counter: action.payload };
  }
  return state;
};

//using our custom hook useReducer to dispatch the actions
function MyCounter() {
  const [state, dispatch] = useReducer(reduceCount, initialState);
  return (
    <section className="container">
      <h1>A Counter Application</h1>
      <div className="main">
        <h2 className="align">Count:</h2>
        <h2 className="align">{state.counter}</h2>
        <button className="but" onClick={() => dispatch({ type: "increment" })}>
          Increase
        </button>
        <button className="but" onClick={() => dispatch({ type: "decrement" })}>
          Decrease
        </button>
        <button className="but" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
        <button
          className="but"
          onClick={(value) => dispatch({ type: "setValue", payload: value })}
        >
          Set value
        </button>
      </div>
    </section>
  );
}

export default MyCounter;
