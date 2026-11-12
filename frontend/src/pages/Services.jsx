import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  LandPlot,
  Compass,
  MapPin,
  TrendingUp,
  FileCheck,
  CheckCircle2,
  ShieldCheck,
  MoveUpRight,
  Building2,
  Search,
  Handshake,
  Sparkles,
} from "lucide-react";

import "../styles/Services.css";

const heroImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=90",
];

const services = [
  {
    number: "01",
    title: "Land & Plot Sales",
    short: "Find your perfect piece of land.",
    description:
      "Explore residential plots and land opportunities in carefully selected locations. We help you discover property options that align with your preferences and future plans.",
    icon: LandPlot,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90",
    tag: "PROPERTY DISCOVERY",
  },
  {
    number: "02",
    title: "Property Consultation",
    short: "Guidance built around your needs.",
    description:
      "Share your budget, preferred location, and land requirements. Our team helps you explore suitable options and understand the important factors involved in choosing a plot.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=90",
    tag: "PERSONALIZED GUIDANCE",
  },
  {
    number: "03",
    title: "Site Visit Assistance",
    short: "Experience the land in person.",
    description:
      "Explore the property firsthand. We assist with arranging site visits so you can understand the location, surrounding environment, and accessibility before making a decision.",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90",
    tag: "LOCATION EXPLORATION",
  },
  {
    number: "04",
    title: "Land Investment Guidance",
    short: "Explore opportunities with clarity.",
    description:
      "Understand the factors that matter when considering land as an investment, including location, accessibility, development surroundings, and your long-term goals.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1464938050520-efc0bde5c7a1?auto=format&fit=crop&w=1200&q=90",
    tag: "INVESTMENT INSIGHTS",
  },
  {
    number: "05",
    title: "Purchase & Documentation Support",
    short: "Navigate the buying process.",
    description:
      "Receive assistance in understanding the land purchase process and relevant documentation requirements. We help you identify the steps to take toward a more informed purchase.",
    icon: FileCheck,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=90",
    tag: "PURCHASE SUPPORT",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Tell us your preferred location, budget, and land requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Discover available plots that align with your preferences.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Visit",
    description:
      "Explore the property and understand its surroundings.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Decide",
    description:
      "Review your options and make an informed decision.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Own",
    description:
      "Move forward with your land purchase with the guidance available.",
    icon: Handshake,
  },
];

