import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>E Walls</h2>
      <ul style={styles.links}>
        <li><Link to="/">Home</Link></li>
        {isLoggedIn && (
          <>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><button onClick={handleLogout} style={styles.button}>Logout</button></li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#111",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
  },
  links: {
    display: "flex",
    listStyle: "none",
    gap: "1.5rem",
  },
  button: {
    background: "transparent",
    border: "1px solid #fff",
    padding: "0.4rem 0.8rem",
    color: "#fff",
    cursor: "pointer",
  },
};
