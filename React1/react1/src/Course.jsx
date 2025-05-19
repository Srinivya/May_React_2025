import React, { useEffect, useState } from 'react'
import Child from './Child'
import img from './assets/image.png'
import { useFetch } from './useFetch';

const Course = () => {

  const [values,error]=useFetch("http://localhost:3000/courses");


const deleteButton=(id)=>{
  const newValue=values.filter((item)=>item.id !== id);
  console.log("deleted");
  setValues(newValue);
}


let sorted=values.sort((x,y)=>y.fee-x.fee)
const filt=sorted.filter((item)=>item.fee>5000)

if(!values){
  return (
    <>
   {/* {error? (
    <p>{error.message}</p>
    ):(
      <p>{"Loading"}</p>
    )} */}

    {/* {!error && <p>{"Loading..........."}</p>} */}
    {!error && <img src={img}></img>}
    {error && <p>{error.message}</p>}
    </>
  )
 
}
const value=values.map(
    (item,index)=><Child key={item.id}  name={item.name} fee={item.fee} duration={item.duration}  delete={()=>deleteButton(item.id)}/>
)


  return (
  <>
  {value}
  <h1>hiii</h1>

  </>
  )
}

export default Course
