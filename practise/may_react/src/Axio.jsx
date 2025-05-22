import React, { useEffect } from 'react'
import axios from 'axios'


const Axio = () => {



useEffect(

  ()=>{
      const fetchData=async()=>{
try{

    const response=await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
}
catch (error){
console.log(error.message);
}
        
    };

fetchData();
  }

);

  return (
   <>
   <h1>hii</h1>
   
   </>
  )
}

export default Axio
