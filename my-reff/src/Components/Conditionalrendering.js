import React from "react";

function Conditionalrendering({ isLoggedIn }) {
    // if-else
    if (!isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please log in.</h1>;
    }
   
    // switch (isLoggedIn) {
    //     case "loading":
    //         return <p>Loading...</p>;
    //     case "success":
    //         return <p>Data loaded successfully!</p>;
    //     case "error":
    //         return <p>Error loading data.</p>;
    //     default:
    //         return <p>Unknown status.</p>;
    // }


    // ternary ,shortcircuit,IIFE
    return(<div>
         <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>
         {isLoggedIn && <p>You have new notifications!</p>}
         {(()=>{
            if(isLoggedIn){
                return <h3>we are back</h3>
            }
            else{
                return <h3>hola</h3>
            }
         })()}
    </div>)
   
}

export default Conditionalrendering;