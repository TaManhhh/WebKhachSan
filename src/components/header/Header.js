import React, { useContext, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import { useContext } from "react";
// import { LoginContext } from "../../context/AuthContext";

import NavLinks from "./NavLinks";
import { Fade, Menu, MenuItem } from "@mui/material";
import { LoginContext } from "../../context/AuthContext";
import { logout } from "../auth/firebase/firebase";



function Header() {
  const { setLogin } = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
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
    <div className="contain">
      <div className={navbar ? "nav-active" : "nav"}>
        <div className="flex flex-nowrap container-item">
          <NavLink to="/">
            {" "}
            <img
              className={navbar ? "logo-active" : "logo"}
              src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
              alt=""
            />
          </NavLink>
          <NavLinks />
          <div>
            <div onClick={()=> logout} className=" buttonn flex hover:bg-white " >
              Log out <FontAwesomeIcon icon={faArrowRight} />{" "}
            </div>
            {/* <Menu
              // id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
