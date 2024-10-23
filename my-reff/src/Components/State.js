// import React,{Component} from "react";
//    constructor(){
//         super()
//         this.state={
//         message:"the state"
//         }
//    };
//   handleChange(){
//     this.setState({
//          message:"thanks for subcribing"
//     })
//   }
// class State extends Component{
//     render(){
//         return(
//          <div>
//           {this.state.message}
//           <button onClick={this.handleChange}>subscribe</button>
//          </div>)
//     }
    
// }
// export default State;
import React, { useState } from "react";

const State = () => {
  const [message, setMessage] = useState("the state");

  const handleChange = () => {
    setMessage("thanks for subscribing");
  };

  return (
    <div>
      {message}
      <button onClick={handleChange}>Subscribe</button>
    </div>
  );
};

export default State;

