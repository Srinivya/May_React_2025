import React, { useReducer } from 'react'


const reducer=(state,action)=>{

    console.log("Reducer received");
    switch(action.type){
        case "add":
            return [...state,{
                id:state.length+1,name:action.payload
            }]
         case "delete": 
         return state.filter((task)=>(
            task.id !==action.payload

         ))

    
        default:
            return state;
    }
}
console.log("asdc");
const Task2 = () => {

    const initialState=[];
    const[todo,dispatch]=useReducer(reducer,initialState);



    const handleChange=(e)=>{
console.log("Key pressed");
        if(e.key==="Enter"){
dispatch(
    {
     type:"add",
     payload:e.target.value
    }
);
e.target.value="";
console.log("Current value:",e.target.value);

        }

    }

    const deleteFunction=(id)=>{

        dispatch(
            {
                type:"delete",
                payload:id
            }
        )
    };

    


  return (
    <div>
      

      <input type="text" onKeyDown={(e)=>handleChange(e)} />
     <ul>
{todo.map((item)=>(
    <li key={item.id}>
        {item.name}
        <button onClick={()=>{
            deleteFunction(item.id)
        }}>Delete</button>
    </li>
))}

     </ul>

    </div>
  )
}

export default Task2
