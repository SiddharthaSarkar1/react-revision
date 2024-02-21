import React, { memo } from "react";

const CompChild = ({ text, onClick }) => {
  console.log("Child is rendered", text);
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default memo(CompChild);
