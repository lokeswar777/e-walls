import "../css/Navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
<nav className="Navbar">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/favourites">Favourites</Link></li>
    <li><Link to="/cart">Cart</Link></li>
    <li><Link to="/profile">Profile</Link></li>
    <li><Link to="/walls">Walls</Link></li>
  </ul>
</nav>

  );
}
export default Navbar;