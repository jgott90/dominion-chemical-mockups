import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy loaded page components
const Home = lazy(() => import("./pages/Home"));
const OurStory = lazy(() => import("./pages/OurStory"));
const IndustrialChemicals = lazy(() => import("./pages/products/IndustrialChemicals"));
const ChemicalsCategory = lazy(() => import("./pages/products/ChemicalCategory"));
const CustomWaxFormulation = lazy(() => import("./pages/services/CustomWaxFormulation"));

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="p-4 text-center" role="status" aria-live="polite">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Our-Story" element={<OurStory />} />
            <Route path="/industrial-chemicals" element={<IndustrialChemicals />} />
            <Route path="/industrial-chemicals/:category" element={<ChemicalsCategory />} />
            <Route path="/custom-wax-formulation" element={<CustomWaxFormulation />} />
            {/* Optional: Redirects or 404 handling */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;