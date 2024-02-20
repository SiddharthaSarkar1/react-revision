import React from "react";
import MyUseContextHook from "./childComponents/MyUseContextHook";

const HookUseContext = () => {
  return (
    <>
      <div>
        <h1>UseContext Hook</h1>
        <MyUseContextHook />
      </div>
    </>
  );
};

export default HookUseContext;
