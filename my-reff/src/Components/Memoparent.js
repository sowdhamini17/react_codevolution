import React,{useState} from 'react'
import Memo from './Memo'

function Memoparent() {
const[count,setCount]=useState(0)
console.log("memo parent")
const handleChange=()=>{setCount(count + 1);}
         
  return (
    <div>
        <button onClick={handleChange}>click me</button>
        <Memo name="alice" age={count} />
    
    </div>
  )
}

export default Memoparent;