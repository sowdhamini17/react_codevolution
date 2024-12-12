import React,{useRef,useEffect} from 'react'

function Ref() {
    const inputRef=useRef(null)
    let cbRef = null;
     const setCbRef = element=>{
       cbRef = element
    }
    useEffect(()=>{
        if(cbRef){
            cbRef.focus()
        }
       
    }
        
    )
    const handleClick=()=>{
        alert( inputRef.current.value)
        
       
    }
  return (<>
  <input type="text" ref={inputRef}></input>
  <input type="text" ref={setCbRef}></input>
  <button onClick={handleClick}>click me</button>
  </>
   
  )
}

export default Ref