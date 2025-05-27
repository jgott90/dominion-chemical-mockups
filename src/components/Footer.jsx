import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => (
    <footer className="footer" role="contentinfo">
        <div className="footer-content">
            <section
                className="footer-cta"
                aria-labelledby="footer-heading"
            >
                <h2 id="footer-heading" className="footer-heading">
                    Contact Dominion Chemical Today
                </h2>
                <p>
                    If you need a custom blend wax or want to purchase white label wax products, Dominion Chemical has a solution for you.<br />
                    Get started today.
                </p>
            </section>
            <Link
                to="/contact"
                className="footer-contact-btn"
                aria-label="Contact us online"
            >
                CONTACT US ONLINE
            </Link>
        </div>
        <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Dominion Chemical. All rights reserved.
        </div>
    </footer>
);

export default Footer;