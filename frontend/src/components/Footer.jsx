
import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/vetri-vinayaga-traders-bg.png";
import { FaWhatsapp } from "react-icons/fa";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="vv-footer">

      {/* MAIN FOOTER */}
      <div className="vv-footer-main">

        {/* BRAND */}
        <div className="vv-footer-brand">
          <div className="vv-footer-logo">
            <img
              src={Logo}
              alt="Vetri Vinayaga Real Estate"
            />
          </div>

          <p>
            Building trust through every plot.
            We help you discover the right land
            for your dreams, lifestyle, and investment.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="vv-footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/properties">Available Lands</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* SERVICES */}
        <div className="vv-footer-column">
          <h3>Our Expertise</h3>

          <Link to="/properties">Residential Plots</Link>
          <Link to="/properties">Agricultural Lands</Link>
          <Link to="/properties">Investment Lands</Link>
          <Link to="/services">Land Consultation</Link>
          <Link to="/services">Property Assistance</Link>
        </div>

        {/* CONTACT */}
        <div className="vv-footer-column vv-footer-contact">

          {/* HEADING + WHATSAPP ICON */}
          <div className="vv-footer-contact-heading">
            <h3>Get In Touch</h3>

            <a
              href="https://wa.me/919344676369"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="vv-footer-whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* LOCATION */}
          <div className="vv-contact-item">
            <span className="vv-contact-icon">⌖</span>

            <p>
              165 chithirakara theru Madurai, Tamil Nadu 625001
            </p>
          </div>

          {/* EMAIL */}
          <div className="vv-contact-item">
            <span className="vv-contact-icon">✉</span>

            <a href="mailto:vetrivinayagarealestate@gmail.com">
              vetrivinayagarealestate@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="vv-contact-item">
            <span className="vv-contact-icon">☎</span>

            <a href="tel:+919344676369">
              +91 93446 76369
            </a>
          </div>

          {/* CONTACT BUTTON */}
          <a href="/contact" className="vv-footer-contact-btn">
            Contact Our Team
            <span>→</span>
          </a>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="vv-footer-bottom">

        <p>
          © {new Date().getFullYear()} Vetri Vinayaga Real Estate.
          All Rights Reserved.
        </p>

        <div className="vv-footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>•</span>
          <a href="/terms">Terms & Conditions</a>
        </div>

        <p className="vv-footer-credit">
          Crafted with <span>♥</span> in Tamil Nadu
        </p>

      </div>

    </footer>
  );
}

export default Footer;
