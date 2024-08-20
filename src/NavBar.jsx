export function NavBar({ isMenuOpen, toggleMenu, hasScrolled }) {
  return (
    <header
      className={`${
        hasScrolled ? "bg-beige shadow-lg" : "bg-transparent"
      } p-4 z-50 w-full sticky top-0 transition-colors duration-300`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <a href="#">
            <img
              src="./favicon-32x32.png"
              alt="GreenLoop Logo"
              className="mx-4 scale-15"
            />
          </a>
          <a href="#" className="text-xl">
            GreenLoop
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center">
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex gap-x-14 items-center`}
          >
            <li className="flex items-center">
              <a href="#" className="hover:text-rgreen">
                Impact Tracker
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-rgreen">
                Sustainability Report
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-rgreen">
                Gallery
              </a>
            </li>
            <li className="bg-rgreen text-white rounded-3xl hover:bg-green-700 flex items-center">
              <a href="#" className="block px-8 py-3 hover:text-white">
                Plans
              </a>
            </li>
          </ul>

          {/* Menu Icon (visible on small screens only) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              <img src="./menu.svg" alt="Menu" className="w-8 h-8" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
