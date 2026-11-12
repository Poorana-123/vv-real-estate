
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    // If there is no hash, don't scroll
    if (!location.hash) return;

    const scrollToSection = () => {
      const sectionId = location.hash.substring(1);
      const targetElement = document.getElementById(sectionId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Wait until the new page renders
    const timeoutId = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return null;
}

export default HashScroll;
