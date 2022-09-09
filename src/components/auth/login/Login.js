import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import "../signup/signup.css";
import { LoginContext } from "../../../context/AuthContext";
import Signup from "../signup/Signup";
import Popup from "../../Popup/Popup";
function Login() {
  const navigate = useNavigate();
  const { setLogin, setSignup, signup } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errMessage, setErrMessage] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    setErrMessage("");
    // const data = { email, username, password };
    // const url = "/user/login";
    // const response = await fetch(url, {
    //   method: "POST",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   redirect: "follow",
    //   referrerPolicy: "no-referrer",
    //   body: JSON.stringify(data),
    // });

    // setLogin(true);
    // navigate("/");

    // console.log("response:", response.clone().json());
    // console.log(email, username);

    try {
      const data = await handleSubmit(email, username, password);
      console.log(data);
      if (data.data && data.data.errCode !== 0) {
        setErrMessage(data.data.message);
      } else {
        localStorage.setItem("user_token", JSON.stringify(data.data.token));
        setLogin(true);
        navigate("/");
      }
    } catch (e) {
      if (e.response) {
        if (e.response.data) {
          setErrMessage(e.response.data.message);
        }
      }
      console.log("error", e.response);
    }
  };

  const handleSubmit = (email, username, password) => {
    return axios.post("mongodb+srv://final_project_3:1234567890@cluster0.gi7pf.mongodb.net/?retryWrites=true&w=majority", {
      email,
      username,
      password,
    });
  };

  const clickSignup = (e) => {
    setSignup(!signup);
  };

  return (
    <div className="loginScreen">

      {/* <button className="loginScreen__button" onClick={clickSignup}>
        {signup ? "Sign Up" : "Sign In"}
      </button> */}
      <div className="loginScreen__background"> 
         
         <div className="loginScreen__gradient"></div> 
       </div> *

      <div className="loginScreen__body">
        {signup ? (
          <div className="signupScreen">
            <form>
              <h1>Sign In</h1>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value.trim());
                }}
                required
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value.trim());
                }}
                required
              />

              <div className="err_message">{errMessage}</div>

              <butt className="button" type="submit" onClick={handleLogin}>
                Sign In
              </butt>

              <h4>
                <span className="signupScreen__gray">
                  Don't have an account?{" "}
                </span>
                <span className="signupScreen__link" onClick={clickSignup}>
                  Sign Up now.
                </span>
              </h4>
            </form>
          </div>
        ) : (
          <Signup />
        )}
      </div>
 
    </div>
  );
}

export default Login;
