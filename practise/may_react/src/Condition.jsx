import React, { useState } from 'react'




const Condition = () => {

const [count,setCount]=useState(0);



  return (
    <div>
      <h2>Count: {count}</h2>
<button onClick={()=>setCount(count+1)}>Increment</button>

{
count<5?
(<p>
The count is less than 5
</p>):

(<p>
The count is more than 5
</p>)}


{count >=10 && <Congratualations/>}


    </div>
  )
}


function Congratualations(){
    return <h3>Congratulations! You've reached 10 </h3>
}

export default Condition
