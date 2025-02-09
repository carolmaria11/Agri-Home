import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user is in the home section
      setIsHome(currentScrollY < window.innerHeight * 0.8);

      if (!isHome) {
        if (currentScrollY > lastScrollY) {
          // User is scrolling down, hide the navbar
          setShowNavbar(false);
        } else {
          // User is scrolling up, show the navbar
          setShowNavbar(true);
        }
      } else {
        // Always show the navbar in the home section
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isHome]);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="nav-container">
        <h2 className="logo">Agrially</h2>
        <ul className="nav-links">
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#lms">LMS</a>
          </li>
          <li>
            <a href="#ecommerce">E-commerce</a>
          </li>
          <li>
            <a href="#chatgpt">ChatGPT</a>
          </li>
          <li>
            <a href="#plant-disease">Plant Disease Detection</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
