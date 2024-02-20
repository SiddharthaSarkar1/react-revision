import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context";
import CompOne from "./CompOne";
import CompTwo from "./CompTwo";

function MyUseContextHook() {
  const {theme, setTheme} = useContext(GlobalContext);

  console.log(theme);

  return (
    <div>
      <h1>Use Context</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <CompOne />
        <CompTwo />
      </div>
    </div>
  );
}

export default MyUseContextHook;
