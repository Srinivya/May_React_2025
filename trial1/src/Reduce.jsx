import React, { useReducer, useState } from 'react'

const Reduce = () => {


function reducer(state,action){
    switch(action.type){
        case "add":
            return {count:state.count+1};
        case "minus":
            return {count:state.count-1};
default:
    return {state}
    }

}
const [state,dispatch]=useReducer(reducer,{count:0});
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>dispatch({type:"add"})}>Add</button>
      <button onClick={()=>dispatch({type:"minus"})}>sub</button>
    </div>
  )
}

export default Reduce
