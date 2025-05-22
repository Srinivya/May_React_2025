import React, { useRef, useState } from 'react'

const Timer = () => {
    const[count,setCount]=useState(0);

    const timeRef=useRef(null);


const startTimer=()=>{
    if(timeRef.current) return;

timeRef.current=setInterval(()=>{
    setCount(prev => prev +1);
},1000)

};

const stopTimer=()=>{
    clearInterval(timeRef.current);
    timeRef.current=null;
}



  return (
    <div>
     <h1>Count: {count}</h1>
<button onClick={startTimer}>Start</button>

<button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer
