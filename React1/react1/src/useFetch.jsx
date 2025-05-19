import React, { useEffect, useState } from 'react'




export const useFetch = (url) => {
    let [data,setData]=useState(null);
let [error,setError]=useState(null);


 useEffect(()=>{
 setTimeout(() => {
   console.log("Use effect called");
  fetch(url)
  .then(response=>{console.log(response)
    if(!response.ok){
throw Error("Not found");
    }
     return response.json()
  }
 
)
.then(data=>{console.log(data);
setData(data)})

.catch((error)=>
{
  console.log(error.message);
  setError(error);
})
 }, 1000);

 
 },[]);
  return [data,error]
}