const trustPoints = [
  "Customer-focused property selection",
  "Clear and transparent communication",
  "Location-oriented land opportunities",
  "Guidance throughout your buying journey",
  "Dedicated focus on land and plots",
];

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  const servicesRef = useRef(null);

  // Hero background image loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(".vv-service-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vv-service-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleExploreServices = () => {
    servicesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="vv-services-page">

      {/* ================= HERO SECTION ================= */}

      <section className="vv-services-hero">
        <div className="vv-services-hero-backgrounds">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`vv-services-hero-bg ${
                activeHeroImage === index ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        <div className="vv-services-hero-overlay"></div>

        <div className="vv-services-hero-content">
          <div className="vv-services-hero-label">
            <span className="vv-hero-label-line"></span>
            VETRI VINAYAGA TRADERS
            <span className="vv-hero-label-dot"></span>
            REAL ESTATE SERVICES
          </div>

          <h1>
            Every Great Investment
            <br />
            Begins with the
            <br />
            <span>Right Land.</span>
          </h1>

          <p>
            Discover how we make your land-buying journey simpler,
            clearer, and more meaningful — from exploring the right
            plot to moving toward ownership.
          </p>

          <div className="vv-services-hero-actions">
            <button
              className="vv-services-hero-button"
              onClick={handleExploreServices}
            >
              Explore Our Services
              <ArrowRight size={18} />
            </button>

            <Link to="/contact" className="vv-services-hero-link">
              Talk to Our Team
              <MoveUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="vv-services-hero-bottom">
          <div className="vv-hero-scroll">
            <span className="vv-scroll-line"></span>
            SCROLL TO EXPLORE
          </div>

          <div className="vv-hero-image-counter">
            <span>0{activeHeroImage + 1}</span>
            <div className="vv-counter-line"></div>
            <span>0{heroImages.length}</span>
          </div>

          <div className="vv-hero-bottom-caption">
            LAND · OPPORTUNITY · OWNERSHIP
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}

      <section className="vv-services-intro vv-service-reveal">
        <div className="vv-services-intro-label">
          <span>OUR APPROACH</span>
          <div></div>
        </div>

        <h2>
          Real Estate Services,
          <br />
          <span>Designed Around You.</span>
        </h2>

        <p>
          Finding land should feel exciting, not complicated.
          Our services are designed to help you explore property
          opportunities with clarity at every step.
        </p>
      </section>

      {/* ================= INTERACTIVE SERVICES SHOWCASE ================= */}

      <section
        className="vv-services-showcase"
        ref={servicesRef}
      >
        <div className="vv-services-showcase-heading vv-service-reveal">
          <div>
            <span className="vv-section-eyebrow">
              WHAT WE OFFER
            </span>

            <h2>
              Your Land Journey,
              <br />
              <span>Our Services.</span>
            </h2>
          </div>

          <div className="vv-services-showcase-side">
            <span>01 — 05</span>
            <p>
              Explore our services and discover how we can
              support your property journey.
            </p>
          </div>
        </div>

        <div className="vv-services-interactive">
          {/* Left: service list */}

          <div className="vv-services-list">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.number}
                  className={`vv-service-list-item ${
                    activeService === index ? "active" : ""
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <span className="vv-service-number">
                    {service.number}
                  </span>

                  <div className="vv-service-list-content">
                    <h3>{service.title}</h3>
                    <p>{service.short}</p>
                  </div>

                  <div className="vv-service-list-icon">
                    <Icon size={21} />
                  </div>

                  <ArrowRight
                    className="vv-service-list-arrow"
                    size={18}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: active service visual */}

          <div className="vv-service-feature">
            <div className="vv-service-feature-image">
              {services.map((service, index) => (
                <img
                  key={service.number}
                  src={service.image}
                  alt={service.title}
                  className={
                    activeService === index ? "active" : ""
                  }
                />
              ))}

              <div className="vv-service-feature-overlay"></div>

              <div className="vv-service-feature-tag">
                <Sparkles size={14} />
                {services[activeService].tag}
              </div>

              <div className="vv-service-feature-number">
                {services[activeService].number}
              </div>

              <div className="vv-service-feature-bottom">
                <span>VETRI VINAYAGA TRADERS</span>
                <span>LAND COLLECTION</span>
              </div>
            </div>

            <div className="vv-service-feature-description">
              <div className="vv-feature-description-top">
                <span>
                  SERVICE {services[activeService].number}
                </span>

                <div className="vv-feature-description-line"></div>
              </div>

              <h3>{services[activeService].title}</h3>

              <p>{services[activeService].description}</p>

              <Link
                to="/contact"
                className="vv-service-feature-link"
              >
                Enquire About This Service
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAND BUYING JOURNEY ================= */}

      <section className="vv-services-journey">
        <div className="vv-journey-header vv-service-reveal">
          <span className="vv-section-eyebrow">
            SIMPLE. CLEAR. GUIDED.
          </span>

          <h2>
            Your Journey to
            <br />
            <span>Land Ownership.</span>
          </h2>

          <p>
            Five simple steps. One meaningful decision.
            Here's how your land journey unfolds.
          </p>
        </div>

        <div className="vv-journey-timeline">
          <div className="vv-journey-line"></div>

          {journeySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                className="vv-journey-step vv-service-reveal"
                key={step.number}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="vv-journey-marker">
                  <span>{step.number}</span>
                </div>

                <div className="vv-journey-step-icon">
                  <Icon size={25} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="vv-services-expertise">
        <div className="vv-expertise-container">
          <div className="vv-expertise-visual vv-service-reveal">
            <div className="vv-expertise-image">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90"
                alt="Beautiful open land and natural surroundings"
              />
            </div>

            <div className="vv-expertise-image-badge">
              <ShieldCheck size={27} />

              <div>
                <span>OUR COMMITMENT</span>
                <strong>Guidance With Care</strong>
              </div>
            </div>

            <div className="vv-expertise-image-caption">
              YOUR LAND. YOUR FUTURE.
            </div>
          </div>

          <div className="vv-expertise-content vv-service-reveal">
            <span className="vv-section-eyebrow">
              WHY VETRI VINAYAGA
            </span>

            <h2>
              The Right Guidance
              <br />
              <span>Makes All the Difference.</span>
            </h2>

            <p className="vv-expertise-description">
              Every land decision deserves attention.
              We focus on understanding your needs and helping
              you explore suitable opportunities with confidence.
            </p>

            <div className="vv-expertise-points">
              {trustPoints.map((point, index) => (
                <div className="vv-expertise-point" key={point}>
                  <span className="vv-expertise-point-number">
                    0{index + 1}
                  </span>

                  <p>{point}</p>

                  <CheckCircle2 size={18} />
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="vv-expertise-button"
            >
              Connect With Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= BRAND STATEMENT ================= */}

      <section className="vv-services-statement">
        <div className="vv-statement-grid"></div>

        <div className="vv-statement-content vv-service-reveal">
          <span className="vv-statement-eyebrow">
            A VISION THAT STARTS WITH LAND
          </span>

          <div className="vv-statement-quote-mark">“</div>

          <h2>
            Land Is More Than Property.
            <br />
            <span>It's a Possibility.</span>
          </h2>

          <p>
            Every piece of land represents a new beginning.
            At Vetri Vinayaga Traders, we aim to make your
            journey toward owning land clear, comfortable,
            and meaningful.
          </p>

          <div className="vv-statement-signature">
            <span></span>
            VETRI VINAYAGA TRADERS
          </div>
        </div>

        <div className="vv-statement-decoration">
          <LandPlot size={180} strokeWidth={0.6} />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="vv-services-cta">
        <div className="vv-services-cta-container vv-service-reveal">
          <div className="vv-services-cta-content">
            <span className="vv-section-eyebrow">
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2>
              Let's Find the Land
              <br />
              <span>That Fits Your Vision.</span>
            </h2>

            <p>
              Explore available plots or connect with our team
              to begin your land journey.
            </p>

            <div className="vv-services-cta-actions">
              <Link
                to="/properties"
                className="vv-services-cta-primary"
              >
                Explore Properties
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="vv-services-cta-secondary"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          <div className="vv-services-cta-visual">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=90"
              alt="Natural landscape representing new possibilities"
            />

            <div className="vv-cta-image-overlay"></div>

            <div className="vv-cta-floating-label">
              <span>VV / LAND</span>
              <strong>YOUR FUTURE<br />BEGINS HERE.</strong>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Services;