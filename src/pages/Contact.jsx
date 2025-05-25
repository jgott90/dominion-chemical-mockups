import React, { useState } from "react";
import { Title, Meta } from "react-head";
import '../styles/contact.css';

const DEPT_EMAILS = {
    general: "info@DominionChemical.com",
    waxEmulsions: "dans@dominionchemical.com",
    waxes: "blakem@dominionchemical.com",
};

const DEPT_LABELS = {
    general: "General Message",
    waxEmulsions: "Wax Emulsions Sales",
    waxes: "Waxes, Blending, or Packaging",
};

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        department: "general",
        message: "",
    });
    const [status, setStatus] = useState({ submitted: false, error: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitted: false, error: "" });

        // Simple validation
        if (!form.name || !form.email || !form.message) {
            setStatus({ submitted: false, error: "Please fill in all required fields." });
            return;
        }

        // Here you would send the form to your backend or 3rd party email processor.
        // For now, just simulate success.
        setTimeout(() => setStatus({ submitted: true, error: "" }), 800);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    return (
        <>
            <Title>Contact Dominion Chemical | Request Info or Quote</Title>
            <Meta
                name="description"
                content="Get in touch with Dominion Chemical for general inquiries, wax emulsions sales, or wax blending and packaging solutions. Our team is ready to assist you."
            />

            <section className="contactus-hero" aria-labelledby="contactus-heading">
                <div className="contactus-container">
                    <h1 id="contactus-heading">Contact Us</h1>
                    <div className="contactus-content-grid">
                        {/* Contact Information Block */}
                        <div className="contactus-info" aria-label="Contact Information">
                            <h2 className="contactus-subheading">Company Information</h2>
                            <address>
                                <strong>Ship to:</strong>
                                <br />
                                Dominion Chemical Company
                                <br />
                                2050 Puddledock Rd.
                                <br />
                                Petersburg, VA 23803
                                <br /><br />
                                <strong>Mail to:</strong>
                                <br />
                                Dominion Chemical Company
                                <br />
                                P.O. Box 1069
                                <br />
                                Petersburg, VA 23804
                                <br /><br />
                                <strong>Office:</strong> <a href="tel:8047337628">(804) 733-7628</a>
                                <br />
                                <strong>Fax:</strong> (804) 733-7698
                                <br />
                                <strong>Email:</strong> <a href="mailto:info@DominionChemical.com">info@DominionChemical.com</a>
                            </address>
                            <div className="contactus-dept">
                                <h3>For Waxes, Blending and Packaging:</h3>
                                <div>
                                    <strong>Blake Myers</strong>
                                    <br />
                                    Phone: <a href="tel:9082275151">(908) 227-5151</a>
                                    <br />
                                    Email: <a href="mailto:blakem@dominionchemical.com">blakem@dominionchemical.com</a>
                                </div>
                                <h3>For Wax Emulsions Sales:</h3>
                                <div>
                                    <strong>Dan Spurlock</strong>
                                    <br />
                                    Technical Sales Consultant
                                    <br />
                                    Phone: <a href="tel:8047337628">(804) 733-7628</a>
                                    <br />
                                    Cell: <a href="tel:8045862022">(804) 586-2022</a>
                                    <br />
                                    Email: <a href="mailto:dans@dominionchemical.com">dans@dominionchemical.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Block */}
                        <div className="contactus-form-container" aria-label="Send us a message">
                            <h2 className="contactus-subheading">Send Us a Message</h2>
                            {status.submitted ? (
                                <div className="contactus-success" role="status" tabIndex={-1}>
                                    <p>
                                        Thank you for contacting us! Your message has been sent to the appropriate department. We will respond as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                <form className="contactus-form" onSubmit={handleSubmit} noValidate>
                                    <label htmlFor="name">
                                        Name <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        aria-required="true"
                                        value={form.name}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="company">Company</label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        autoComplete="organization"
                                        value={form.company}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="email">
                                        Email <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        aria-required="true"
                                        value={form.email}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="department">
                                        Message Topic <span aria-hidden="true">*</span>
                                    </label>
                                    <select
                                        id="department"
                                        name="department"
                                        required
                                        aria-required="true"
                                        value={form.department}
                                        onChange={handleChange}
                                    >
                                        <option value="general">{DEPT_LABELS.general}</option>
                                        <option value="waxEmulsions">{DEPT_LABELS.waxEmulsions}</option>
                                        <option value="waxes">{DEPT_LABELS.waxes}</option>
                                    </select>

                                    <label htmlFor="message">
                                        Your Message <span aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        aria-required="true"
                                        value={form.message}
                                        onChange={handleChange}
                                    ></textarea>

                                    {status.error && (
                                        <div className="contactus-error" role="alert">
                                            {status.error}
                                        </div>
                                    )}

                                    <button type="submit" className="contactus-submit">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;