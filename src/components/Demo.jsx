import { useState } from "react";
import "./Demo.css";

export default function Demo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { id: 1, title: "Capture a Clear Image", images: ["/demo1.jpg"] },
    { id: 2, title: " Upload for Analysis ", images: ["/demo2.jpeg"] },
    {
      id: 3,
      title: "Follow the Suggested Precautions",
      images: ["/demo3.jpeg"],
    },
  ];

  return (
    <div>
      <div className="outer_demo">
        <br />
        <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
          Effortless Plant{" "}
          <span style={{ color: "#007f3a" }}>Disease Detection</span>
        </h1>

        <div className="container_d">
          {/* Left Section: Card Display */}
          <div className="card_d">
            <div
              className="card-bg_d"
              style={{
                backgroundImage: `url('${cards[activeIndex].images[0]}')`,
              }}
            ></div>
          </div>

          {/* Right Section: Text Options */}
          <div className="text-options_d">
            <h2>Step-by-Step Guide:</h2>
            <div className="options_d">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`option_d ${
                    activeIndex === index ? "active_d" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="circle_d">{index + 1}</div>
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
            <button
              className="diagnose-btn_d"
              onClick={"http://127.0.0.1:5000/"}
            >
              Diagnose Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
