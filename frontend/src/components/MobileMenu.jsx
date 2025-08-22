import { Link } from "react-router-dom";
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
            transition-all duration-300 ease-in-out 
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute cursor-none top-6 right-6 text-white text-3xl focus:outline-none "
        aria-label="Close Menu"
      >
        &times;
      </button>
      <Link
              to="/home"
              onClick={()=>setMenuOpen(false)}
              className={`text-2xl  hover:-translate-y-1 hover:text-green-600 cursor-none font-semibold text-white my-4 transform transition-all ease-in-out duration-300
                ${
                  menuOpen
                  ?"opacity-100 translate-y-0"
                  :"opacity-0 translate-y-5"
                } `}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={()=>setMenuOpen(false)}
              className={`text-2xl hover:-translate-y-1 hover:text-green-600 cursor-none font-semibold text-white my-4 transform transition-all ease-in-out duration-300
                ${
                  menuOpen
                  ?"opacity-100 translate-y-0"
                  :"opacity-0 translate-y-5"
                } `}
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={()=>setMenuOpen(false)}
              className={`text-2xl hover:-translate-y-1 hover:text-green-600 cursor-none font-semibold text-white my-4 transform transition-all ease-in-out duration-300
                ${
                  menuOpen
                  ?"opacity-100 translate-y-0"
                  :"opacity-0 translate-y-5"
                } `}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={()=>setMenuOpen(false)}
              className={`text-2xl hover:-translate-y-1 hover:text-green-600 cursor-none font-semibold text-white my-4 transform transition-all ease-in-out duration-300
                ${
                  menuOpen
                  ?"opacity-100 translate-y-0"
                  :"opacity-0 translate-y-5"
                } `}
            >
              Contact
            </Link>
    </div>
  );
};
