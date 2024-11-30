import React from 'react';

function Header(){


    return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">To Do App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact">Contact Us</a>
        </li>
   
        
      </ul>
    </div>
  </div>
</nav>
    </>;
}

export default Header;