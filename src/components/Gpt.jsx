import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Gpt.css"; // Import the CSS file

export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "How to identify plant diseases?",
    "What are the best crops for my soil type?",
    "Where can I find affordable farming resources?",
    "How does Agrially's plant disease prediction work?",
    "What are the benefits of organic farming?",
  ];

  return (
    <div className="container_g">
      <h2 className="title_g">Ask AgriGPT Anything</h2>
      <RedirectButton placeholders={placeholders} />
    </div>
  );
}

function RedirectButton({ placeholders }) {
  const navigate = useNavigate();
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [placeholders]);

  return (
    <div className="button-container_g">
      <div className="placeholder-wrapper_g">
        <AnimatePresence mode="wait">
          <motion.p
            key={`current-placeholder-${currentPlaceholder}`}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="placeholder-text"
          >
            {placeholders[currentPlaceholder]}
          </motion.p>
        </AnimatePresence>
      </div>
      <Link to="/gpt">
      <button
        // onClick={() => navigate("/new-page")}
        className="redirect-button_g"
      >
        Try Now
      </button>
      </Link>
    </div>
  );
}
