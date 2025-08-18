import { useEffect } from "react";
import { Link } from "react-router-dom"; // 1. Import Link

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-[40] bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link className="font-mono text-xl font-bold text-white cursor-none"  to="/home">
            Amine.<span className="text-green-500">ELGARDOUM</span>
          </Link>
          
          <a
            className="w-7 h-5 relative cursor-none z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {/* 3. Replaced all navigation links */}
            <Link
              to="/about"
              className="text-gray-300 hover:text-green-300 hover:scale-110 cursor-none transition-all"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-green-300 hover:scale-110 cursor-none transition-all"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-green-300 hover:scale-110 cursor-none transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};