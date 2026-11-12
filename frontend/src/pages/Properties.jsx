import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Ruler,
  Compass,
  CarFront,
  LandPlot,
  Search,
  SlidersHorizontal,
  CheckCircle2,
  Trees,
} from "lucide-react";

import "../styles/Properties.css";


const properties = [
  {
    id: 1,
    plotNo: "VV-001",
    title: "Premium Residential Plot",
    location: "Sample Location, Tamil Nadu",
    category: "Residential",
    area: "1200",
    dimensions: "30 × 40 ft",
    facing: "East Facing",
    roadWidth: "30 ft Road",
    price: "₹18 Lakhs",
    pricePerSqft: "₹1,500 / sq.ft",
    status: "Available",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    description:
      "A thoughtfully positioned residential plot offering a great opportunity for future land ownership.",
  },

  {
    id: 2,
    plotNo: "VV-002",
    title: "Corner Residential Plot",
    location: "Sample Location, Tamil Nadu",
    category: "Corner Plot",
    area: "1500",
    dimensions: "30 × 50 ft",
    facing: "North Facing",
    roadWidth: "40 ft Road",
    price: "₹22.5 Lakhs",
    pricePerSqft: "₹1,500 / sq.ft",
    status: "Available",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=85",
    description:
      "A corner plot with two-side road access, suitable for customers looking for flexible plot positioning.",
  },

  {
    id: 3,
    plotNo: "VV-003",
    title: "Investment Land Plot",
    location: "Sample Location, Tamil Nadu",
    category: "Investment",
    area: "2400",
    dimensions: "40 × 60 ft",
    facing: "South Facing",
    roadWidth: "30 ft Road",
    price: "₹30 Lakhs",
    pricePerSqft: "₹1,250 / sq.ft",
    status: "Available",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=900&q=85",
    description:
      "A larger land parcel for buyers exploring long-term property investment opportunities.",
  },

  {
    id: 4,
    plotNo: "VV-004",
    title: "Garden View Residential Plot",
    location: "Sample Location, Tamil Nadu",
    category: "Residential",
    area: "1000",
    dimensions: "25 × 40 ft",
    facing: "West Facing",
    roadWidth: "23 ft Road",
    price: "₹12.5 Lakhs",
    pricePerSqft: "₹1,250 / sq.ft",
    status: "Available",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    description:
      "A compact residential plot option for buyers seeking a smaller land parcel.",
  },
];


const categories = [
  "All Plots",
  "Residential",
  "Investment",
  "Corner Plot",
];


