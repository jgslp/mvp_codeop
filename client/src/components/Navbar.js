import './Navbar.css';
import React, { useState } from "react";

function Navbar({isProgressView, setIsProgressView}) {

    const handleChangeView = (isProgressView) => {
        setIsProgressView(isProgressView);
    }

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-brand">SLP Case Manager</div>
          <div>
              <button className={ `nav-button ${!isProgressView ? "btn large" : "btn"} `} onClick={() => handleChangeView(false)}>Caseload</button>
              <button className={ `nav-button ${isProgressView ? "btn large" : "btn"} `} onClick={() => handleChangeView(true)}>Progress</button>
          </div>
        </nav> 
)}

export default Navbar;