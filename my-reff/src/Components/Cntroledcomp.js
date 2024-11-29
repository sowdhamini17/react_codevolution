import React,{useState} from 'react';
  
  const Cntroledcomp = () =>  {
    const[username,setusername]=useState("");
    const[comment,setComment]=useState("")
    const handleChange=(e)=>{
        setusername(e.target.value)
    }
    const handleComment=(e)=>{
        setComment(e.target.value)
    }
    const handleSubmit=()=>{
        alert(`welcome ${username}`)
    }
	return (
	  <div>
        <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
        type="text"
        value ={username}
        onChange={handleChange}
        ></input>
        <br></br>
        <div>
        <label>comment</label>
        <textarea value={comment} onChange={handleComment}></textarea>
        <button type="submit">submit</button>
        </div>
        
        </form>
        
	  </div>
	);
  }
  
  export default Cntroledcomp;
  