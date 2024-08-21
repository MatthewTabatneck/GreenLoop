import { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import { FrontBody } from "./Front-Body";
import "./App.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-back">
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} hasScrolled={hasScrolled} />
      <FrontBody/>
      
      <div>
        <main className="p-8">
          <h2 className="text-2xl font-bold mb-4">Scroll Down to Test</h2>
          {/* Repeated content to create a scrollable area */}
          {[...Array(50)].map((_, index) => (
            <div key={index} className="bg-white shadow-md p-6 mb-4 rounded-lg">
              <p className="text-gray-800">
                Content block {index + 1}: TESTING SCROLL.
              </p>
            </div>
          ))}
        </main>
        <footer className="bg-blue-500 text-white text-center p-4">
          <p>End of Page - Footer</p>
        </footer>
      </div>
    </div>
  );
}
