import { useState } from "react";

const initialState = false;

const HookUseState = () => {
  const [toggleText, setToggleText] = useState(initialState);

  console.log(toggleText);

  return (
    <div>
      <h1>UseState Hook</h1>
      <div className="">
        {!toggleText ? (
          <p>Hi there</p>
        ) : (
          <p>You have clicked on the toggle text buton.</p>
        )}
        <button onClick={() => setToggleText(!toggleText)}>Toggle Text</button>
      </div>
    </div>
  );
};

export default HookUseState;
