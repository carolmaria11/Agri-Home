import React, { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkGreen, setIsDarkGreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is past the hero section
      if (window.scrollY > window.innerHeight) {
        setIsDarkGreen(true);
      } else {
        setIsDarkGreen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${isDarkGreen ? "dark-green sticky" : "transparent"}`}
    >
      <div className="nav-container">
        <h2 className="logo">AgriAlly</h2>
        <ul className="nav-links">
          {/* Before Login: Show Home and Login */}
          <SignedOut>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Key Features</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <SignInButton afterSignInUrl="/dashboard">
                <Link to="/">Login</Link>
              </SignInButton>
            </li>
          </SignedOut>

          {/* After Login: Show all other links */}
          <SignedIn>
            <li>
              <Link to="/">Insights</Link>
            </li>
            <li>
              <Link to="https://agri-lms.vercel.app/dashboard">AgriLearn</Link>
            </li>
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/gpt">AgriAI</Link>
            </li>
            <li>
              <Link to="/">Plant Disease Detection</Link>
            </li>
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