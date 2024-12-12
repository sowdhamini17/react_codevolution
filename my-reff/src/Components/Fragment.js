import React from "react";

function Fragments(){
    const items=[1,2,3,4,5,67,7]
    return(
        <React.Fragment>
             <h1>fragments</h1>
             {
             items.map((item, index)=>(
               <React.Fragment key={index}>
               
                <p>{item}</p>
                 </React.Fragment>
               ))
            }
             
            
        </React.Fragment>
    )
}
export default Fragments