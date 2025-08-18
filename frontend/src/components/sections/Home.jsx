
import { RevealOnScroll } from "../RevealOnScroll";
import { HeroText } from "../TypeWriter";
import { Link } from "react-router-dom";

// Notice it no longer needs menuOpen or setMenuOpen props
export const Home = () => {
  return (
    <>
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-10"
    >
      <RevealOnScroll>
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent leading-tight">
            <span className="p-0">
              <HeroText
                strings={[
                  "I'm",
                  "Amine ELGARDOUM",
                  "Data Engineering",
                  "Data Enthusiast",
                ]}
              />
            </span>
          </h1>

          {/* Bio Paragraph - with corrected styling */}
          <p
            className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto 
                       bg-gray-900/40 backdrop-blur-sm p-6 rounded-lg 
                       border border-green-500/30 
                       transition-all duration-300 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/10"
          >
            As a Data Engineer, I specialize in architecting and maintaining
            robust data pipelines. I am passionate about transforming raw data
            into reliable, high-quality assets through efficient ETL/ELT
            processes. My core focus is on building scalable systems that
            empower data-driven decision-making.
          </p>

          {/* Call-to-Action Buttons - with corrected styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects" // Use anchor link for single-page scrolling
              className="w-full sm:w-auto border border-green-500 text-green-500 py-3 px-8 rounded-md font-semibold 
                         transition-all duration-300 ease-in-out
                         hover:bg-green-500 hover:text-black hover:shadow-lg hover:shadow-green-500/40 
                         hover:-translate-y-1 cursor-none"
            >
              View Projects
            </Link>
            <Link
              to="/contact" // Use anchor link for single-page scrolling
              className="w-full sm:w-auto border border-gray-600 text-gray-300 py-3 px-8 rounded-md font-semibold
                         transition-all duration-300 ease-in-out
                         hover:border-green-500 hover:text-green-500 
                         hover:-translate-y-1 cursor-none"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
    </>
  );
};