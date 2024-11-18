import React from "react"
import Masp from "./Masp2"

function Methodsasprops1(){
    const parentName="jcob"
    const greetParent=()=>{
        alert(`hello ${parentName}`)
    }
    return(
     <div>
        <Masp greetHandler={greetParent}/>
     </div>
    )
}
export default Methodsasprops1