import React from "react";
import Testimonial from "./components/Testimonial";
import HeroSection from "./components/HeroSection";
import PopularCourses from "./components/PopularCourses";
import { BentoGridDemo } from "./components/BentoGrid";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Gpt from "./components/Gpt";
import Demo from "./components/Demo";
import Blog from "./components/Blog";
import FeaturedProducts from "./components/FeaturedProducts";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <BentoGridDemo />
      <Demo />
      <PopularCourses />
      <Blog />
      <FeaturedProducts />
      <Gpt />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
