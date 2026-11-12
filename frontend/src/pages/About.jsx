import { Link } from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
  Handshake,
  MapPin,
  Target,
  Eye,
  Award,
  Heart,
  CheckCircle2,
  Trees,
  LandPlot,
} from "lucide-react";

import "../styles/About.css";

function About() {
  return (
    <div className="vv-about-page">

      {/* ================= HERO SECTION ================= */}

      <section className="vv-about-hero">

        <div className="vv-about-hero-overlay"></div>

        <div className="vv-about-hero-content">

          <span className="vv-about-subtitle">
            VETRI VINAYAGA REAL ESTATE
          </span>

          <h1>
            Your Land.
            <br />
            <span>Your Future.</span>
          </h1>

          <p>
            Discover the perfect plot for your dreams.
            We help you find valuable land opportunities
            with trust, transparency, and confidence.
          </p>

          <div className="vv-about-hero-buttons">

            <Link
              to="/properties"
              className="vv-about-hero-button"
            >
              Explore Our Plots
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="vv-about-breadcrumb">

            <Link to="/">Home</Link>

            <span>/</span>

            <span>About Us</span>

          </div>

        </div>

      </section>


      {/* ================= OUR STORY ================= */}

      <section className="vv-about-story">

        <div className="vv-about-story-container">

          {/* Story Image */}

          <div className="vv-about-story-image">

            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
              alt="Open green land and property"
            />

            <div className="vv-about-image-label">

              <div className="vv-about-label-icon">
                <LandPlot size={26} />
              </div>

              <div>
                <span>Vetri Vinayaga</span>

                <p>
                  Your Dream. Our Commitment.
                </p>
              </div>

            </div>

          </div>


          {/* Story Content */}

          <div className="vv-about-story-content">

            <span className="vv-about-section-tag">
              ABOUT OUR COMPANY
            </span>

            <h2>
              More Than Land.
              <br />
              <span>A Foundation for Your Future.</span>
            </h2>

            <p>
              At Vetri Vinayaga Real Estate, we believe that owning
              land is more than an investment. It is the foundation
              of your dreams and a valuable asset for your future.
            </p>

            <p>
              We specialize in offering carefully selected land
              and plots to help individuals and families find
              the perfect space for their future plans.
            </p>

            <p>
              With a commitment to transparency, trust, and
              customer satisfaction, we guide you through
              every step of your land-buying journey.
            </p>


            {/* Highlights */}

            <div className="vv-about-story-highlights">

              <div className="vv-about-story-highlight">

                <CheckCircle2 size={19} />

                <span>Customer-Focused Guidance</span>

              </div>

              <div className="vv-about-story-highlight">

                <CheckCircle2 size={19} />

                <span>Transparent Property Details</span>

              </div>

              <div className="vv-about-story-highlight">

                <CheckCircle2 size={19} />

                <span>Land Investment Opportunities</span>

              </div>

            </div>


            <Link
              to="/properties"
              className="vv-about-readmore"
            >
              Explore Our Properties
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= MISSION & VISION ================= */}

      <section className="vv-about-mission">

        <div className="vv-about-heading">

          <span className="vv-about-section-tag">
            OUR PURPOSE
          </span>

          <h2>
            Driven by Purpose.
            <br />
            <span>Guided by Trust.</span>
          </h2>

          <p>
            Our commitment is to make every land-buying
            experience meaningful and rewarding.
          </p>

        </div>


        <div className="vv-about-mission-container">


          {/* Mission */}

          <div className="vv-about-mission-card">

            <div className="vv-about-icon">
              <Target size={30} />
            </div>

            <span className="vv-about-card-number">
              01
            </span>

            <h3>Our Mission</h3>

            <p>
              To make land ownership simple, transparent,
              and accessible by offering suitable plots
              and providing trusted guidance to every customer.
              We aim to help people make confident decisions
              about their land investments.
            </p>

          </div>


          {/* Vision */}

          <div className="vv-about-mission-card vv-about-vision-card">

            <div className="vv-about-icon">
              <Eye size={30} />
            </div>

            <span className="vv-about-card-number">
              02
            </span>

            <h3>Our Vision</h3>

            <p>
              To become a trusted name in land sales by
              creating valuable land investment opportunities
              and building lasting relationships with our
              customers through integrity and excellence.
            </p>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="vv-about-choose">

        <div className="vv-about-choose-container">


          {/* Content */}

          <div className="vv-about-choose-content">

            <span className="vv-about-section-tag">
              WHY VETRI VINAYAGA
            </span>

            <h2>
              The Right Plot.
              <br />
              <span>The Right Partner.</span>
            </h2>

            <p>
              Finding the right land is an important decision.
              We are here to make your property journey
              simple, clear, and comfortable.
            </p>


            <div className="vv-about-benefits">


              {/* Benefit 1 */}

              <div className="vv-about-benefit">

                <div className="vv-about-benefit-icon">
                  <ShieldCheck size={25} />
                </div>

                <div>

                  <h4>Trust & Transparency</h4>

                  <p>
                    We believe in honest communication and
                    transparent information throughout
                    your land purchase.
                  </p>

                </div>

              </div>


              {/* Benefit 2 */}

              <div className="vv-about-benefit">

                <div className="vv-about-benefit-icon">
                  <Handshake size={25} />
                </div>

                <div>

                  <h4>Customer-First Approach</h4>

                  <p>
                    We understand your requirements and
                    help you find plots that match
                    your needs and budget.
                  </p>

                </div>

              </div>


              {/* Benefit 3 */}

              <div className="vv-about-benefit">

                <div className="vv-about-benefit-icon">
                  <MapPin size={25} />
                </div>

                <div>

                  <h4>Land Investment Opportunities</h4>

                  <p>
                    Explore suitable land opportunities
                    for your future plans and investment goals.
                  </p>

                </div>

              </div>


              {/* Benefit 4 */}

              <div className="vv-about-benefit">

                <div className="vv-about-benefit-icon">
                  <LandPlot size={25} />
                </div>

                <div>

                  <h4>Guided Property Selection</h4>

                  <p>
                    We help you understand plot details
                    and make informed property decisions.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Image */}

          <div className="vv-about-choose-image">

            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
              alt="Beautiful open land available for investment"
            />

            <div className="vv-about-choose-image-overlay">

              <Trees size={30} />

              <h3>
                A Piece of Land.
                <br />
                A World of Possibilities.
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CORE VALUES ================= */}

      <section className="vv-about-values">

        <div className="vv-about-heading">

          <span className="vv-about-section-tag">
            WHAT WE STAND FOR
          </span>

          <h2>
            Our Core <span>Values</span>
          </h2>

          <p>
            The principles that guide our work and
            define our relationship with every customer.
          </p>

        </div>


        <div className="vv-about-values-container">


          {/* Integrity */}

          <div className="vv-about-value">

            <div className="vv-about-value-icon">
              <ShieldCheck size={30} />
            </div>

            <h3>Integrity</h3>

            <p>
              We believe in honest practices,
              transparent dealings, and trustworthy
              relationships.
            </p>

          </div>


          {/* Commitment */}

          <div className="vv-about-value">

            <div className="vv-about-value-icon">
              <Heart size={30} />
            </div>

            <h3>Commitment</h3>

            <p>
              We are dedicated to understanding
              your requirements and helping you
              find the right land.
            </p>

          </div>


          {/* Excellence */}

          <div className="vv-about-value">

            <div className="vv-about-value-icon">
              <Award size={30} />
            </div>

            <h3>Excellence</h3>

            <p>
              We strive to deliver quality service
              and a positive experience at every
              stage of your property journey.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA SECTION ================= */}

      <section className="vv-about-cta">

        <div className="vv-about-cta-content">

          <span className="vv-about-cta-tag">
            YOUR PROPERTY JOURNEY STARTS HERE
          </span>

          <h2>
            Own Your Land.
            <br />
            <span>Build Your Dreams.</span>
          </h2>

          <p>
            Every great future begins with the right foundation.
            Discover the perfect plot for your dreams
            with Vetri Vinayaga Real Estate.
          </p>

          <Link
            to="/properties"
            className="vv-about-cta-button"
          >
            Explore Our Plots
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;