import React, { useReducer } from 'react'
const reducer=(state,action)=>{
switch(action.type){
    case "add":
        return [...state,{id:state.length+1,name:action.payload}];
         case "delete":
            return state.filter((task)=>(task.id!==action.payload))
        default:
            return state;
}}
const Todo = () => {
const initialState=[];
    const [todo,dispatch]=useReducer(reducer,initialState);
    const handleChange=(e)=>{
        if(e.key=="Enter"){
dispatch(
{type:"add",
payload:e.target.value
}

)
e.target.value="";
        } }
    const handleDelete=(id)=>{
dispatch({
    type:"delete",
    payload:id
});}

  return (
   <>
   <input type="text" onKeyDown={(e)=>handleChange(e)} />
  <ul>
    {todo.map((item)=>(
        <li key={item.id}>{item.name} <button onClick={()=>{handleDelete(item.id)}}>delete</button></li>
    ))}
  </ul>

   
   </>
  )
}

export default Todo
