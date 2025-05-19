import React, { useState } from 'react'

const Login = () => {

const [name,setName]=useState("");
const [pass1,setPass1]=useState("")
const [pass2,setPass2]=useState("");
const [match,setMatch]=useState(false);


const nameFind=(event)=>{
setName(event.target.value);

}
const pass11=(event)=>{
    setPass1(event.target.value);
}
const pass22=(event)=>{
    setPass2(event.target.value);
}
const check=()=>{
    if(pass1==pass2)
    {
        console.log("Password same");
        setMatch(true);
        <Link to="/login">Login</Link>
    }
    else{
         console.log("Password not same");
         setMatch(false);
    }
}
console.log(name)

  return (
  <>
 <div className='login'>
     <h1 >Login</h1>
  <label>Username: </label>
  <input type="text" onChange={nameFind}/>
  <label >Password:</label>
  <input type="password" onChange={pass11} />
    <label >Re-Enter Password:</label>
  <input type="password"  onChange={pass22} />
  <button onClick={check}>Submit</button>

 
  <p>My name is {name}</p>
  {match!==null &&( match ? <p>Password is same</p>: <p>Password not same</p>)}
 </div>
  </>
  )
}

export default Login
