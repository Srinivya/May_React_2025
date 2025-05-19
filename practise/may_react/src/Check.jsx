import React, { useEffect, useState } from 'react'

const Check = () => {


    const [num,setNum]=useState(0);
     const [dec,setDec]=useState(10);

    const incr=()=>{
        setNum(num+1);
    }
    
     const decr=()=>{
        setDec(dec-1);
    }
    

useEffect(()=>{
    console.log("UseEffect called");

},[dec]
)

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/user")
    .then(response=>{console.log(response);
        if(!response.ok){
            throw Error("not found");
        }
        return response.json()
    }

)
     .then(data=>{console.log(data)})
     .catch((error)=>{
        console.log(error.message);
     })
},[])



  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incr}>Add</button>
       <h1>{dec}</h1>
     <button onClick={decr}>Delete</button>
    </div>
  )
}

export default Check
