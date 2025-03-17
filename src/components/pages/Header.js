import React from "react";



export default function Header() {


  return (
    <div>
      <nav  class="shadow container-fluid navbar navbar-expand-lg navbar-light bg-light">
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
