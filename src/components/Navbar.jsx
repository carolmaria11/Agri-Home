import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHome, setIsHome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHome(currentScrollY < window.innerHeight * 0.8);

      if (!isHome) {
        setShowNavbar(currentScrollY < lastScrollY);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome]);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="nav-container">
        <h2 className="logo">AgriAlly</h2>
        <ul className="nav-links">
          <li><Link to="/">Blog</Link></li>
          <li><Link to="https://agri-lms.vercel.app/dashboard">LMS</Link></li>
          <li><Link to="/">E-commerce</Link></li>
          <li><Link to="/gpt">ChatGPT</Link></li>
          <li><Link to="/">Plant Disease Detection</Link></li>

          {/* Show SignInButton when signed out */}
          <SignedOut>
            <li>
              <SignInButton afterSignInUrl="/dashboard">
                <button className="login-btn text-white">Login</button>
              </SignInButton>
            </li>
          </SignedOut>

          {/* Show UserButton with navigation when signed in */}
          <SignedIn>
            <li>
              <Link to="/dashboard">
                <UserButton />
              </Link>
            </li>
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
