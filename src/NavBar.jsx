export function NavBar() {
  return (
    <header className="top-0 left-0 w-screen flex flex-row bg-beige p-4 z-50">
      {/* Logo and Title */}
      <div className="flex items-center">
        <a href="#">
          <img
            src="./favicon-32x32.png"
            alt="GreenLoop Logo"
            className="mx-4"
          />
        </a>
        <a href="#" className="text-xl">
          GreenLoop
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="mx-32 flex items-center">
        <ul className="flex gap-x-32">
          <li>
            <a href="#" className="hover:underline hover:text-green-600">
              Plans
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-green-600">
              Impact Tracker
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-green-600">
              Sustainability Report
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-green-600">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-green-600">
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
