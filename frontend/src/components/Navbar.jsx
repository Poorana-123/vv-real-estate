
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";
import "../styles/Navbar.css";
import Logo from "../assets/vetri-vinayaga-traders-bg.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="vv-navbar">
      <div className="vv-navbar-container">

        {/* Logo */}
        <Link to="/" className="vv-logo" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Vetri Vinayaga Traders Logo"
          />
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Actions */}
        <div className="vv-nav-actions">
          <Link
            to="/contact#vv-contact-main"
            className="vv-contact-btn"
          >
            <Phone size={16} />
            Contact Us
          </Link>

          <Link
            to="/properties#vv-properties-listing"
            className="vv-login-btn"
          >
            Explore Properties
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="vv-mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`vv-mobile-dropdown ${menuOpen ? "open" : ""}`}>
        <nav className="vv-mobile-nav-links">
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/properties" onClick={closeMenu}>
            Properties
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="vv-mobile-actions">
          <Link
            to="/contact#vv-contact-main"
            className="vv-mobile-contact"
            onClick={closeMenu}
          >
            <Phone size={16} />
            Contact Us
          </Link>

          <Link
            to="/properties#vv-properties-listing"
            className="vv-mobile-explore"
            onClick={closeMenu}
          >
            Explore Properties
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
