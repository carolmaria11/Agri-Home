import React from "react";
import "./AboutUs.css"; // Importing CSS file directly

const AboutUs = () => {
  return (
    <div className="main-container">
      <br />
      <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
        Explore Our <span style={{ color: "#007f3a" }}>Key Features</span>
      </h1>

      <div className="gridContainer">
        {/* Left Column (Text) */}
        <div className="leftColumn">
          <h2 className="title">About Us</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            expedita, consectetur provident quisquam ut perspiciatis modi! Fuga
            a expedita, labore error modi, odit commodi nulla nemo enim,
            excepturi at. Impedit, accusantium quisquam nesciunt ipsam laborum
            culpa minus nihil corporis error. Quo minus iusto eaque commodi qui,
            perspiciatis, nihil modi sunt voluptates esse vel unde eum
            doloremque, officiis illo placeat dignissimos! Rerum veniam,
            corrupti velit molestias molestiae fuga!
          </p>
        </div>

        {/* Right Column (Positioned Elements) */}
        <div className="parent">
          <div className="child topLeft"></div>
          <div className="child topRight"></div>
          <div className="child bottomLeft"></div>
          <div className="child bottomRight"></div>
          <div className="child center"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
