import React, { useEffect, useState } from "react";

export default function List() {
  let arr = ["abid", "hussain", "bhanu"];

  const [show, setShow] = useState(false);

  const [users, setUsers] = useState([]);

  const [input, setInput] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let result = await response.json();
      setUsers(result);
    };
    getUser();
  }, []);

  const ChangeStatus = () => {
    setShow(true);
  };

  

  const CreateInputBox = () =>{
    setInput(<li><input type="text" /></li>)
  }
  return (
    <div>
      <ul>
        {/* {
          arr.map((val,key) => <li key={key}>{val}</li>)
        } */}

        <button className="btn btn-primary" onClick={ChangeStatus}>
          show/hide
        </button>
        <ul>{show ? users.map((val,key) => 
            <li key={key}>{val.id} {val.username} {val.email}</li>
        ) : "data is not found"}</ul>
      </ul>
      
            <button className="btn btn-primary" onClick={CreateInputBox}>+</button>
            {input}
            <ul className="d-flex">
                 <li><input type="text"/></li>
            </ul>
    </div>
  );
}
