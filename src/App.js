import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import Booking from "./page/booking/Booking";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import { Contact } from "./components/Contact/Contact";
import Room from "./components/rooms/Rooms";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/The-Booking" element={<Booking />} />
          <Route path="/auth" element={<Login />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/Rooms" exact element={<Room />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
