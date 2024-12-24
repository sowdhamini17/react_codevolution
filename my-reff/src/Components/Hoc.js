import React,{useState} from "react"

const Updated=(original)=>{
const Updated=()=>{
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount(prev=>{
           count=prev.count+1
        })
    }
    return(
        <div>
            <original count={count} inc={increment} />
        </div>
    )
 }
 return Updated
}
export default Updated