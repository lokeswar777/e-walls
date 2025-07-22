import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import "./css/App.css";
import Walls from "./pages/Walls";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./pages/All";


function App() {
  return (
    <>
      <Router className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/walls" element={<Walls />} />
          <Route path="/all" element={<All />} />
          
        </Routes>
      </Router>
    </>
  );
}
export default App;