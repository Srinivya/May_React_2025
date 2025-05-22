import React, { createContext, useEffect, useState } from 'react'
import Course from './Course';
export const UserContext=createContext();

const Check = () => {


//     const [num,setNum]=useState(0);
//      const [dec,setDec]=useState(10);

//     const incr=()=>{
//         setNum(num+1);
//     }
    
//      const decr=()=>{
//         setDec(dec-1);
//     }
    

// useEffect(()=>{
//     console.log("UseEffect called");

// },[dec]
// )

const [courses,setCourse]=useState([]);
const [loading,setLoading]=useState(true);
console.log(courses);

useEffect(()=>{
setTimeout(
  ()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{

      console.log(response);
        if(!response.ok){
            throw Error("not found");
        }
        return response.json()
       }
       )
     .then(data=>{console.log(data)
        setCourse(data);
        setLoading(false);
       
     })
     .catch((error)=>{
        console.log(error.message);
     }),10000
  }
);
   }
 
,[])







// const course=courses.map((item,index)=>(
//     <Course key={index} name={item.name} username={item.username} email={item.email}/>
// ))



  return (
    <div>

<UserContext.Provider value={{courses,loading}}>
  <Course/>

</UserContext.Provider>

      {/* <h1>{num}</h1>
      <button onClick={incr}>Add</button>
       <h1>{dec}</h1>
     <button onClick={decr}>Delete</button>
     {course} */}
    </div>
  )
}

export default Check
