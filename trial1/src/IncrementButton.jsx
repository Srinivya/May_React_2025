import React from 'react'

const IncrementButton = ({onclick,ofclick}) => {
  return (
    <div>
      <button onClick={onclick}>Increment</button>
       <button onClick={ofclick}>Decrement</button>
    </div>
  )
}

export default IncrementButton
