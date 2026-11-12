import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/App.css"
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import HashScroll from "./components/HashScroll";
import FindLand from "./pages/FindLand";

function App() {
  return (
    
      <div className="vv-app">
        <HashScroll />

        {/* Navbar */}
        <Navbar />

        {/* Main Pages */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/about" element={<About />} />
          
            <Route path="/properties" element={<Properties />} />
          
            <Route path="/services" element={<Services />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/findland" element={<FindLand />} />
          </Routes>

        </main>

        {/* Footer */}
        <Footer />

      </div>
    
  );
}

export default App;

