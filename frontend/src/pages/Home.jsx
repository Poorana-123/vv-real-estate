import {
  MapPin,
  Search,
  ArrowUpRight,
  Ruler,
  ShieldCheck,
  FileCheck,
  TrendingUp,
  CheckCircle2,
  Compass,
  ArrowRight,
  LandPlot,
  Trees,
  Building2,
  Landmark,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../styles/Home.css";
import CTA from "../components/CTA";

const lands = [
  {
    id: 1,
    title: "Premium Residential Plots",
    location: "Madurai, Tamil Nadu",
    price: "₹12.5 Lakhs",
    area: "1200 Sq.ft",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Greenfield Investment Land",
    location: "Coimbatore, Tamil Nadu",
    price: "₹18 Lakhs",
    area: "1800 Sq.ft",
    type: "Investment",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    badge: "Investment Pick",
  },
  {
    id: 3,
    title: "Future Growth Plots",
    location: "Trichy, Tamil Nadu",
    price: "₹9.8 Lakhs",
    area: "1000 Sq.ft",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=85",
    badge: "New Listing",
  },
];

const categories = [
  {
    icon: LandPlot,
    title: "Residential Plots",
    description: "Find the perfect plot to build your dream home.",
  },
  {
    icon: TrendingUp,
    title: "Investment Lands",
    description: "Explore land opportunities with future potential.",
  },
  {
    icon: Trees,
    title: "Agricultural Lands",
    description: "Discover spacious agricultural land opportunities.",
  },
  {
    icon: Building2,
    title: "Commercial Lands",
    description: "Strategic land options for business development.",
  },
];

function Home() {
  return (
    <div className="vv-home">

      {/* ================= HERO SECTION ================= */}

      <section className="vv-hero">

        <div className="vv-hero-overlay"></div>

        <div className="vv-hero-inner">

          {/* Hero Content */}

          <div className="vv-hero-content">

            <div className="vv-hero-label">
              <span className="vv-label-line"></span>
              VETRI VINAYAGA REAL ESTATE
              <span className="vv-label-line"></span>
            </div>

            <h1>
              Own a Piece
              <br />
              of <span>Your Future.</span>
            </h1>

            <p>
              Discover premium land opportunities across Tamil Nadu.
              Your dream of owning land begins with the right choice
              and a trusted partner.
            </p>

            <div className="vv-hero-actions">

              <Link to="/properties" className="vv-btn-gold">
                Explore Lands
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/contact" className="vv-btn-outline">
                Talk to Our Team
              </Link>

            </div>

            <div className="vv-hero-trust">

              <div className="vv-trust-icon">
                <ShieldCheck size={22} />
              </div>

              <div>
                <strong>Trusted Land Guidance</strong>
                <span>Transparency at every step</span>
              </div>

            </div>

          </div>

          {/* Search Card */}

          <div className="vv-search-panel">

            <div className="vv-search-top">

              <span className="vv-search-eyebrow">
                FIND YOUR LAND
              </span>

              <h2>
                Discover Your
                <br />
                Perfect Plot
              </h2>

              <p>Let's find the right land for you.</p>

            </div>

            <form className="vv-search-form">

              <label>Preferred Location</label>

              <div className="vv-search-input">
                <MapPin size={18} />

                <select defaultValue="">
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option>Madurai</option>
                  <option>Chennai</option>
                  <option>Coimbatore</option>
                  
                  <option>Dindigul</option>
                  <option>Theni</option>
                  
                </select>
              </div>

              <label>Land Type</label>

              <div className="vv-search-input">
                <LandPlot size={18} />

                <select defaultValue="">
                  <option value="" disabled>
                    Select Land Type
                  </option>
                  <option>Residential Plot</option>
                  <option>Agricultural Land</option>
                  <option>Commercial Land</option>
                  <option>Investment Land</option>
                </select>
              </div>

              <label>Budget Range</label>

              <div className="vv-search-input">
                <span className="vv-search-rupee">₹</span>

                <select defaultValue="">
                  <option value="" disabled>
                    Select Your Budget
                  </option>
                  <option>Below ₹10 Lakhs</option>
                  <option>₹10 - ₹25 Lakhs</option>
                  <option>₹25 - ₹50 Lakhs</option>
                  <option>₹50 Lakhs - ₹1 Crore</option>
                  <option>Above ₹1 Crore</option>
                </select>
              </div>

              <button type="button" className="vv-search-button">
                
                <Search size={18} />
                <Link to="/findland" className="hii">
                
                Find Available Lands
                
                </Link>
              </button>

            </form>

          </div>

        </div>

        {/* Bottom Hero Info */}

        <div className="vv-hero-bottom">

          <div className="vv-hero-bottom-item">
            <span className="vv-hero-bottom-icon">
              <LandPlot size={20} />
            </span>

            <div>
              <strong>Premium Plots</strong>
              <span>Handpicked locations</span>
            </div>
          </div>

          <div className="vv-hero-bottom-item">
            <span className="vv-hero-bottom-icon">
              <FileCheck size={20} />
            </span>

            <div>
              <strong>Documentation</strong>
              <span>Guided verification</span>
            </div>
          </div>

          <div className="vv-hero-bottom-item">
            <span className="vv-hero-bottom-icon">
              <ShieldCheck size={20} />
            </span>

            <div>
              <strong>Trusted Guidance</strong>
              <span>Every step matters</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= LAND CATEGORIES ================= */}

      <section className="vv-category-section">

        <div className="vv-section-heading">

          <div>
            <span className="vv-section-eyebrow">
              EXPLORE LAND OPPORTUNITIES
            </span>

            <h2>
              Find Land That
              <br />
              <span>Fits Your Vision.</span>
            </h2>
          </div>

          <p>
            Whether you're planning to build, invest, or grow,
            explore land opportunities that match your goals.
          </p>

        </div>

        <div className="vv-category-grid">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Link
                to="/properties"
                className="vv-category-card"
                key={index}
              >

                <div className="vv-category-icon">
                  <Icon size={27} />
                </div>

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <div className="vv-category-arrow">
                  <ArrowUpRight size={20} />
                </div>

              </Link>
            );
          })}

        </div>

      </section>


      {/* ================= FEATURED LANDS ================= */}

      <section className="vv-featured-section">

        <div className="vv-featured-header">

          <div>
            <span className="vv-section-eyebrow">
              CURATED LAND COLLECTION
            </span>

            <h2>
              Featured <span>Land Listings.</span>
            </h2>

            <p>
              Explore selected land opportunities across
              Tamil Nadu.
            </p>
          </div>

          <Link to="/properties" className="vv-view-all">
            View All Lands
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="vv-land-grid">

          {lands.map((land) => (

            <div className="vv-land-card" key={land.id}>

              <div className="vv-land-image">

                <img
                  src={land.image}
                  alt={land.title}
                />

                <span className="vv-land-badge">
                  {land.badge}
                </span>

                <span className="vv-land-type">
                  {land.type}
                </span>

              </div>

              <div className="vv-land-details">

                <div className="vv-land-location">
                  <MapPin size={15} />
                  {land.location}
                </div>

                <h3>{land.title}</h3>

                <div className="vv-land-price">
                  {land.price}
                </div>

                <div className="vv-land-info">

                  <span>
                    <Ruler size={16} />
                    {land.area}
                  </span>

                  <span>
                    <LandPlot size={16} />
                    Land Plot
                  </span>

                </div>

                <Link to="/contact" className="vv-land-enquiry">
                  Enquire Now
                  <ArrowUpRight size={17} />
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="vv-why-section">

        <div className="vv-why-image">

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
            alt="Land and greenery"
          />

          <div className="vv-image-caption">
            <span>YOUR LAND.</span>
            <strong>YOUR FUTURE.</strong>
          </div>

        </div>

        <div className="vv-why-content">

          <span className="vv-section-eyebrow">
            WHY VETRI VINAYAGA
          </span>

          <h2>
            A Better Way
            <br />
            to <span>Own Land.</span>
          </h2>

          <p>
            Buying land is an important decision.
            We make your property journey more confident
            through transparent guidance and dedicated support.
          </p>

          <div className="vv-why-list">

            <div className="vv-why-item">
              <CheckCircle2 size={22} />

              <div>
                <h3>Transparent Guidance</h3>
                <p>
                  Clear information throughout your land buying journey.
                </p>
              </div>
            </div>

            <div className="vv-why-item">
              <CheckCircle2 size={22} />

              <div>
                <h3>Documentation Support</h3>
                <p>
                  Assistance with understanding property documents.
                </p>
              </div>
            </div>

            <div className="vv-why-item">
              <CheckCircle2 size={22} />

              <div>
                <h3>Location-Based Opportunities</h3>
                <p>
                  Explore plots in promising locations across Tamil Nadu.
                </p>
              </div>
            </div>

          </div>

          <Link to="/about" className="vv-why-button">
            Discover Our Story
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>


      {/* ================= BUYING JOURNEY ================= */}

      <section className="vv-journey-section">

        <div className="vv-journey-header">

          <span className="vv-section-eyebrow">
            YOUR PROPERTY JOURNEY
          </span>

          <h2>
            From Search to
            <br />
            <span>Ownership.</span>
          </h2>

          <p>
            A simple, guided journey to help you find
            and own the right land.
          </p>

        </div>

        <div className="vv-journey-grid">

          <div className="vv-journey-card">

            <span className="vv-journey-number">01</span>

            <div className="vv-journey-icon">
              <Compass size={27} />
            </div>

            <h3>Explore</h3>

            <p>
              Browse available plots and discover locations
              that suit your needs.
            </p>

          </div>

          <div className="vv-journey-card">

            <span className="vv-journey-number">02</span>

            <div className="vv-journey-icon">
              <MapPin size={27} />
            </div>

            <h3>Visit the Land</h3>

            <p>
              Arrange a site visit and experience the
              location firsthand.
            </p>

          </div>

          <div className="vv-journey-card">

            <span className="vv-journey-number">03</span>

            <div className="vv-journey-icon">
              <FileCheck size={27} />
            </div>

            <h3>Verify</h3>

            <p>
              Review property details and seek appropriate
              legal documentation verification.
            </p>

          </div>

          <div className="vv-journey-card">

            <span className="vv-journey-number">04</span>

            <div className="vv-journey-icon">
              <Landmark size={27} />
            </div>

            <h3>Own Your Land</h3>

            <p>
              Complete your purchase with professional
              guidance along the way.
            </p>

          </div>

        </div>

      </section>


      {/* ================= LOCATIONS ================= */}

      <section className="vv-location-section">

        <div className="vv-location-content">

          <span className="vv-section-eyebrow">
            LAND ACROSS TAMIL NADU
          </span>

          <h2>
            Your Next Opportunity
            <br />
            <span>Starts Here.</span>
          </h2>

          <p>
            Discover land opportunities across the
            diverse and growing regions of Tamil Nadu.
          </p>

          <div className="vv-location-tags">

            <Link to="/properties">Madurai</Link>
            <Link to="/properties">Chennai</Link>
            <Link to="/properties">Coimbatore</Link>
            
            <Link to="/properties">Dindigul</Link>
            <Link to="/properties">Theni</Link>
            

          </div>

          <Link to="/properties" className="vv-location-button">
            Explore Locations
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="vv-location-visual">

          <div className="vv-location-visual-card">

            <MapPin size={35} />

            <span>LAND OPPORTUNITIES</span>

            <h3>
              Tamil Nadu
            </h3>

            <p>
              Find your place.
              Build your future.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <CTA />

    </div>
  );
}

export default Home;