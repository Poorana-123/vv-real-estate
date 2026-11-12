
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaSlidersH,
  FaSearch,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

import "../styles/FindLand.css";
import tamilNaduMapDesign from "../assets/tamil-nadu-land-map.png";

// DEMO PROPERTY DATA
// Replace this data with your actual backend properties.


const properties = [
  {
    id: 1,
    title: "Premium Residential Plot",
    location: "Madurai",
    area: 1200,
    price: 850000,
    landType: "Residential",
    purpose: "Investment",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    description: "Beautifully located residential land.",
  },
  {
    id: 2,
    title: "Green Valley Land",
    location: "Coimbatore",
    area: 2400,
    price: 1500000,
    landType: "Agricultural",
    purpose: "Farming",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
    description: "Peaceful land surrounded by greenery.",
  },
  {
    id: 3,
    title: "Urban Development Plot",
    location: "Chennai",
    area: 1800,
    price: 1200000,
    landType: "Residential",
    purpose: "Construction",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=85",
    description: "Suitable for future residential development.",
  },
  {
    id: 4,
    title: "Agricultural Investment Land",
    location: "Dindigul",
    area: 5000,
    price: 2000000,
    landType: "Agricultural",
    purpose: "Investment",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    description: "Open land for agricultural investment.",
  },
  {
    id: 5,
    title: "Compact Residential Plot",
    location: "Madurai",
    area: 900,
    price: 650000,
    landType: "Residential",
    purpose: "Construction",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    description: "Compact plot for your future home.",
  },
  {
    id: 6,
    title: "Nature Side Property",
    location: "Theni",
    area: 3000,
    price: 1800000,
    landType: "Agricultural",
    purpose: "Farming",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
    description: "Natural surroundings and open space.",
  },
];

