import React, { useContext } from "react";
import { GlobalContext } from "../../../context";

const CompTwo = () => {

    const { theme } = useContext(GlobalContext);

  return (
    <div>
      <h2>Login</h2>
      <button
      style={
        theme === "dark"
          ? { backgroundColor: "green", color: "white" }
          : { backgroundColor: "yellow", color: "red" }
      }
      >Login</button>
    </div>
  )
}

export default CompTwo
