import React from "react";
import "./PopularCourses.css";

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Sustainable Agriculture",
      instructor: "Dr. Ramesh Kumar",
      description:
        "Learn eco-friendly farming practices that enhance productivity while preserving the environment.",
      image: "/s1.jpg",
      reverse: false,
    },
    {
      id: 2,
      title: "Organic Farming Techniques",
      instructor: "Prof. Anjali Sharma",
      description:
        "Master organic farming methods, from composting to pesticide-free cultivation.",
      image: "/s2.jpg",
      reverse: true,
    },
    {
      id: 3,
      title: "Precision Farming & Smart Agriculture",
      instructor: "Dr. Vivek Patel",
      description:
        "Discover how technology like IoT and AI can optimize crop yield and resource management.",
      image: "/s3.jpg",
      reverse: false,
    },
    {
      id: 4,
      title: "Advanced Soil Health & Crop Management",
      instructor: "Dr. Priya Mehta",
      description:
        "Understand soil health improvement techniques and best practices for crop sustainability.",
      image: "/s4.jpg",
      reverse: true,
    },
  ];

  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
        Most Recommended
        <span style={{ color: "#007f3a" }}> Courses</span>
      </h1>
      <div className="container_p">
        <div className="grid-container_p">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`grid-item_p ${course.reverse ? "reverse" : ""}`}
            >
              {!course.reverse && (
                <div className="card_p">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />
                </div>
              )}
              <div className="text_p">
                <h2 className="course-title">{course.title}</h2>
                <h3 className="course-instructor">{course.instructor}</h3>
                <p className="course-description">{course.description}</p>
              </div>
              {course.reverse && (
                <div className="card_p">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
