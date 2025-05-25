import React from "react";
import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";

const NotFound = () => (
    <section className="notfound-container" role="main" aria-labelledby="notfound-heading">
        <Title>Page Not Found | Dominion Chemical</Title>
        <Meta name="robots" content="noindex" />
        <div className="notfound-content">
            <h1 id="notfound-heading" tabIndex={-1}>404 - Page Not Found</h1>
            <p className="notfound-message">
                Sorry, the page you’re looking for doesn’t exist or may have been moved.
            </p>
            <Link to="/" className="notfound-home-link" aria-label="Go back to the homepage">
                ← Back to Home
            </Link>
        </div>
    </section>
);

export default NotFound;