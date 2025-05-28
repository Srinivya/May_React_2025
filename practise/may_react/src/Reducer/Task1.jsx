import React, { useReducer, useState } from 'react'



const reducer=(state,action)=>{

switch(action.type){
    case 'increment':
        return {count:state.count+1}
     case 'decrement':
        return {count:state.count-1}
    case 'reset':
        return {count :0 }
    default:
        return state;

}

}


const Task1 = () => {

const [state,dispatch]=useReducer(reducer,{count:0});



  return (
    <div>
      <p>{state.count}</p>

<button onClick={()=>{
dispatch(
    {
        type:'increment'
    }
)

}}>Increment</button>


<button onClick={()=>{
dispatch(
    {
        type:'decrement'
    }
)

}}>Decrement</button>

<button onClick={
    ()=>{
        dispatch(
            {
                type:'reset'
            }
        )
    }
} >Reset</button>

    </div>
  )
}

export default Task1
