import React, { useState } from 'react'

export default function Operator() {

    // if , &&, || , ?:

  const [name ,setName]= useState("");
  const [isLoginIn,setIsLoginIn] = useState(false);

  const handleButton = (event) =>{
    setIsLoginIn(true);
  }

  const CleanData = () =>{
    setIsLoginIn(false);
    setName("");
  }

  const textHandle = (event) =>{
    event.preventDefault();
    let textData = event.target.value;
    setName(textData);
  }

  const TitleCase = ()=>{
    let text = name[0].toUpperCase();    
    console.log(text);
    setName(text);
  }

  return (
    <div>
    <form>
    <babel>
        {/* Name <input type="text" name="username"  value={name || ""} onChange={(val)=>setName(val.target.value)} /> */}
    </babel>
    <br></br><br></br>
    
    </form>
    <div className="container">

    <button className='btn btn-primary mx-2' onClick={handleButton}>show</button>
    <button className='btn btn-danger mx-2' onClick={CleanData}>clean</button>
    <button className='btn btn-success mx-2' onClick={CleanData}>UpperCase</button>
    <button className='btn btn-secondary mx-2' onClick={CleanData}>LowerCase</button>
    <button className='btn btn-default' onClick={TitleCase}>TitleCase</button>

    <br /><br /><br />
    <textarea onChange={textHandle} value={name} cols={5} className='w-50' rows={10}>

    </textarea>
    </div>

    {isLoginIn &&  <p>Name : {name}</p> }
    <div>
        
    </div>
    </div>
  )
}
