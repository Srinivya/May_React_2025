import { createContext, useEffect, useState } from 'react'
import './App.css'
import Details from './Details'
import './index.css'
import axios from 'axios'
import Paren from './Paren'
import LayoutHandler from './LayoutHandler'
import IncrementButton from './IncrementButton'
import Reduce from './Reduce'
import Todo from './Todo'

export const UserContext=createContext();

function App() {

const [details,setDetails]=useState([]);



useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>{
    console.log(response)
    return response.json();
  })
  .then(data=>{
    console.log(data)
    setDetails(data);
  })
},[]);



// useEffect(()=>{
// const fetchData=async()=>{
//   try{
//     const response=await fetch("https://jsonplaceholder.typicode.com/users");
//     const data= await response.json();
//     setDetails(data);
//   }
//   catch(error){
//    console.log(error);
//   }
// }

// fetchData();

// },[])








// const list=details.map((item)=>(
//     <Details name={item.name} username={item.username} email={item.email}/>
// ))
const [count,setCount]=useState(0);
const increase=()=>{
setCount(count+1);
}
const decrese=()=>{
  setCount(count-1);
}

  return (
   
    <>
    {/* <UserContext.Provider value={{details}} >

      <Details/>
    </UserContext.Provider>
   {list}

  <Paren/> */}


  {/* <h2>Count: {count}</h2>
<LayoutHandler>
  <IncrementButton onclick={increase} ofclick={decrese}/>
</LayoutHandler> */}
{/* <Reduce/> */}
{/* <Todo/> */}


    </>
  )
}

export default App
