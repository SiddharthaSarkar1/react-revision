import React, { useReducer } from "react";

const initialState = {
  count: 0,
  showToggleFlag: true,
};

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };

    case "substract":
      return {
        ...state,
        count: state.count - 1,
      };

    case "reset":
      return {
        ...state,
        count: 0,
      };

    case "showcount":
      return {
        ...state,
        showToggleFlag: !state.showToggleFlag
      };

    default:
      return state;
  }
}

const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <h1>UseReducer Hook</h1>
      {
        state.showToggleFlag && <h2>Count is {state.count}</h2>
      }
      <div
        className=""
        style={{ display: "flex", gap: "10px", justifyContent: "center" }}
      >
        <button onClick={() => dispatch({ type: "add" })}>
          Increase Count
        </button>
        <button onClick={() => dispatch({ type: "substract" })}>
          Decrease Count
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset Count</button>
        <button onClick={() => dispatch({ type: "showcount" })}>Show Count</button>
      </div>
    </div>
  );
};

export default HookUseReducer;
