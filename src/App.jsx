import { useState } from "react";
import { NavBar } from "./NavBar";
import "./App.css";
import { root } from "postcss";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}