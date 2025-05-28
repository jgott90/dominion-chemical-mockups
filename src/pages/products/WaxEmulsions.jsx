import React, { useRef, useEffect } from "react";
import industries from "../../data/waxEmulsionsIndustries.json";
import "../../styles/CustomWaxFormulation.css";
import "../../styles/WaxEmulsions.css";

export default function WaxEmulsions() {
    const mainHeadingRef = useRef(null);

    useEffect(() => {
        if (mainHeadingRef.current) {
            mainHeadingRef.current.focus();
        }
    }, []);

    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
                onClick={e => {
                    e.preventDefault();
                    if (mainHeadingRef.current) mainHeadingRef.current.focus();
                }}
                tabIndex="0"
            >
                Skip to main content
            </a>
            <main className="waxemulsions-main" id="main-content">
                <h1 className="waxemulsions-title" tabIndex="-1" ref={mainHeadingRef}>
                    Wax Emulsions
                </h1>
                <p className="waxemulsions-desc">
                    Dominion Chemical Company has developed product lines centered around several types of wax emulsions. Within these emulsions, there are many formulas designed specifically for various types of industries and individual users. Since 1973, Dominion has developed an extensive knowledge of emulsions and strives for excellence in their achievements.
                </p>
                <section className="waxemulsions-content">
                    <figure className="waxemulsions-img-col">
                        <img
                            src="/images/wax-emulsions.jpg"
                            alt="Various wax emulsion product samples"
                            className="waxemulsions-img"
                        />
                    </figure>
                    <div className="waxemulsions-industries-col">
                        <h2 className="waxemulsions-industries-title">Industries Served</h2>
                        <ul className="waxemulsions-industries-list">
                            {industries.map((industry) => (
                                <li key={industry}>{industry}</li>
                            ))}
                        </ul>
                    </div>
                </section>
                <div className="waxemulsions-alert" role="note">
                    Dominion Chemical also custom blends waxes for specific applications.
                </div>
            </main>
        </>
    );
}