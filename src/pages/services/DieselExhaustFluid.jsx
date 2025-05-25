import React from "react";
import "../../styles/CustomWaxFormulation.css"; // For shared layout/styles
import "../../styles/DieselExhaustFluid.css";    // DEF-specific styles

function DieselExhaustFluid() {
    return (
        <div className="custom-wax-bg">
            <section className="custom-wax-hero">
                <h1>Diesel Exhaust Fluid (DEF) Distributor</h1>
                <p>
                    Certified DEF for SCR-equipped diesel vehicles and equipment—safe, reliable, and available in the quantities you need.
                </p>
            </section>

            <section className="def-main">
                <div className="def-features-card">
                    <h2>Why Choose Certified DEF?</h2>
                    <ul className="def-feature-list">
                        <li>Approved for all SCR-equipped engines</li>
                        <li>Safe and easy to handle</li>
                        <li>Nonhazardous and nonflammable</li>
                        <li>Nontoxic and premixed with pure water</li>
                        <li>Two-year shelf life</li>
                        <li>Complies with API and ISO22241</li>
                    </ul>
                </div>

                <div className="def-packaging-card">
                    <h2>Packaging Options</h2>
                    <ul className="def-packaging-list">
                        <li>2.5 gallon jugs (with or without dispensing nozzle)</li>
                        <li>55 gallon drums</li>
                        <li>330 or 275 gallon totes</li>
                        <li>Mini bulk</li>
                        <li>Tank trucks</li>
                        <li>Compatible with most DEF dispensing systems</li>
                    </ul>
                </div>
            </section>

            <section className="def-info-section">
                <div className="def-info-block">
                    <strong>Certified DEF:</strong> Formulated using only high-purity urea and pure water. Approved for use in all SCR-equipped cars, trucks, and generators.
                </div>
                <div className="def-info-block">
                    <strong>Directions for use:</strong> DEF comes pre-diluted—no mixing required. Never top off the DEF tank with water alone. Avoid contamination by using a DEF-only spout or funnel.
                </div>
                <div className="def-info-block">
                    <strong>Service Interval:</strong> Use the DEF Consumption Chart below to estimate usage for your vehicle or equipment.
                </div>
            </section>

            <section className="def-table-section">
                <h2 className="def-table-heading">DEF Consumption Chart</h2>
                <div className="def-table-wrapper" tabIndex={0} aria-label="DEF Consumption Chart">
                    <table className="def-consumption-table">
                        <caption className="sr-only">Miles of service per gallon of DEF by vehicle MPG and DEF usage rate</caption>
                        <thead>
                            <tr>
                                <th rowSpan={2}>Vehicle MPG</th>
                                <th colSpan={3}>DEF usage as % of fuel consumption</th>
                            </tr>
                            <tr>
                                <th>1%</th>
                                <th>2%</th>
                                <th>3%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6</td>
                                <td>600</td>
                                <td>300</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>700</td>
                                <td>350</td>
                                <td>230</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>800</td>
                                <td>400</td>
                                <td>260</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>900</td>
                                <td>450</td>
                                <td>300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="def-sds-link">
                    <a
                        href="/pdfs/Certified-DEF-SDS.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download the Safety Data Sheet for Certified Diesel Exhaust Fluid PDF (opens in new tab)"
                    >
                        Download Certified DEF – Safety Data Sheet (PDF)
                    </a>
                </div>
            </section>

            <section className="custom-wax-footer-note">
                <p>
                    <em>
                        Dominion Chemical is your reliable DEF supplier. <br />
                        <strong>Contact us for DEF orders, service, or technical support.</strong>
                    </em>
                </p>
            </section>
        </div>
    );
}

export default DieselExhaustFluid;