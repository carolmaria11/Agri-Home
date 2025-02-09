import React from "react";
import "./HeroSection.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <div className="container_h">
        <div className="card_h">
          <div className="carding_h">
            {/* Background Image */}
            <img
              src="main1.jpg"
              alt="Hero Section"
              className="background-img"
            />

            {/* Overlay with Content */}
            <div className="overlay">
              <div className="overlay-content">
                <h1>Empowering Farmers with Technology</h1>
                <p>
                  Agrially provides AI-driven plant disease detection, an
                  agri-marketplace, expert chat support, and a thriving
                  community to help farmers grow smarter.
                </p>
                <button className="cta-button">Get Started</button>
              </div>
            </div>
          </div>

          {/* KPI Section */}
          {/* <div className="kpi-section">
          <p>
            <span>2M+</span> Users
          </p>
          <p>
            <span>500K+</span> AI Scans
          </p>
          <p>
            <span>10K+</span> Marketplace Products
          </p>
        </div> */}
          {/* 
        <div className="curve_one_h"></div>
        <div className="curve_two_h"></div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
