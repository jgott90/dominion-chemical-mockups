import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div>
                <h3>Contact Dominion Chemical Today</h3>
                <p>
                    If you need a custom blend wax or want to purchase white label wax products, Dominion Chemical has a solution for you.<br />
                    Get started today.
                </p>
            </div>
            <Link to="/contact" className="footer-contact-btn">
                CONTACT US ONLINE
            </Link>
        </div>
        <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Dominion Chemical. All rights reserved.
        </div>
    </footer>
);

export default Footer;