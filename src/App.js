import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import FlightList from "./Pages/FlightList";
import Passenger from "./Pages/Passenger";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Home/contact" element={<Contact />} />
        <Route path="/Home/about/contact" element={<Contact />} />
        <Route path="/Home/about" element={<About />} />
        <Route path="/Home/contact/about" element={<About />} />
        <Route path="/flightlist" element={<FlightList />} />
        <Route path="/Home/Passenger" element={<Passenger />} />
      </Routes>
    </div>
  );
}

export default App;
