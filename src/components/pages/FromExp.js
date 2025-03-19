import React, { useState } from 'react'

export default function FromExp() {

    const [users,setUsers] = useState({});


    const HandleInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setUsers((values)=>({...values, [name] : value}));
    }

    const HandleSubmit = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='container'>
    <from onSubmit={HandleSubmit}>
        <label>
            User Name  <input  className="form-control" type="text" name="username" value={users.username || ""} onChange={HandleInput} />
        </label>
        <br />
        <label>
            User Password  <input className="form-control" type="password" name="password" value={users.password || ""} onChange={HandleInput} />
        </label>
        <br />
        <label>
            User Address  <input className='form-control' type="text" name="address" value={users.address || ""} onChange={HandleInput} />
        </label>
        <br />
        <input type="submit" />
    
    </from>
        <div>
            <h1>User Details</h1>
            <p>Name : {users.username}</p>
            <p>Password : {users.password}</p>
            <p>Address : {users.address}</p>
        </div>
    </div>
  )
}
