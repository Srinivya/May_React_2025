import React from 'react'
import Child from './Child';

const Parent = () => {

const Name="react";

  return (
    <div>
      <Child  user={Name} />
    </div>
  )
}

export default Parent
