
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "../styles/CTA.css";

function CTA() {
  return (
    <section className="vv-cta">
      <div className="vv-cta-content">
        <span className="vv-cta-label">YOUR FUTURE BEGINS HERE</span>

        <h2>
          Find Land. <span>Build Dreams.</span>
        </h2>

        <p>
          The right land today. A better tomorrow.
        </p>

        <Link to="/findland" className="vv-cta-button">
          Explore Lands
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="vv-cta-visual">
        <img
  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85"
  alt="Beautiful land for investment"
/>
      </div>
    </section>
  );
}

export default CTA;
