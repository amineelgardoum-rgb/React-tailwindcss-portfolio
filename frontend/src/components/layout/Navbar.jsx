import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  `relative py-1 text-sm font-medium cursor-none transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:rounded-full after:bg-green-500 after:transition-all after:duration-300 after:ease-in-out ${
    isActive
      ? "text-green-600 dark:text-green-400 font-bold after:w-full"
      : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 after:hover:w-full"
  }`;

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-[60] bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-gray-200 dark:border-white/10 shadow-lg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/home"
            className="group font-mono text-xl font-bold text-gray-900 dark:text-white cursor-none hover:-translate-y-1 transition-all hover:scale-110 ease-in-out duration-500"
          >
            <span className="transition-all duration-300 group-hover:text-green-500">
              Amine
            </span>
            <span className="text-green-600 dark:text-green-400">.</span>
            <span className="text-green-600 dark:text-green-400">ELGARDOUM</span>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
              <a
                href="/docs/amine_cv.pdf"
                download
                className="rounded-full border border-green-500/60 bg-transparent px-4 py-2 text-sm font-semibold text-green-600 dark:text-green-400 cursor-none transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5"
              >
                Resume
              </a>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-none relative z-50"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-gray-900 dark:text-white cursor-none transition-transform duration-300 z-50"
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};