import React, { useEffect, useRef } from 'react'



const Reference = () => {

const inputRef=useRef();


const fileRef=useRef();

const modelRef=useRef();

// useEffect(
//     ()=>{
//         inputRef.current.focus();
//     },[]
// );

const handleFile=()=>{
    fileRef.current.click();
}

const OpenModel=()=>{
    modelRef.current.showModal();
}

const closeModel=()=>{
    modelRef.current.close();
}

  return (
    <div>
      {/* <input type="text" ref={inputRef}/> */}

<input type="file" ref={fileRef}/>
<button onClick={handleFile}>Select File</button>



<dialog ref={modelRef}>
    <p>React Course</p>
    <button onClick={closeModel}>Close</button>
</dialog>

<button onClick={OpenModel}>Open</button>


    </div>
  )
}

export default Reference
