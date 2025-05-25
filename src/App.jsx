// src/App.jsx
import React from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Search Bar Functionality
import SearchResults from "./pages/SearchResults";
import { SearchContext, SearchProvider } from "./context/SearchContext"; // Already added
import AppContentLoader from "./components/AppContentLoader";
import AutoIndexer from "./components/AutoIndexer";

//Products
import Waxes from "./pages/products/Waxes";
import WaxEmulsions from "./pages/products/WaxEmulsions";
import IndustrialChemicals from "./pages/products/IndustrialChemicals";
import ChemicalsCategory from "./pages/products/ChemicalCategory";

//Services
import CustomWaxFormulation from "./pages/services/CustomWaxFormulation";
import BlendingPackaging from "./pages/services/BlendingPackaging";
import DieselExhaustFluid from "./pages/services/DieselExhaustFluid";

import NotFound from "./pages/NotFound";
import Offline from "./pages/Offline";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <AppContentLoader />
      <AutoIndexer />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products" element={<Navigate to="/products/waxes" replace />} />
          <Route path="/products/waxes" element={<Waxes />} />
          <Route path="/products/wax-emulsions" element={<WaxEmulsions />} />
          <Route path="/products/industrial-chemicals" element={<IndustrialChemicals />} />
          <Route path="/products/industrial-chemicals/:category" element={<ChemicalsCategory />} />

          <Route path="/services" element={<Navigate to="/services/blending-packaging" replace />} />
          <Route path="/services/custom-wax-formulation" element={<CustomWaxFormulation />} />
          <Route path="/services/blending-packaging" element={<BlendingPackaging />} />
          <Route path="/services/diesel-exhaust-fluid" element={<DieselExhaustFluid />} />
          <Route path="/offline" element={<Offline />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;