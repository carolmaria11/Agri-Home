import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="diagonal-divider"></div>
      <div className="container">
      <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
        About
        <span style={{ color: "#007f3a" }}> Us</span>
      </h1>
        <div className="content-grid">
          {/* Text Section */}
          <div className="text-section">
            <p className="subheading">
              "Empowering Farmers with Technology for a Greener Future"
            </p>
            <p className="description">
              At Agrially, our mission is to revolutionize agriculture through
              innovative technology. From plant disease prediction using AI to a
              vibrant marketplace for farming essentials, we provide farmers
              with the tools they need to thrive.
            </p>
            <p className="description">
              We believe in sustainable and productive farming practices. Our
              platform connects farmers with resources, insights, and a
              supportive community to make informed decisions and enhance their
              productivity.
            </p>
            <a href="#" className="learn-more-btn">
              Learn More
            </a>
          </div>

          {/* Image Section */}
          <div className="image-container">
            <img
              src="https://i.pinimg.com/736x/c3/80/72/c38072bb8e9037ab0251076d7f2d6b54.jpg"
              alt="Agrially"
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;