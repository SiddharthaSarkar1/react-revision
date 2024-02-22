import React from "react";

const Child = ({ myClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    let dt = "I am child data";
    myClick(dt);
  };

  return (
    <div>
      <button onClick={handleClick}>Click 1</button>
    </div>
  );
};

export default Child;