const formatPrice = (price) => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  }

  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} Lakhs`;
  }

  return `₹${price.toLocaleString("en-IN")}`;
};

function FindLand() {
  const routerLocation = useLocation();

  const navigate = useNavigate();

  // Home page search preferences
  const homePreferences = routerLocation.state || {};

  const [location, setLocation] = useState(
    homePreferences.location || "All Locations"
  );

  const [landType, setLandType] = useState(
    homePreferences.landType || "All Types"
  );

  const [budget, setBudget] = useState(
    homePreferences.budget || "Any Budget"
  );

  const [plotSize, setPlotSize] = useState("Any Size");

  const [purpose, setPurpose] = useState("Any Purpose");

  const [sortBy, setSortBy] = useState("Recommended");

  const [favorites, setFavorites] = useState([]);

  const [searchText, setSearchText] = useState("");

  // FILTER PROPERTIES
  const filteredProperties = properties
    .filter((property) => {
      const matchesLocation =
        location === "All Locations" ||
        location === "" ||
        property.location.toLowerCase() === location.toLowerCase();

      const matchesLandType =
        landType === "All Types" ||
        landType === "" ||
        property.landType.toLowerCase() === landType.toLowerCase();

      const matchesBudget = (() => {
        if (budget === "Any Budget" || budget === "") return true;

        if (budget === "Below ₹10 Lakhs") {
          return property.price < 1000000;
        }

        if (budget === "₹10 - ₹25 Lakhs") {
          return property.price >= 1000000 && property.price <= 2500000;
        }

        if (budget === "₹25 - ₹50 Lakhs") {
          return property.price > 2500000 && property.price <= 5000000;
        }

        if (budget === "Above ₹50 Lakhs") {
          return property.price > 5000000;
        }

        return true;
      })();

      const matchesPlotSize = (() => {
        if (plotSize === "Any Size") return true;

        if (plotSize === "Below 1000 sq.ft") {
          return property.area < 1000;
        }

        if (plotSize === "1000 - 2000 sq.ft") {
          return property.area >= 1000 && property.area <= 2000;
        }

        if (plotSize === "2000 - 5000 sq.ft") {
          return property.area > 2000 && property.area <= 5000;
        }

        if (plotSize === "Above 5000 sq.ft") {
          return property.area > 5000;
        }

        return true;
      })();

      const matchesPurpose =
        purpose === "Any Purpose" ||
        property.purpose.toLowerCase() === purpose.toLowerCase();

      const matchesSearch =
        searchText.trim() === "" ||
        property.title.toLowerCase().includes(searchText.toLowerCase()) ||
        property.location.toLowerCase().includes(searchText.toLowerCase());

      return (
        matchesLocation &&
        matchesLandType &&
        matchesBudget &&
        matchesPlotSize &&
        matchesPurpose &&
        matchesSearch
      );
    })
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") {
        return a.price - b.price;
      }

      if (sortBy === "Price: High to Low") {
        return b.price - a.price;
      }

      if (sortBy === "Plot Size: Small to Large") {
        return a.area - b.area;
      }

      if (sortBy === "Plot Size: Large to Small") {
        return b.area - a.area;
      }

      return a.id - b.id;
    });

  // FAVORITE PROPERTY
  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  // CLEAR FILTERS
  const clearFilters = () => {
    setLocation("All Locations");
    setLandType("All Types");
    setBudget("Any Budget");
    setPlotSize("Any Size");
    setPurpose("Any Purpose");
    setSortBy("Recommended");
    setSearchText("");
  };

  return (
    <div className="vv-findland-page">
        <div className="empty">

        </div>

      {/* FILTER BAR */}
      <section className="vv-findland-filterbar">

        <div className="vv-filter-item">
          <FaMapMarkerAlt />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Filter by location"
          >
            <option value="All Locations">All Locations</option>
            <option value="Madurai">Madurai</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Dindigul">Dindigul</option>
            <option value="Theni">Theni</option>
          </select>
        </div>

        <div className="vv-filter-item">
          <FaSlidersH />

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            aria-label="Filter by budget"
          >
            <option value="Any Budget">Any Budget</option>
            <option value="Below ₹10 Lakhs">Below ₹10 Lakhs</option>
            <option value="₹10 - ₹25 Lakhs">₹10 - ₹25 Lakhs</option>
            <option value="₹25 - ₹50 Lakhs">₹25 - ₹50 Lakhs</option>
            <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
          </select>
        </div>

        <div className="vv-filter-item">
          <FaRulerCombined />

          <select
            value={plotSize}
            onChange={(e) => setPlotSize(e.target.value)}
            aria-label="Filter by plot size"
          >
            <option value="Any Size">Any Plot Size</option>
            <option value="Below 1000 sq.ft">Below 1000 sq.ft</option>
            <option value="1000 - 2000 sq.ft">1000 - 2000 sq.ft</option>
            <option value="2000 - 5000 sq.ft">2000 - 5000 sq.ft</option>
            <option value="Above 5000 sq.ft">Above 5000 sq.ft</option>
          </select>
        </div>

        <div className="vv-filter-item">
          <FaSlidersH />

          <select
            value={landType}
            onChange={(e) => setLandType(e.target.value)}
            aria-label="Filter by land type"
          >
            <option value="All Types">All Land Types</option>
            <option value="Residential">Residential</option>
            <option value="Agricultural">Agricultural</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        <div className="vv-filter-item">
          <FaSlidersH />

          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            aria-label="Filter by purpose"
          >
            <option value="Any Purpose">Any Purpose</option>
            <option value="Construction">Construction</option>
            <option value="Investment">Investment</option>
            <option value="Farming">Farming</option>
          </select>
        </div>

        <button
          className="vv-filter-clear"
          onClick={clearFilters}
          type="button"
        >
          <FaTimes />
          Clear
        </button>

      </section>

      {/* MAIN SPLIT LAYOUT */}
      <section className="vv-findland-layout">

        {/* TAMIL NADU MAP INFOGRAPHIC WITH CLICKABLE LOCATION HOTSPOTS */}
        <div className="vv-findland-map vv-findland-map-infographic">
          <img
            className="vv-findland-map-image"
            src={tamilNaduMapDesign}
            alt="Tamil Nadu land locations map featuring Chennai, Coimbatore, Dindigul, Theni, and Madurai"
          />

          <button
            type="button"
            className={`vv-map-hotspot vv-map-hotspot-chennai ${
              location === "Chennai" ? "active" : ""
            }`}
            onClick={() => setLocation("Chennai")}
            aria-label="Show lands in Chennai"
            title="Chennai"
          />

          <button
            type="button"
            className={`vv-map-hotspot vv-map-hotspot-coimbatore ${
              location === "Coimbatore" ? "active" : ""
            }`}
            onClick={() => setLocation("Coimbatore")}
            aria-label="Show lands in Coimbatore"
            title="Coimbatore"
          />

          <button
            type="button"
            className={`vv-map-hotspot vv-map-hotspot-dindigul ${
              location === "Dindigul" ? "active" : ""
            }`}
            onClick={() => setLocation("Dindigul")}
            aria-label="Show lands in Dindigul"
            title="Dindigul"
          />

          <button
            type="button"
            className={`vv-map-hotspot vv-map-hotspot-theni ${
              location === "Theni" ? "active" : ""
            }`}
            onClick={() => setLocation("Theni")}
            aria-label="Show lands in Theni"
            title="Theni"
          />

          <button
            type="button"
            className={`vv-map-hotspot vv-map-hotspot-madurai ${
              location === "Madurai" ? "active" : ""
            }`}
            onClick={() => setLocation("Madurai")}
            aria-label="Show lands in Madurai"
            title="Madurai"
          />
        </div>

        {/* PROPERTY LISTING AREA */}
        <div className="vv-findland-listings">

          {/* LISTING HEADER */}
          <div className="vv-findland-listing-header">

            <div>
              <span className="vv-findland-eyebrow">
                VETRI VINAYAGA TRADERS
              </span>

              <h1>
                {location === "All Locations"
                  ? "Explore Available Lands"
                  : `${location} Lands`}
              </h1>

              <p>
                Discover land opportunities that match your preferences.
              </p>
            </div>

            <div className="vv-findland-count">
              <strong>{filteredProperties.length}</strong>
              <span>Properties Found</span>
            </div>

          </div>

          {/* SEARCH + SORT */}
          <div className="vv-findland-toolbar">

            <div className="vv-findland-search">
              <FaSearch />

              <input
                type="text"
                placeholder="Search property or location..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <select
              className="vv-findland-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort properties"
            >
              <option value="Recommended">Recommended</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Plot Size: Small to Large">
                Plot Size: Small to Large
              </option>
              <option value="Plot Size: Large to Small">
                Plot Size: Large to Small
              </option>
            </select>

          </div>

          {/* PROPERTY CARDS */}
          {filteredProperties.length > 0 ? (
            <div className="vv-findland-property-grid">

              {filteredProperties.map((property) => (
                <article
                  className="vv-findland-property-card"
                  key={property.id}
                >

                  {/* PROPERTY IMAGE */}
                  <div className="vv-property-image">

                    <img
                      src={property.image}
                      alt={property.title}
                      loading="lazy"
                    />

                    <button
                      className={`vv-property-favorite ${
                        favorites.includes(property.id) ? "active" : ""
                      }`}
                      onClick={() => toggleFavorite(property.id)}
                      type="button"
                      aria-label="Add to favorites"
                    >
                      <FaHeart />
                    </button>

                    <span className="vv-property-image-tag">
                      {property.landType}
                    </span>

                  </div>

                  {/* PROPERTY DETAILS */}
                  <div className="vv-property-details">

                    <div className="vv-property-price-row">
                      <h2>{formatPrice(property.price)}</h2>

                      <span className="vv-property-area">
                        {property.area.toLocaleString("en-IN")} sq.ft
                      </span>
                    </div>

                    <h3>{property.title}</h3>

                    <p className="vv-property-description">
                      {property.description}
                    </p>

                    <div className="vv-property-location">
                      <FaMapMarkerAlt />
                      <span>{property.location}, Tamil Nadu</span>
                    </div>

                    <div className="vv-property-card-bottom">

                      <span className="vv-property-purpose">
                        {property.purpose}
                      </span>

                      <button
  type="button"
  className="vv-property-view-btn"
  onClick={() => navigate("/contact")}
>
  Enquire Now
  <FaArrowRight />
</button>

                    </div>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="vv-findland-empty">

              <div className="vv-findland-empty-icon">
                <FaSearch />
              </div>

              <h2>No matching lands found</h2>

              <p>
                Try adjusting your location, budget, or plot size filters.
              </p>

              <button onClick={clearFilters} type="button">
                Clear All Filters
              </button>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default FindLand;
