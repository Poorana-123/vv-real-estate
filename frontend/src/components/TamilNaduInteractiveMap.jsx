import React from "react";
import "../styles/TamilNaduInteractiveMap.css";

const locations = [
  {
    name: "Chennai",
    x: 230,
    y: 90,
    plots: 12,
  },
  {
    name: "Coimbatore",
    x: 105,
    y: 250,
    plots: 8,
  },
  {
    name: "Dindigul",
    x: 150,
    y: 330,
    plots: 6,
  },
  {
    name: "Madurai",
    x: 180,
    y: 390,
    plots: 15,
  },
  {
    name: "Theni",
    x: 105,
    y: 370,
    plots: 5,
  },
];

const TamilNaduInteractiveMap = ({
  selectedLocation,
  onLocationSelect,
}) => {
  return (
    <div className="vv-interactive-map">

      {/* Map Heading */}
      <div className="vv-map-heading">
        <span className="vv-map-eyebrow">
          EXPLORE LOCATIONS
        </span>

        <h3>
          Find Your Land
          <br />
          <span>Across Tamil Nadu</span>
        </h3>

        <p>
          Select a location on the map to discover
          available properties.
        </p>
      </div>

      {/* SVG Map */}
      <div className="vv-map-svg-wrapper">

        <svg
          viewBox="0 0 350 520"
          className="vv-tamilnadu-svg"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* Decorative Background */}
          <circle
            cx="175"
            cy="260"
            r="190"
            className="vv-map-background-circle"
          />

          <circle
            cx="175"
            cy="260"
            r="150"
            className="vv-map-background-circle-inner"
          />

          {/* Tamil Nadu Map Shape - Stylized SVG */}
          <path
            className="vv-tamilnadu-shape"
            d="
              M 215 30
              L 250 55
              L 270 85
              L 255 115
              L 280 140
              L 265 165
              L 280 190
              L 260 220
              L 245 250
              L 230 280
              L 215 310
              L 205 345
              L 190 380
              L 175 415
              L 155 450
              L 135 480
              L 110 460
              L 100 430
              L 80 400
              L 65 370
              L 70 335
              L 85 300
              L 75 270
              L 90 235
              L 105 205
              L 115 175
              L 130 145
              L 145 115
              L 165 90
              L 185 65
              Z
            "
          />

          {/* Decorative Internal Lines */}
          <path
            d="M 125 150 L 215 190"
            className="vv-map-line"
          />

          <path
            d="M 90 235 L 230 280"
            className="vv-map-line"
          />

          <path
            d="M 75 300 L 205 345"
            className="vv-map-line"
          />

          <path
            d="M 100 430 L 190 380"
            className="vv-map-line"
          />

          {/* Location Markers */}
          {locations.map((location) => {
            const isActive =
              selectedLocation?.toLowerCase() ===
              location.name.toLowerCase();

            return (
              <g
                key={location.name}
                className={`vv-map-location ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  onLocationSelect(location.name)
                }
                role="button"
                tabIndex={0}
                aria-label={`View lands in ${location.name}`}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    onLocationSelect(location.name);
                  }
                }}
              >

                {/* Marker Pulse */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={isActive ? 18 : 13}
                  className="vv-map-marker-pulse"
                />

                {/* Marker */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={isActive ? 9 : 7}
                  className="vv-map-marker"
                />

                {/* Marker Center */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r="3"
                  className="vv-map-marker-center"
                />

                {/* Location Label */}
                <text
                  x={location.x + 15}
                  y={location.y + 5}
                  className="vv-map-location-label"
                >
                  {location.name}
                </text>

              </g>
            );
          })}

        </svg>
      </div>

      {/* Selected Location Info */}
      <div className="vv-map-selected-info">

        <div className="vv-map-info-icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>

        <div>
          <span>Selected Location</span>

          <h4>
            {selectedLocation || "Choose a Location"}
          </h4>
        </div>

      </div>

      {/* Location List */}
      <div className="vv-map-location-list">

        {locations.map((location) => (
          <button
            key={location.name}
            className={`vv-map-location-button ${
              selectedLocation?.toLowerCase() ===
              location.name.toLowerCase()
                ? "active"
                : ""
            }`}
            onClick={() =>
              onLocationSelect(location.name)
            }
          >
            {location.name}

            <i className="fa-solid fa-arrow-right"></i>
          </button>
        ))}

      </div>

    </div>
  );
};

export default TamilNaduInteractiveMap;