function Properties() {
  const [activeCategory, setActiveCategory] = useState("All Plots");

  const [searchLocation, setSearchLocation] = useState("");

  const filteredProperties = properties.filter((property) => {
    const categoryMatch =
      activeCategory === "All Plots" ||
      property.category === activeCategory;

    const locationMatch = property.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());

    return categoryMatch && locationMatch;
  });

  const featuredProperty = filteredProperties.find(
    (property) => property.featured
  );

  const otherProperties = filteredProperties.filter(
    (property) => property.id !== featuredProperty?.id
  );


  return (
    <div className="vv-properties-page">


      
{/* ================= PROPERTIES EDITORIAL HERO ================= */}

<section className="vv-property-editorial-hero">

  <div className="vv-property-editorial-container">

    {/* LEFT CONTENT */}

    <div className="vv-property-editorial-content">

      <div className="vv-property-editorial-label">
        <span></span>
        VETRI VINAYAGA · LAND COLLECTION
      </div>

      <h1>
        The ground
        <br />
        <span>for your</span>
        <br />
        next chapter.
      </h1>

      <p>
        Explore carefully selected land opportunities.
        Find a plot that brings your vision closer
        to reality.
      </p>

      <div className="vv-property-editorial-actions">

        <Link
          to="/contact"
          className="vv-property-editorial-button"
        >
          Discover Available Plots
          <ArrowRight size={18} />
        </Link>

      </div>

      <div className="vv-property-editorial-bottom">

        <div>
          <span className="vv-editorial-small-label">
            OUR FOCUS
          </span>

          <strong>LAND · PLOTS · OPPORTUNITIES</strong>
        </div>

        <div className="vv-editorial-bottom-line"></div>

      </div>

    </div>


    {/* RIGHT IMAGE */}

    <div className="vv-property-editorial-visual">

      <div className="vv-property-editorial-image">

        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90"
          alt="Open green land available for property development"
        />

      </div>


      {/* Gold Floating Badge */}

      <div className="vv-property-editorial-badge">

        <span className="vv-editorial-badge-top">
          VETRI VINAYAGA
        </span>

        <div className="vv-editorial-badge-icon">
          <LandPlot size={28} />
        </div>

        <strong>
          YOUR LAND.
          <br />
          YOUR FUTURE.
        </strong>

      </div>


      {/* Vertical Accent */}

      <div className="vv-property-editorial-vertical">
        A NEW BEGINNING STARTS HERE
      </div>


      {/* Image Caption */}

      <div className="vv-property-editorial-caption">

        <span>LAND IS THE BEGINNING.</span>

        <span>VV / PROPERTIES</span>

      </div>

    </div>

  </div>

</section>



      {/* ================= PROPERTY INTRO ================= */}

      <section className="vv-properties-intro">

        <div className="vv-properties-intro-container">

          <div className="vv-properties-intro-left">

            <span className="vv-properties-section-label">
              EXPLORE OUR LAND
            </span>

            <h2>
              Every Plot Has
              <br />

              <span>A Possibility.</span>
            </h2>

          </div>

          <div className="vv-properties-intro-right">

            <p>
              Whether you are looking for a residential plot
              or a land investment opportunity, discover
              property options that align with your plans.
            </p>

            <div className="vv-properties-intro-line"></div>

          </div>

        </div>

      </section>


      {/* ================= SEARCH & FILTER ================= */}

      <section className="vv-properties-listing">

        <div className="vv-properties-listing-container">


          {/* Listing Header */}

          <div className="vv-properties-listing-header">

            <div>

              <span className="vv-properties-section-label">
                PROPERTY COLLECTION
              </span>

              <h2>
                Available <span>Plots</span>
              </h2>

            </div>

            <div className="vv-properties-count">

              <LandPlot size={20} />

              <span>
                {filteredProperties.length} Plots
              </span>

            </div>

          </div>


          {/* Search and Filters */}

          <div className="vv-properties-filter-bar">

            <div className="vv-properties-search">

              <Search size={19} />

              <input
                type="text"
                placeholder="Search by location..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />

            </div>

            <div className="vv-properties-filter-label">

              <SlidersHorizontal size={18} />

              <span>Filter</span>

            </div>

            <div className="vv-properties-filter-buttons">

              {categories.map((category) => (

                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "vv-property-filter active"
                      : "vv-property-filter"
                  }
                  onClick={() => setActiveCategory(category)}
                >

                  {category}

                </button>

              ))}

            </div>

          </div>


          {/* ================= FEATURED PROPERTY ================= */}

          {featuredProperty && (

            <div className="vv-property-featured">

              <div className="vv-property-featured-image">

                <img
                  src={featuredProperty.image}
                  alt={featuredProperty.title}
                />

                <div className="vv-property-featured-badge">

                  <span className="vv-property-badge-dot"></span>

                  FEATURED PLOT

                </div>

                <div className="vv-property-featured-plot-number">

                  {featuredProperty.plotNo}

                </div>

              </div>


              <div className="vv-property-featured-content">

                <div className="vv-property-featured-top">

                  <span className="vv-property-category">
                    {featuredProperty.category}
                  </span>

                  <span className="vv-property-status">

                    <CheckCircle2 size={14} />

                    {featuredProperty.status}

                  </span>

                </div>


                <h3>
                  {featuredProperty.title}
                </h3>


                <div className="vv-property-location">

                  <MapPin size={17} />

                  <span>
                    {featuredProperty.location}
                  </span>

                </div>


                <p className="vv-property-description">

                  {featuredProperty.description}

                </p>


                {/* Property Details */}

                <div className="vv-property-featured-details">

                  <div className="vv-property-detail">

                    <Ruler size={20} />

                    <div>

                      <span>Plot Area</span>

                      <strong>
                        {featuredProperty.area} sq.ft
                      </strong>

                    </div>

                  </div>


                  <div className="vv-property-detail">

                    <LandPlot size={20} />

                    <div>

                      <span>Dimensions</span>

                      <strong>
                        {featuredProperty.dimensions}
                      </strong>

                    </div>

                  </div>


                  <div className="vv-property-detail">

                    <Compass size={20} />

                    <div>

                      <span>Facing</span>

                      <strong>
                        {featuredProperty.facing}
                      </strong>

                    </div>

                  </div>


                  <div className="vv-property-detail">

                    <CarFront size={20} />

                    <div>

                      <span>Road Access</span>

                      <strong>
                        {featuredProperty.roadWidth}
                      </strong>

                    </div>

                  </div>

                </div>


                {/* Price */}

                <div className="vv-property-featured-footer">

                  <div className="vv-property-price">

                    <span>Plot Price</span>

                    <h4>
                      {featuredProperty.price}
                    </h4>

                    <p>
                      {featuredProperty.pricePerSqft}
                    </p>

                  </div>


                  <Link
                    to="/contact"
                    className="vv-property-enquiry-button"
                  >

                    Enquire Now

                    <ArrowUpRight size={19} />

                  </Link>

                </div>

              </div>

            </div>

          )}


          {/* ================= OTHER PROPERTIES ================= */}

          <div className="vv-properties-grid">

            {otherProperties.map((property, index) => (

              <article
                className="vv-property-card"
                key={property.id}
              >

                {/* Card Image */}

                <div className="vv-property-card-image">

                  <img
                    src={property.image}
                    alt={property.title}
                  />

                  <span className="vv-property-card-plot-number">

                    {property.plotNo}

                  </span>

                  <span className="vv-property-card-category">

                    {property.category}

                  </span>

                </div>


                {/* Card Content */}

                <div className="vv-property-card-content">

                  <div className="vv-property-card-location">

                    <MapPin size={15} />

                    <span>
                      {property.location}
                    </span>

                  </div>


                  <h3>
                    {property.title}
                  </h3>


                  {/* Plot Area */}

                  <div className="vv-property-card-area">

                    <div>

                      <span>AREA</span>

                      <strong>
                        {property.area} sq.ft
                      </strong>

                    </div>

                    <div>

                      <span>DIMENSION</span>

                      <strong>
                        {property.dimensions}
                      </strong>

                    </div>

                  </div>


                  {/* Property Info */}

                  <div className="vv-property-card-info">

                    <div>

                      <Compass size={16} />

                      <span>
                        {property.facing}
                      </span>

                    </div>

                    <div>

                      <CarFront size={16} />

                      <span>
                        {property.roadWidth}
                      </span>

                    </div>

                  </div>


                  {/* Card Footer */}

                  <div className="vv-property-card-footer">

                    <div className="vv-property-card-price">

                      <span>Starting Price</span>

                      <h4>
                        {property.price}
                      </h4>

                    </div>


                    <Link
                      to="/contact"
                      className="vv-property-card-button"
                      aria-label={`Enquire about ${property.title}`}
                    >

                      <ArrowUpRight size={22} />

                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* Empty State */}

          {filteredProperties.length === 0 && (

            <div className="vv-properties-empty">

              <LandPlot size={40} />

              <h3>
                No plots found
              </h3>

              <p>
                Try another location or category.
              </p>

              <button
                onClick={() => {
                  setActiveCategory("All Plots");
                  setSearchLocation("");
                }}
              >

                Reset Filters

              </button>

            </div>

          )}

        </div>

      </section>


      {/* ================= LAND CTA ================= */}

      <section className="vv-properties-cta">

        <div className="vv-properties-cta-container">

          <div className="vv-properties-cta-icon">

            <Trees size={35} />

          </div>

          <div className="vv-properties-cta-content">

            <span>
              STILL LOOKING FOR THE RIGHT PLOT?
            </span>

            <h2>

              Your Dream Land
              <br />

              <span>May Be One Enquiry Away.</span>

            </h2>

            <p>
              Tell us what you are looking for.
              Our team will help you explore suitable
              land opportunities.
            </p>

          </div>


          <Link
            to="/contact"
            className="vv-properties-cta-button"
          >

            Talk to Our Team

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>


    </div>
  );
}

export default Properties;