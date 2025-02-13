import React from "react";
import Navbar from "../blogsComponents/Navbar";
import Homepage from "../routes/Homepage"
const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <Navbar />
      <Homepage />
    </div>
  );
};

export default MainLayout;
