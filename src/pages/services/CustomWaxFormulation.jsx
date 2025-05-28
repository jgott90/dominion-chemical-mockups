import React from "react";
import "../../styles/CustomWaxFormulation.css";

function CustomWaxFormulation() {
    return (
        <div className="custom-wax-bg">
            <section className="custom-wax-hero">
                <h1 tabIndex="-1">Customized Wax Formulations</h1>
                <p>
                    The cornerstone of our business is creating tailored wax solutions for your unique application and needs.
                </p>
            </section>

            <section className="custom-wax-main">
                <div className="custom-wax-image-col">
                    <img
                        src="/images/custom-formulation-tank.jpg"
                        alt="Plant Equipment"
                        className="custom-wax-photo"
                    />
                </div>
                <div className="custom-wax-info-col">
                    <div className="custom-wax-info-card">
                        <h2>Heading</h2>
                        <p>
                            <strong>
                                Strong start to grab attention
                            </strong>
                            <br />
                            Paragraph blurb describing service and what sets Dominion apart.
                        </p>

                    </div>
                </div>
                <div className="custom-wax-image-col">
                    <img
                        src="/images/custom-wax-formulations-flowchart.jpg"
                        alt="Process Flow Diagram"
                        className="custom-wax-diagram"
                    />
                    <div className="custom-wax-diagram-caption">
                        Process Flow – Click to Enlarge
                    </div>
                </div>
            </section>

            <section className="custom-wax-footer-note">
                <p>
                    <em>
                        Good communication is essential to a successful business. We welcome open discussions to help you meet your needs.<br />
                        <strong>Dominion Chemical Company would be proud to serve you.</strong>
                    </em>
                </p>
            </section>
        </div>
    );
}

export default CustomWaxFormulation;