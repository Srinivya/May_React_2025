import React from 'react'

const IncrementButton = ({inc,dec}) => {
  return (
    <div>
     <button onClick={inc}>increase</button>
     <button onClick={dec}>decresse</button>
    </div>
  )
}

export default IncrementButton
