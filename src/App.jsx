import React from "react";
import GptMain from './components/GPT/GptMain'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Home";
import { BrowserRouter, Routes , Route } from "react-router-dom";
// import MainLayout from "./components/BLOGS/lay+ outs/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gpt" element={<GptMain />} />
        {/* <Route path="/blogs" element={<MainLayout/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
