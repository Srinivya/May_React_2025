import React from 'react'
import SubChild from './SubChild'

const Child = ({user}) => {
  return (
    <div>
      <h1>Child Component</h1>
      <SubChild user={user}/>
    </div>
  )
}

export default Child
