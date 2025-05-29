// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Lazy loaded page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const IndustrialChemicals = lazy(() => import("./pages/products/IndustrialChemicals"));
const ChemicalsCategory = lazy(() => import("./pages/products/ChemicalCategory"));
const CustomWaxFormulation = lazy(() => import("./pages/services/CustomWaxFormulation"));



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Navigate to="/products/industrial-chemicals" replace />} />
        <Route path="/products/industrial-chemicals" element={<IndustrialChemicals />} />
        <Route path="/products/industrial-chemicals/:category" element={<ChemicalsCategory />} />
        <Route path="/services/custom-wax-formulation" element={<CustomWaxFormulation />} />
      </Routes>
      <Footer />
    </>


  );
}

export default App;