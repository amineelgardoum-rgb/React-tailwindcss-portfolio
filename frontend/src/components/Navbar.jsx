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
          <Link className="font-mono text-xl font-bold text-white cursor-none hover:-translate-y-1 transition-all hover:scale-110 ease-in-out duration-500 "  to="/home">
            <span className="text-white hover:text-green-500 transition-all ease-in-out hover:drop-shadow-[0_0_50px_green] duration-500">Amine</span><span>.</span><span className="text-green-400 hover:text-green-800 transition-all ease-in-out duration-500">ELGARDOUM</span>
          </Link>
          
          <a
            className="w-7 h-5 relative cursor-none z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className="text-gray-300 hover:text-green-300 hover:scale-110 cursor-none transition-all hover:-translate-y-1 duration-500 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-green-300 hover:scale-110 cursor-none transition-all hover:-translate-y-1 ease-in-out duration-500"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-green-300 hover:scale-110 cursor-none transition-all hover:-translate-y-1 ease-in-out duration-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};