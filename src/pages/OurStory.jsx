import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/CustomWaxFormulation.css";
import "../styles/ourstory.css";
import Breadcrumbs from "../components/Breadcrumbs";

// Custom star SVG marker for map
const starIcon = new L.DivIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><polygon points="16,2 20,12 31,12 22,19 25,30 16,24 7,30 10,19 1,12 12,12" fill="#f4b400" stroke="#223" stroke-width="2"/></svg>`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 24],
    popupAnchor: [0, -24],
});

const LOCATIONS = [
    {
        name: "Petersburg, VA",
        position: [37.2279, -77.4019],
        desc: "Corporate HQ, blending, packaging, and R&D",
    },
    {
        name: "Albany, GA",
        position: [31.5785, -84.1557],
        desc: "Bulk storage, logistics, and distribution",
    },
];

function LocationsMap() {
    return (
        <div className="our-story-map-section" aria-label="Dominion Chemical Locations">
            <h2 className="our-story-map-title">Our Locations</h2>
            <div
                className="our-story-map-wrapper"
                role="region"
                aria-label="Map showing locations in Petersburg, VA and Albany, GA"
            >
                <MapContainer
                    center={[35.5, -85]}
                    zoom={5}
                    minZoom={3}
                    maxZoom={8}
                    scrollWheelZoom={false}
                    style={{ width: "100%", height: "260px", borderRadius: "14px" }}
                    zoomControl={false}
                    aria-label="US map with company locations"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ZoomControl position="topright" />
                    {LOCATIONS.map(loc => (
                        <Marker key={loc.name} position={loc.position} icon={starIcon}>
                            <Tooltip direction="top" offset={[0, -18]} permanent={true} className="map-tooltip" opacity={1}>
                                {loc.name}
                            </Tooltip>
                        </Marker>
                    ))}
                </MapContainer>
                <div id="map-desc" className="sr-only">
                    Interactive map of the United States with stars indicating Petersburg, Virginia and Albany, Georgia.
                </div>
            </div>
            <div className="our-story-locations-list" aria-label="List of site locations">
                {LOCATIONS.map(loc => (
                    <div className="our-story-location" key={loc.name}>
                        <span className="our-story-location-dot" aria-hidden="true"></span>
                        <span className="our-story-location-label">
                            <strong>{loc.name}</strong> – {loc.desc}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function OurStory() {
    return (
        <div className="custom-wax-bg">
            <Breadcrumbs />
            {/* Hero / Lead */}
            <section className="our-story-hero">
                <h1>Our Story</h1>
                <p>
                    Dominion Chemical is a trusted provider of specialty chemical solutions, serving industries across the Southern U.S. and beyond. With decades of experience, our company is committed to delivering reliable, high-quality products and services tailored to our customers’ unique needs.
                </p>
            </section>
            {/* 60+ Years of Wax Expertise Blurb */}
            <section className="our-story-blurb-section" aria-label="Dominion Chemical Experience and Capabilities">
                <div className="our-story-blurb-card">
                    <h2 className="sr-only">Dominion Chemical Experience and Capabilities</h2>
                    <p>
                        <strong>Wax nuances are our expertise.</strong> With over 60 years of experience in the wax business, Dominion Chemical’s valuable historical expertise offers a rare working knowledge as well as trust and proven abilities to bring solutions, support, and alternatives to provide the exact product you want.
                    </p>
                    <p>
                        With locations in Virginia and Georgia, Dominion Chemical Company’s capacity to blend, package, and create specialty wax formulations will meet your unique needs. Your product will be combined with our dedication and proven superior customer service. <strong>Your reputation is our reputation.</strong>
                    </p>
                    <p>
                        We offer an exceptional emulsification process, state-of-the-art blending, compounding, packaging, and experienced personnel as well as a full-service wax lab dedicated to your needs for R&amp;D, QC, and general product evaluation.
                    </p>
                </div>
            </section>
            {/* Locations Section */}
            <LocationsMap />
            {/* Main sections in cards */}
            <section className="our-story-main-section">
                <div className="our-story-content-card">
                    <h2>Our Services</h2>
                    <ul>
                        <li>
                            <strong>Custom Wax Formulations:</strong> Development and supply of wax blends for diverse industrial applications.
                        </li>
                        <li>
                            <strong>Blending & Packaging:</strong> Flexible solutions with advanced equipment and strict quality control—from small custom batches to full-scale production.
                        </li>
                        <li>
                            <strong>Diesel Exhaust Fluid (DEF) Distribution:</strong> Certified DEF in a wide range of packaging options, meeting all API and ISO22241 specs.
                        </li>
                        <li>
                            <strong>Industrial Chemicals & Emulsions:</strong> Comprehensive offerings for various industrial requirements.
                        </li>
                    </ul>
                </div>
                <div className="our-story-content-card">
                    <h2>Quality & Commitment</h2>
                    <p>
                        Our operations are built on a foundation of quality, safety, and customer service. We carefully monitor every production stage with thorough quality control—before, during, and after each batch. Dominion Chemical is dedicated to exceeding customer expectations and building long-term relationships through dependable products and responsive support.
                    </p>
                </div>
                <div className="our-story-content-card">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Over 60 years of industry experience</li>
                        <li>Flexible, customer-focused service</li>
                        <li>Modern production and packaging facilities</li>
                        <li>Certified, safe, environmentally responsible products</li>
                        <li>Serving a wide range of industrial markets</li>
                    </ul>
                </div>
            </section>
            <section className="custom-wax-footer-note our-story-footer-note">
                <p>
                    <em>
                        Dominion Chemical—Ready to meet your specialty chemical, blending, and packaging needs.<br />
                        <strong>Contact us to learn more or discuss your next project.</strong>
                    </em>
                </p>
            </section>
        </div>
    );
}

export default OurStory;