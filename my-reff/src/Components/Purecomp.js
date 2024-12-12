import React, { PureComponent } from "react";


 class Purecomp extends PureComponent{
    
    render(){
        console.log("purecomponent")
        return(
            <div>
              
            <h1>purecomponent{this.props.state}</h1>
            </div>)
    
    }
        
    
 }
 export default Purecomp;