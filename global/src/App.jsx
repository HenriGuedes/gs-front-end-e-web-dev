import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import PerfisProfissionais from "./pages/PerfisProfissionais";
import NavBar from "./components/NavBar";
import Chatbot from "./components/Chatbot";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/perfisprofissionais"
            element={<PerfisProfissionais />}
          />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
