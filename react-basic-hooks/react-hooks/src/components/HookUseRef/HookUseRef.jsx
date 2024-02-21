import React, { useEffect, useRef } from "react";

const HookUseRef = () => {
  const currentValue = useRef(0);
  const divReference = useRef();
  const inputReference = useRef();

  const handleClick = () => {
    currentValue.current++;
    console.log(currentValue.current);
  };

  //Accessing the html div at the time of render
  useEffect(() => {
    const getDivReference = divReference.current;
    console.log(getDivReference);
  }, []);

  //On pageload we are adding focus to the input
  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <div>
      <h1>UseRef Hook</h1>
      <button onClick={handleClick}>Click Me</button>

      <div ref={divReference} className="helloDiv">
        Hello World!
      </div>

      <div className="">
        <input
          ref={inputReference}
          type="text"
          placeholder="Enter some points..."
        />
      </div>
    </div>
  );
};

export default HookUseRef;
