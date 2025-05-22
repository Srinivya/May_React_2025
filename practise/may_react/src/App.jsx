import React, { useState } from 'react'
import Check from './Check'
import Condition from './Condition'
import Axio from './Axio'
import Reference from './Reference'
import Timer from './Timer'
import Parent from './Component/Parent'
import LayoutHandler from './Composition/LayoutHandler'
import IncrementButton from './Composition/IncrementButton'
// import Course from './Course'
// import Counter from './Counter'





const App = () => {
  const [count,setCount]=useState(0);
const increase=()=>{
setCount(count+1);
}
const decrease=()=>{
setCount(count-1);
}
  return (
    <div>
      <h1>hello</h1>
      
      {/* <Check/>
 <Condition/>
<Axio/> */}
{/* <Reference/> */}
{/* <Timer/> */}
     {/* <Parent/> */}

<h2>Count: {count}</h2>

<LayoutHandler >
  <IncrementButton inc={increase} dec={decrease}/>
</LayoutHandler>

    </div>
  )
}

export default App
