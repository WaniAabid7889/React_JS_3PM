import React ,{useState} from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";


function App() {

  // useState can store this type of data -> number , null, boolean, array , object, string 
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  const handleButton = (event) => {
    event.preventDefault();
    console.log(event);
    alert(event.target);
  };


  const submitForm = (event) =>{
    event.preventDefault();
    alert(event.target.name);
  }

  const handleInput = (event) => {
  const { name, value } = event.target;
  if (name === 'email') {
    setEmail(value);
  } else if (name === 'password') {
    setPassword(value);
  }
}



  return (
    <div classNameName="App">
      <Header />
      {/* <button classNameName="btn btn-primary" onClick={handleButton}>
        click here.!
      </button> */}
      <div className="container">
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={handleInput}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <br></br>
        <b>User login information</b>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
    </div>
  );
}

export default App;
