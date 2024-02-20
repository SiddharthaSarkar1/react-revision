import React, { useContext } from "react";
import { GlobalContext } from "../../../context";

const CompOne = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div>
      <h2>Register</h2>
      <button
        style={
          theme === "dark"
            ? { backgroundColor: "black", color: "wheat" }
            : { backgroundColor: "yellow", color: "crimson" }
        }
      >
        Sign up
      </button>
    </div>
  );
};

export default CompOne;
