import React, { useState } from 'react'

export default function UseStateHook() {

 //if && turnery ? :

  const [name, setName ]= useState("");
  const [user , setUser] = useState({
    name:"abid",
    password:"admin"
  });
  //when you store data in useState in object formate then you cant print directly like ->user insted of user.name it will be print
  const [status, setStatus] = useState(false);
  const [arr, setArr] = useState([1,2,3,4,5]);
  const [count,setCount] = useState(0);
  const handleCount = (event) => {
      setCount(count+1);
  }
  const handleMin = (event) => {
    if(count<=0){
        setCount(count+1);
    }else{
        setCount(count-1);
    }
  }

   const handleInput = (event) =>{
       event.preventDefault();
       setName(event.target.value);
   }

  return (
    <div className='App'>
    <div>UseStateHook</div>
    <button className='btn btn-primary' onClick={handleCount}>+</button>
    count : {count}
    <button className='btn btn-primary' onClick={handleMin}>-</button>
    <div>
        Name : <input type="text" name="name" onChange={handleInput}/> {user.name}
       <p>Array Data : {arr}</p>
       <p>Status : {status}</p>
    </div>
    </div>
    
  )
}
