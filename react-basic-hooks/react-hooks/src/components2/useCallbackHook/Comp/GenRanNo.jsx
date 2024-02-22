import React, { memo } from "react";

const GenRanNo = memo(({ randomNumber, generateRandomNumber }) => {
  console.log("Generate Random Number COmponent Render.");

  return (
    <div>
      {randomNumber && <h2>Random Number is: {randomNumber}</h2>}
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
});

export default GenRanNo;
