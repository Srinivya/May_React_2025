import { createContext, useEffect, useState } from 'react'
import './App.css'
import Details from './Details'
import './index.css'
import axios from 'axios'

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


  return (
   
    <>
    <UserContext.Provider value={{details}} >

      <Details/>
    </UserContext.Provider>
   {/* {list} */}
  
    </>
  )
}

export default App
