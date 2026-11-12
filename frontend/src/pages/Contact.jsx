import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  LandPlot,
} from "lucide-react";
import "../styles/Contact.css";


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const inquiry = formData.get("inquiry");
    const message = formData.get("message");

    const subject = encodeURIComponent("Real Estate Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Location: ${location}\nInquiry: ${inquiry}\nMessage: ${message}`
    );

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="vv-contact-page">
      <Helmet>
  <title>
    Contact Vetri Vinayaga Traders | Enquire About Properties
  </title>

  <meta
    name="description"
    content="Contact Vetri Vinayaga Traders for enquiries about residential plots and land investment opportunities in Chennai and Tamil Nadu. Connect with our team."
  />
</Helmet>

      {/* HERO SECTION */}
      <section className="vv-contact-hero">
        <div className="vv-contact-hero-overlay"></div>

        <div className="vv-contact-hero-content">
          <span className="vv-contact-eyebrow">
            
          </span>

          <h1>
            Every Great
            
            Investment Begins
            <br />
            With a <em>Conversation.</em>
          </h1>

          <p>
            Looking for the right land? Let us help you find a place
            where your future can grow.
          </p>

          <Link to="/properties" className="vv-contact-hero-btn">
            Explore Our Properties
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="vv-contact-hero-bottom">
          <span></span>
          <span>LAND • TRUST • FUTURE</span>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="vv-contact-main" id="vv-contact-main">

        <div className="vv-contact-form-card">
          <div className="vv-contact-form-heading">
            <span className="vv-contact-small-label">
              GET IN TOUCH
            </span>

            <h2>
              Tell Us What
              <br />
              You're <span>Looking For.</span>
            </h2>

            <p>
              Share your requirements with us. We'll help you
              discover the right property for your goals.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="vv-contact-form">

            <div className="vv-contact-form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="vv-contact-form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <select name="inquiry" required defaultValue="">
                <option value="" disabled>
                  Type of Inquiry
                </option>
                <option value="Buying a Plot">Buying a Plot</option>
                <option value="Site Visit">Site Visit</option>
                <option value="Investment Guidance">
                  Investment Guidance
                </option>
                <option value="Property Consultation">
                  Property Consultation
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <input
              type="text"
              name="location"
              placeholder="Preferred Location"
            />

            <textarea
              name="message"
              placeholder="Tell us more about your requirements..."
              rows="4"
              required
            ></textarea>

            <button type="submit" className="vv-contact-submit">
              Send Your Inquiry
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="vv-contact-info">

          <div className="vv-contact-info-intro">
            <span className="vv-contact-small-label">
              WE'RE HERE TO HELP
            </span>

            <h3>
              Let's find the
              <br />
              <span>right place</span> for you.
            </h3>

            <p>
              Whether you're planning your first investment or
              exploring new opportunities, we're just a conversation away.
            </p>
          </div>

          <div className="vv-contact-info-item">
            <div className="vv-contact-info-icon">
              <Phone size={21} />
            </div>

            <div>
              <span>PHONE</span>
              <a href="tel:+919344676369 ">+91 93446 76369 </a>
              <small>Call us for property enquiries</small>
            </div>
          </div>

          <div className="vv-contact-info-item">
            <div className="vv-contact-info-icon">
              <Mail size={21} />
            </div>

            <div>
              <span>EMAIL</span>
              <a href="mailto:vetrivinayagarealestate@gmail.com">
                vetrivinayagarealestate@gmail.com
              </a>
              <small>We welcome your questions</small>
            </div>
          </div>

          <div className="vv-contact-info-item">
            <div className="vv-contact-info-icon">
              <MapPin size={21} />
            </div>

            <div>
              <span>OFFICE LOCATION</span>
              <p> 165 chithirakara theru Madurai, Tamil Nadu 625001</p>
              <small>Visit us for a personal consultation</small>
            </div>
          </div>

          <div className="vv-contact-info-item">
            <div className="vv-contact-info-icon">
              <Clock size={21} />
            </div>

            <div>
              <span>WORKING HOURS</span>
              <p>Monday – Saturday</p>
              <small>9:00 AM – 6:00 PM</small>
            </div>
          </div>

        </div>
      </section>

      {/* COMPACT CTA SECTION */}
      <section className="vv-contact-cta">
        <div className="vv-contact-cta-content">
          <span className="vv-contact-small-label">
            YOUR NEXT CHAPTER
          </span>

          <h2>
            A little land.
            <br />
            <span>A lasting future.</span>
          </h2>

          <p>
            Discover thoughtfully selected plots that bring
            your future plans closer to reality.
          </p>

          <Link to="/properties" className="vv-contact-cta-btn">
            Explore Available Plots
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="vv-contact-cta-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85"
            alt="Beautiful open land with a green landscape"
          />

          <div className="vv-contact-cta-image-caption">
            <LandPlot size={16} />
            <span>YOUR LAND. YOUR FUTURE.</span>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
