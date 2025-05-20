import React, { useState } from 'react'

const Counter = () => {

const [number,setNumber]=useState(0);

const increament=()=>{
    setNumber(prevNumber=>prevNumber+1);
    setNumber(prevNumber=>prevNumber+1);
}
const [text,setText]=useState('');

const handleChange=(e)=>{

setText(e.target.value);

}

  return (
    <div>
      <h1>Count : {number}</h1>

<button onClick={increament}>Increment</button>

<input type="text" onChange={handleChange}/>

<p>You typed: {text}</p>

    </div>
  )
}

export default Counter
