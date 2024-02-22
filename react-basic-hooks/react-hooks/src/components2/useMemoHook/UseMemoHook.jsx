import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const increaseCount = () => {
    console.log("Increase Count by 1");
    setCount(count + 1);
  };

  const generateRandomNumber = () => {
    console.log("Generate Random Number.");
    const newNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNum);
  };

  //   const isCountTen = () => {
  //     console.log("Is count ten called.");
  //     if(count === 10){
  //         return "YES";
  //     }
  //     return "No";
  //   }

  const isCountTen = useMemo(() => {
    console.log("Is count ten called.");
    if (count === 10) {
      return "YES";
    }
    return "No";
  }, [count]);

  return (
    <div>
      <h1>Learn Use Memo</h1>
      <h2>Count is: {count}</h2>
      {/* <h3>Is Count 10? --- {isCountTen()}</h3> */}
      <h3>Is Count 10? --- {isCountTen}</h3>
      <button onClick={increaseCount}>Increase Count</button>
      <hr />
      {randomNumber && <h2>Random Number is: {randomNumber}</h2>}
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default UseMemoHook;
