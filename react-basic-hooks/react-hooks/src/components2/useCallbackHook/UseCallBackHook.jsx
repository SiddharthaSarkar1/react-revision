import React, { useCallback, useState } from "react";
import GenRanNo from "./Comp/GenRanNo";

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const increaseCount = () => {
    console.log("Increase Count by 1");
    setCount((PrevCount) => PrevCount + 1);
  };

  //   const generateRandomNumber = () => {
  //     console.log("Generate Random Number.");
  //     const newNum = Math.floor(Math.random() * 100) + 1;
  //     setRandomNumber(newNum);
  //   };

  const generateRandomNumber = useCallback(() => {
    console.log("Generate Random Number.");
    const newNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNum);
  }, [randomNumber]);

  return (
    <div>
      <h1>Learn UseCallback Hook</h1>
      <h2>Count is: {count}</h2>
      <button onClick={increaseCount}>Increase Count</button>
      <hr />
      <GenRanNo
        randomNumber={randomNumber}
        generateRandomNumber={generateRandomNumber}
      />
    </div>
  );
};

export default UseCallBackHook;
