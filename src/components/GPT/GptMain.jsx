import React from "react";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

export default function GptMain() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Main />
    </div>
  );
}