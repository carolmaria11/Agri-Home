"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Blog.css";
import { Link } from "react-router-dom";

const staticBlogs = [
  {
    id: 1,
    image: "/b1.jpg",
    title: "Sustainable Farming: The Future of Agriculture",
    name: "Dr. Ramesh Patel",
    designation: "Agricultural Scientist",
    content:
      "Discover how sustainable farming practices, including crop rotation and organic fertilizers, are revolutionizing the agricultural industry. Learn how farmers can increase yield while protecting the environment.",
  },
  {
    id: 2,
    image: "/b2.jpg",
    title: "How to Prevent Plant Diseases Naturally",
    name: "Priya Sharma",
    designation: "Agronomist & Plant Pathologist",
    content:
      "Early detection of plant diseases is crucial for farmers. Explore natural remedies and AI-powered solutions that help prevent crop loss and boost farm productivity.",
  },
  {
    id: 3,
    image: "/b3.jpg",
    title: "Smart Agriculture: The Role of AI & IoT",
    name: "Rajesh Kumar",
    designation: "Agri-Tech Expert",
    content:
      "With IoT sensors, AI-driven analysis, and precision farming, smart agriculture is transforming traditional farming methods. Learn how farmers can leverage technology to improve efficiency and sustainability.",
  },
];

const Blog = () => {
  const [cards, setCards] = useState(staticBlogs);

  const handleScreenClick = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()); // Move last card to the front
      return newArray;
    });
  };

  return (
    <div className="b-main-container">
      <br />
      <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
        Explore the
        <span style={{ color: "#007f3a" }}> Future of Farming </span>
      </h1>

      <div className="blog-container_bl" onClick={handleScreenClick}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="blog-card_bl"
            style={{ transformOrigin: "top center" }}
            animate={{
              top: index * -20,
              scale: 1 - index * 0.04,
              zIndex: cards.length - index,
            }}
          >
            <div className="blog-image-container_bl">
              <img src={card.image} alt={card.name} className="blog-image_bl" />
            </div>
            <div className="blog-text-container_bl">
              <h2 className="blog-title_bl">{card.title}</h2>
              <p className="blog-content_bl">{card.content}</p>
              <div className="mt-4">
                <p className="blog-name_bl">{card.name}</p>
                <p className="blog-designation_bl">{card.designation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
