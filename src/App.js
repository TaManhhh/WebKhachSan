import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import Booking from "./page/booking/Booking";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import { Contact } from "./components/Contact/Contact";
import Room from "./components/rooms/Rooms";
import { LoginContext } from "./context/AuthContext";
import { useContext } from "react";
import LoginScreen from "./components/auth/login/Login";
import SignupScreen from "./components/auth/signup/Signup";


function App() {
  const { login, check } = useContext(LoginContext);
  return (
    <div className="App">
      {login === true ? (
        <header>
          <Header />
        </header>
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path="/"
          element={login === true ? <Home /> : <LoginScreen />}
        ></Route>
        <Route path="/The-Booking" element={<Booking />} />
        <Route path="/auth" element={<Login />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/Rooms" exact element={<Room />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/auth"
          element={check === false ? <LoginScreen /> : <SignupScreen />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
