import { RevealOnScroll } from "../RevealOnScroll";
import { HeroText } from "../TypeWriter";
import { Link } from "react-router-dom";

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
                    "Data/AI Engineer",
                    "Data/AI Enthusiast",
                  ]}
                />
              </span>
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto 
                       bg-gray-900/40 backdrop-blur-sm p-6 rounded-lg 
                       border border-green-500/30 
                       transition-all duration-500 hover:border-green-500/60 hover:shadow-[0px_0px_30px_green] hover:-translate-y-2"
            >
              As a Data/AI Engineer, I specialize in architecting and
              maintaining robust data pipelines. I am passionate about
              transforming raw data into reliable, high-quality assets through
              efficient ETL/ELT processes. My core focus is on building scalable
              systems that empower data-driven decision-making.
            </p>

            {/* Call-to-Action Buttons - with corrected styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center  gap-4">
              <Link
                to="/projects" // Use anchor link for single-page scrolling
                className="w-full sm:w-auto border border-green-500/100 text-green-500 py-3 px-8 rounded-md font-semibold 
                         transition-all duration-500 ease-in-out
                         hover:bg-green-500 hover:text-black  
                         hover:shadow-[0px_0px_20px_green]
                         hover:-translate-y-1 cursor-none inline-block group"
              >
                View Projects{" "}
                <span className="inline-block text-xl group-hover:translate-x-2 transition-all ease-in-out duration-500 ">
                  →
                </span>
              </Link>
              <Link
                to="/contact" // Use anchor link for single-page scrolling
                className="w-full sm:w-auto border border-gray-600/100 text-gray-300 py-3 px-8 rounded-md font-semibold
                         transition-all duration-500 ease-in-out
                         hover:border-green-500
                         hover:text-black 
                         hover:bg-green-400
                         hover:-translate-y-1
                        cursor-none hover:shadow-[0px_0px_50px_green] group inline-block"
              >
                Contact Me{" "}
                <span className=" inline-block text-xl group-hover:translate-x-2 duration-500 ease-in-out transition-all">
                  →
                </span>
              </Link>
              <a
                href="/amine_cv.pdf" // PDF in public/
                download
                className="w-full sm:w-auto border border-green-600/100 text-green-500 py-3 px-8 rounded-md font-semibold
                          transition-all duration-500 ease-in-out
                          hover:border-green-500
                          hover:text-black 
                          hover:bg-green-400
                          hover:-translate-y-1
                          cursor-none hover:shadow-[0px_0px_50px_green] group inline-block"
              >
                Download CV{" "}
                <span className="inline-block text-xl group-hover:translate-x-2 duration-500 ease-in-out transition-all">
                  →
                </span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
