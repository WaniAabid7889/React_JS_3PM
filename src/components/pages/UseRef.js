import React, { useRef, useState } from 'react'

export default function UseRef() {

  const [stateTime,setStateTime] = useState(null);
  const [now, setNow] = useState('null');
  const initialRef = useRef('null');

  const handleStart = ()=>{
  const startTime = Date.now();
  setStateTime(startTime);
  setNow(startTime);
  initialRef.current = setInterval(()=>{
    setNow(Date.now());
  },100)
}

  const handleStop = ()=>{
  clearInterval(initialRef.current);
 
}

  const handleClean = () =>{
    clearInterval(null);
    setNow(null);
    setStateTime(null);
  }

  let SecondPassed = 0;
  if(stateTime != null && now != null){
    SecondPassed = (now - stateTime) /1000;
  }
  return (
    <div className='mx-auto' style={{textAlign: 'center'}} >
        <h2>Timer : {SecondPassed.toFixed(3)}</h2>
        <button className="btn btn-primary" onClick={handleStart}>Start</button>        
        <button className="btn btn-warning mx-2" onClick={handleStop}>Stop</button>        
        <button className="btn btn-danger mx-2"  onClick={handleClean}>Clear</button>
         <select>
          <option value="">2</option>
          <option value="">5</option>
          <option value="">10</option>
          <option value="">20</option>
         </select>      
    </div>
  )
}
