import React, { useEffect, useState } from 'react'
import './index.css'

const Child = ({id,name,fee,duration,delete:deleteButton}) => {

const[purchased,setPurchase]=useState("false");



useEffect(()=>{
  console.log("Inner child called")
},[]);



//  let purchased=false;

const handleClick=(discount)=>{
  console.log(name,"Purchased",discount)
 // purchased=true;
 setPurchase("true");
}
  return (
  name && <div className='Card'>
<h1>Course name is {name}</h1>
<h2>Fess : {fee}</h2>
<p>The duration is : {duration}</p>
      

<button onClick={()=>handleClick(30)}>Add</button>
<button onClick={(deleteButton)}>Delete</button>


{/* <p>{purchased ? "Already purchased":"New Purchase"}</p> */}
<p>{purchased}</p>



    </div>
  )
}

export default Child
