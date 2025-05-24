// src/App.jsx
import React from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
//import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import { SearchContext, SearchProvider } from "./context/SearchContext"; // Already added
import AppContentLoader from "./components/AppContentLoader";
import AutoIndexer from "./components/AutoIndexer";
import Waxes from "./pages/products/Waxes";
//import WaxProduct from "./pages/products/WaxProduct";
//import WaxEmulsions from "./pages/products/WaxEmulsions";
import IndustrialChemicals from "./pages/products/IndustrialChemicals";
import ChemicalsCategory from "./pages/products/ChemicalCategory";
//import ChemicalProduct from "./pages/products/ChemicalProduct";
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
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products" element={<Navigate to="/products/waxes" replace />} />
          <Route path="/products/waxes" element={<Waxes />} />
          {/*<Route path="/products/waxes/:id" element={<WaxProduct />} />
          <Route path="/products/wax-emulsions" element={<WaxEmulsions />} /> */}
          <Route path="/products/industrial-chemicals" element={<IndustrialChemicals />} />
          <Route path="/products/industrial-chemicals/:category" element={<ChemicalsCategory />} />
          {/* <Route path="/products/industrial-chemicals/:id" element={<ChemicalProduct />} /> */}
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/offline" element={<Offline />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;