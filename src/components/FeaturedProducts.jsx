import React from "react";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    title: "Organic Seeds",
    description:
      "High-quality, organic seeds for vegetables, fruits, flowers to support sustainable farming.",
    image: "seed1.png",
    tags: ["Eco-Friendly", "Sustainable"],
    bgClass: "bg1",
  },
  {
    id: 2,
    title: "Seed Booster",
    description:
      "Improves soil structure, enhances water retention, and boosts plant growth.",
    image: "grem.png",
    tags: ["Mineral Rich", "Eco-Friendly"],
    bgClass: "bg2",
  },
  {
    id: 3,
    title: "Natural Fertilizer",
    description:
      "Rich in nutrients, this organic compost improves soil health boosts plant growth.",
    image: "fer1.png",
    tags: ["Organic", "Soil Enrichment"],
    bgClass: "bg2",
  },
  {
    id: 4,
    title: "Crop Growth Enhancer",
    description:
      "Safe and effective natural pest control solutions to protect your plants.",
    image: "enha.png",
    tags: ["Non-Toxic", "Environment Safe"],
    bgClass: "bg1",
  },
  {
    id: 5,
    title: "Compost Booster",
    description:
      "A powerful organic solution to accelerate composting and enhance soil fertility.",
    image: "comp.png",
    tags: ["Fast Acting", "Chemical-Free"],
    bgClass: "bg1",
  },
  {
    id: 6,
    title: "Organic Pest Control",
    description:
      "Safe and effective natural pest control solutions to protect your plants.",
    image: "pest.png",
    tags: ["Non-Toxic", "Environment Safe"],
    bgClass: "bg1",
  },
  {
    id: 7,
    title: "Liquid Fertilizer",
    description:
      "An organic fertilizer made from plant extracts that enhances plant growth increases yield.",
    image: "fer4.png",
    tags: ["Eco-Friendly", "Sustainable"],
    bgClass: "bg2",
  },
  {
    id: 8,
    title: "Soil Conditioner",
    description:
      "Improves soil structure, enhances water retention, and boosts plant growth.",
    image: "soilcon.png",
    tags: ["Mineral Rich", "Eco-Friendly"],
    bgClass: "bg2",
  },
  
];

const FeaturedProducts = () => {
  return (
    <div className="card_wrapper">
      <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
        Top-Rated
        <span style={{ color: "#007f3a" }}> Farming Essentials</span>
      </h1>
      <div className="products_grid">
        {products.map((product) => (
          <div className="card_box" key={product.id}>
            <div className="card_img_box">
              <img
                src={product.image}
                alt={product.title}
                className="img-responsive"
              />
              <div className="card_icon">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7L17 7 17 17"></path>
                    <path d="M7 17L17 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="card_text_content">
              <h3>
                <a href="#">{product.title}</a>
              </h3>
              <p>{product.description}</p>
              <div className="tags">
                {product.tags.map((tag, index) => (
                  <span key={index} className={product.bgClass}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default FeaturedProducts;
