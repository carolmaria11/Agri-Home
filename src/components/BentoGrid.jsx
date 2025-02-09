import React from "react";
import "./BentoGrid.css";

export const BentoGrid = ({ className = "", children }) => {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
        Explore Our <span style={{ color: "#007f3a" }}>Key Features</span>
      </h1>
      <div className={`bento-grid ${className}`}>{children}</div>
    </div>
  );
};

export const BentoGridItem = ({
  className = "",
  title,
  description,
  header,
}) => {
  return (
    <div className={`bento-item ${className}`}>
      {header}
      <div className="bento-content">
        <div className="bento-title">{title}</div>
        <div className="bento-description">{description}</div>
      </div>
    </div>
  );
};

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ imageUrl }) => (
  <div
    className="skeleton"
    style={{ backgroundImage: `url(${imageUrl})` }}
  ></div>
);

const items = [
  {
    title: "Plant Disease Detection",
    description:
      "Snap a photo of your plant’s leaf for instant disease identification, and receive tailored prevention tips.",
    header: <Skeleton imageUrl="/pd1.jpg" />,
  },
  {
    title: "Farming Essentials Marketplace",
    description:
      "Browse and shop a variety of farming essentials, from seeds to advanced tools like drones.",
    header: <Skeleton imageUrl="/pd3.jpg" />,
  },
  {
    title: "Agrially's Chat Assistance",
    description:
      "Instantly get answers to your farming queries, whether it's about crops, tools, or methods.",
    header: <Skeleton imageUrl="/pd4.jpg" />,
  },
  {
    title: "Agri-Community Hub",
    description:
      "Become part of a vibrant community where farmers come together to share knowledge, exchange experiences, and discuss the latest trends.",
    header: <Skeleton imageUrl="/pd8.jpg" />,
  },
  {
    title: "AgriSkills Center",
    description:
      "Explore a range of free and paid courses, covering everything from fundamental to advanced.",
    header: <Skeleton imageUrl="/pd7.jpg" />,
  },
];
