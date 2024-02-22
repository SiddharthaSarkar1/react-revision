import React from 'react'
import Child from './Comp/Child';

const LiftingStateUp = () => {

    const getData = ( data) => {
        console.log("Data from child", data);
    }

  return (
    <div>
      <h1>Lifting State Up</h1>
      <Child myClick={getData} />
    </div>
  )
}

export default LiftingStateUp
