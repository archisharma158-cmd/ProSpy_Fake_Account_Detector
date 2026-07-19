import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-cyan-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-cyan-400 text-3xl font-bold"
        >
          <FaUserSecret />
          <span>ProSpy</span>
        </Link>

        {/* Menu */}
        <ul className="flex gap-8 text-white font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/detect"
              className="hover:text-cyan-400 transition"
            >
              Detect
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="hover:text-cyan-400 transition"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;