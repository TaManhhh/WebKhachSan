import React, { useState } from 'react'
import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Popup from '../Popup/Popup';
// import { useContext } from "react";
// import { LoginContext } from "../../context/AuthContext";

import NavLinks from './NavLinks';

// import "../auth/Auth";

function Header() {
 
  const [navbar, setNavbar] = useState(false);
   const changeBackground = () => {
    if (window.scrollY >= 80) {
       setNavbar(true);
     } else {
       setNavbar(false);
     }
   };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="container">
      <div className={navbar ? 'nav-active':'nav'}>
        <div className='flex flex-nowrap container-item'>
           <NavLink to="/"> <img
              className={navbar ? 'logo-active':'logo'}
              src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
              alt=""/>
            </NavLink>
            <NavLinks/>
        <NavLink className=" button  " to="/auth" >
          Login
          <FontAwesomeIcon icon={faArrowRight} />
        </NavLink>
      </div></div>
      
    </div>
  );
}

export default Header;
