import { NavLink } from "react-router-dom";

const mobileLinkClass = ({ isActive }) =>
  `text-2xl hover:-translate-y-1 hover:text-green-600 cursor-none font-semibold text-gray-900 dark:text-white my-4 transform transition-all ease-in-out duration-300 ${
    isActive ? "text-green-600 dark:text-green-400" : ""
  }`;

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 w-full bg-white/90 dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-40 flex flex-col items-center justify-center 
            transition-all duration-300 ease-in-out 
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
    >
      <div className="flex flex-col items-center">
        <NavLink
          to="/home"
          onClick={() => setMenuOpen(false)}
          className={`${mobileLinkClass} ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={`${mobileLinkClass} ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => setMenuOpen(false)}
          className={`${mobileLinkClass} ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={`${mobileLinkClass} ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Contact
        </NavLink>
        <a
          href="/docs/amine_cv.pdf"
          download
          onClick={() => setMenuOpen(false)}
          className={`mt-4 rounded-full border border-green-500/60 px-6 py-2 text-lg font-semibold text-green-600 dark:text-green-400 cursor-none transition-all duration-300 hover:bg-green-500 hover:text-black ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Resume
        </a>
      </div>
    </div>
  );
};