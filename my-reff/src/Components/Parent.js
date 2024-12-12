import React, { useState, useEffect } from "react";
// import Memo from "./Memo";
 import Regcomp from "./Regcomp"; // Assuming Regcomp is a valid component
 import Purecomp from "./Purecomp"; // Assuming Purecomp is a valid component

function Parent() {
  const [state, setState] = useState("vishwas");

  const handleChange = () => {
    setInterval(() => {
      setState((prevState) => prevState + " updated");
    }, 2000);
  };

  useEffect(() => {
    // Call handleChange when the component mounts
    handleChange();

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(handleChange);
  }, []);
  console.log("parent..........")
  return (
    
    <div>
      <h1>Parent Component </h1>
      {/* <h2>State: {state}</h2> */}
      <Regcomp onChange={handleChange} />
      <Purecomp onChange={handleChange} />
      {/* <Memo state={state}/> */}
    </div>
  );
}

export default Parent;
