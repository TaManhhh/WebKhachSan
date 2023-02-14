import "./login.css";
import { useContext, useState, useRef } from "react";
import "../signup/signup.css";
import { LoginContext } from "../../../context/AuthContext";
import { signin } from "../firebase/firebase";
import SignupScreen from "../signup/Signup";

function LoginScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);
  const { setLogin, setCheck, check } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const clickSignup = () => {
    setCheck(true);
  };

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await signin(emailRef.current.value, passwordRef.current.value);
      setLogin(true);
      localStorage.setItem("user", email);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {check === false ? (
          <div className="signupScreen">
            <form>
              <div className="signin">Sign In</div>
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value.trim());
                }}
                required
              />
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value.trim());
                }}
                required
              />

              <button disabled={loading} type="submit" onClick={handleLogin}>
                Sign In
              </button>

              <h4>
                <span className="signupScreen__gray">New to Netflix? </span>
                <span
                  disabled={loading}
                  className="signupScreen__link"
                  onClick={clickSignup}
                >
                  Sign Up now.
                </span>
              </h4>
            </form>
          </div>
        ) : (
          <SignupScreen />
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
