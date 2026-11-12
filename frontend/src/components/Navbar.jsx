
import { NavLink } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import "../styles/Navbar.css";
import Logo from "../assets/vetri-vinayaga-traders-bg.png";

function Navbar() {
  return (
    <header className="vv-navbar">
      <div className="vv-navbar-container">

        {/* Logo */}
        <NavLink to="/" className="vv-logo">
          <img
            src={Logo}
            alt="Vetri Vinayaga Traders Logo"
          />
        </NavLink>

        {/* Navigation */}
        <nav className="vv-nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">
            About Us
          </NavLink>

          <NavLink to="/properties">
            Properties
          </NavLink>

          <NavLink to="/services">
            Services
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>

        {/* Buttons */}
        <div className="vv-nav-actions">

          <NavLink to="/contact#vv-contact-main" className="vv-contact-btn">
            <Phone size={16} />
            Contact Us
          </NavLink>

          <NavLink to="/properties#vv-properties-listing" className="vv-login-btn">
            Explore Properties
          </NavLink>

        </div>

        {/* Mobile Menu */}
        <button
          className="vv-mobile-menu"
          aria-label="Open navigation menu"
        >
          <Menu size={26} />
        </button>

      </div>
    </header>
  );
}

export default Navbar;
