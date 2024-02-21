import React, { useCallback, useState } from "react";
import CompChild from "./childComp/CompChild";

const HookUseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const memorizeSetCountOneFunction = useCallback(
    () => setCount1(count1 + 1),
    [count1]
  );
  const memorizeSetCountTwoFunction = useCallback(
    () => setCount2(count2 + 1),
    [count2]
  );

  return (
    <div>
      <h1>UseCallback Hook</h1>
      <div className="">
        <div>
          {count1} {count2}
        </div>
        <CompChild text={"Botton One"} onClick={memorizeSetCountOneFunction} />
        <CompChild text={"Botton Two"} onClick={memorizeSetCountTwoFunction} />
      </div>
    </div>
  );
};

export default HookUseCallback;
