import React from "react";
import { Title, Meta } from "react-head";

const Offline = () => (
    <section className="offline-container" role="main" aria-labelledby="offline-heading">
        <Title>Offline | Dominion Chemical</Title>
        <Meta name="robots" content="noindex" />
        <div className="offline-content">
            <h1 id="offline-heading" tabIndex={-1}>You’re Offline</h1>
            <p className="offline-message">
                It looks like you’ve lost your internet connection.<br />
                Please check your network and try again.
            </p>
            <button
                className="offline-retry-btn"
                onClick={() => window.location.reload()}
                aria-label="Retry connection"
            >
                Retry
            </button>
        </div>
    </section>
);

export default Offline;