import React, { useEffect, useLayoutEffect, useRef } from "react";

const HookUseLayoutEffect = () => {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.log("useEffect is called.");
    inputRef.current.value = "John Doe";
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect is called.");

    const getDivRefCurrent = divRef.current;

    getDivRefCurrent.style.opacity = 0;

    setTimeout(() => {
      getDivRefCurrent.style.opacity = 1;
      getDivRefCurrent.style.color = "crimson";
      getDivRefCurrent.style.fontWeight = "bold";
    }, 3000);
  }, []);

  console.log(inputRef);

  return (
    <div>
      <h1>Use Layout Effect</h1>

      <div ref={divRef}>Hello World!</div>

      <input ref={inputRef} type="text" value={"Siddhartha"} />
    </div>
  );
};

export default HookUseLayoutEffect;
