import React from  "react"
import "./Stylesheet.css";

function Stylesheet(props){
    let classname= props.primary ? "primary": " "
    return(
        <div>
            <h1 className={classname}>STYLESHEET</h1>
        </div>
    )
}
export default Stylesheet