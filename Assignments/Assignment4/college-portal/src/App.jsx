import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import DepartmentDetail from "./pages/DepartmentDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container flex-grow-1 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
