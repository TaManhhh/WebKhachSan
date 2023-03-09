import React, { useContext, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import { LoginContext } from "../../context/AuthContext";
import { logout } from "../auth/firebase/firebase";

function Header() {
  const { setLogin } = useContext(LoginContext);
 
  async function handleLogout() {
    try {
      await logout();
      setLogin(false);
      localStorage.removeItem("user");
    } catch (error) {
      alert(error.message);
    }
  }
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
    <div className="w-full fixed z-50 ">
      <div className={navbar ? "relative w-full h-20 py-4 px-28 bg-white " : "relative w-full h-20 px-28 py-4"  }>
        <div className="flex space-x-72 ">
          <NavLink to="/">
            {" "}
            <img
              className="h-12"
              src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
              alt=""
            />
          </NavLink>
          <NavLinks />
          <div>
            <div onClick={handleLogout} className=" flex hover:bg-amber-500 bg-amber-400 px-5 py-1 rounded-3xl items-start mt-3" >
              Log out  <FontAwesomeIcon className="pt-1 pl-1" icon={faArrowRight} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
