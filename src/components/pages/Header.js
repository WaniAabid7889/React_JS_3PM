import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import { ThemeContext } from "./ThemeContext";
export default function Header() {
  
  const {theme, toggleTheme} = useContext(ThemeContext);
  
 const [isStatus, setStatus] = useState(false);

const handleTheme = () => {
  toggleTheme();
  setStatus(!isStatus);
}
 

  return (
    <div>
<nav className={`shadow container-fluid navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-light' : 'navbar-dark'} ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <a class="navbar-brand" href="/">
          College Management
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      <div className="float-left" >
  {/* <label className="switch" onClick={handleTheme}>
    <input type="checkbox" checked={isStatus === 'true'}/>
    <span className="slider round"></span>
  </label> */}

    <button onClick={handleTheme} className="btn btn-primary">switch</button>
</div>
      </nav>
    </div>
  );
}
