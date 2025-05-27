import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppContentLoader from "./components/AppContentLoader";
import AutoIndexer from "./components/AutoIndexer";

// Lazy loaded page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const Waxes = lazy(() => import("./pages/products/Waxes"));
const WaxEmulsions = lazy(() => import("./pages/products/WaxEmulsions"));
const IndustrialChemicals = lazy(() => import("./pages/products/IndustrialChemicals"));
const ChemicalsCategory = lazy(() => import("./pages/products/ChemicalCategory"));
const BlendingPackaging = lazy(() => import("./pages/services/BlendingPackaging"));
const CustomWaxFormulation = lazy(() => import("./pages/services/CustomWaxFormulation"));
const DieselExhaustFluid = lazy(() => import("./pages/services/DieselExhaustFluid"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Offline = lazy(() => import("./pages/Offline"));

function App() {
  return (
    <div className="app-container">
      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="skip-link"
        tabIndex={0}
        onClick={e => {
          e.preventDefault();
          const main = document.getElementById("main-content");
          if (main) main.focus();
        }}
      >
        Skip to main content
      </a>
      <Navbar />
      <AppContentLoader />
      <AutoIndexer />
      <main
        id="main-content"
        className="main-content"
        role="main"
        tabIndex={-1}
        aria-label="Main Content"
      >
        <Suspense
          fallback={
            <div
              className="loader"
              role="status"
              aria-live="polite"
              style={{
                padding: "2rem",
                textAlign: "center",
                width: "100%",
                minHeight: "30vh",
              }}
            >
              <span className="visually-hidden">Loading content...</span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                aria-hidden="true"
                focusable="false"
                style={{ margin: "0 auto", display: "block" }}
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="#1976d2"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="88"
                  strokeDashoffset="60"
                  strokeLinecap="round"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to="360 20 20"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
              <div>Loading content...</div>
            </div>
          }
        >
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
            <Route path="/services/custom-wax-formulation" element={<CustomWaxFormulation />} />
            <Route path="/services/blending-packaging" element={<BlendingPackaging />} />
            <Route path="/services/diesel-exhaust-fluid" element={<DieselExhaustFluid />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/offline" element={<Offline />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {/* Accessible, mobile-friendly styles */}
      <style>
        {`
        .skip-link {
          position: absolute;
          left: -999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: 1000;
          background: #1976d2;
          color: #fff;
          padding: 0.75em 1em;
          border-radius: 4px;
          transition: left 0.3s;
          font-size: 1rem;
        }
        .skip-link:focus {
          left: 1rem;
          top: 1rem;
          width: auto;
          height: auto;
          outline: 2px solid #fff;
        }
        .main-content {
          min-height: 60vh;
          padding: 1rem;
          box-sizing: border-box;
          width: 100%;
        }
        @media (max-width: 600px) {
          .main-content {
            padding: 0.5rem;
          }
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
        `}
      </style>
    </div>
  );
}

export default App;