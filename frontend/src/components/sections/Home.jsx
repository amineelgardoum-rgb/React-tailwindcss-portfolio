import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";
import { HeroText } from "../TypeWriter";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <div className="w-full max-w-[1400px]  my-auto px-6 lg:px-12 py-10">
          <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[500px_1fr] gap-8 lg:gap-16 items-start lg:items-center">
            <RevealOnScroll>
              <div className="order-2 lg:order-1 flex items-center justify-center min-h-full pt-10">
                <div
                  className="relative w-full h-full aspect-[4/3] rounded-2xl overflow-hidden 
               border-4 border-green-500/40 shadow-2xl
               shadow-green-500/20
               transition-all duration-500 hover:border-green-500/60 
                hover:shadow-green-500/40
               hover:-translate-y-1"
                >
                  <img
                    src="/images/amine.png"
                    alt="Amine ELGARDOUM - Data Engineer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="order-1 lg:order-2 space-y-8 lg:pt-12">
                {/* Main Title - Huge Bold Text */}
                <div className="space-y-3">
                  <h1
                    className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7rem] 
            font-black leading-[0.9] tracking-tighter
            min-h-[calc(15vw*0.9)] sm:min-h-[calc(12vw*0.9)] md:min-h-[calc(10vw*0.9)] 
            lg:min-h-[calc(8vw*0.9)] xl:min-h-[calc(7rem*0.9)]"
                  >
                    <span className="inline-block text-white ">
                      DATA
                      <span className="inline-block animate-bounce text-green-500/80">
                        {" "}
                        .{" "}
                      </span>{" "}
                    </span>
                    <HeroText
                      strings={["ENGINEER","Student"]}
                      className="inline-block bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent"
                    />
                  </h1>
                </div>

                <div className="space-y-5 pt-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Amine EL GARDOUM
                    </h3>
                    <p className="text-xl text-green-400 font-medium">
                      Data <span className="text-xl text-white">&</span> AI
                      Engineer{" "}
                      <span className="text-xl text-white"> Student </span>
                    </p>
                  </div>

                  <p className="text-gray-300 bg-black/50 backdrop-blur-sm p-6 border-green-500 border-2 rounded-lg text-lg md:text-xl leading-relaxed max-w-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    Building robust{" "}
                    <span className="text-green-400 font-semibold">
                      data pipelines
                    </span>{" "}
                    and
                    <span className="text-green-400 font-semibold">
                      {" "}
                      intelligent systems
                    </span>{" "}
                    that transform raw data into actionable insights.
                    Specializing in scalable architecture, ETL/ELT processes,
                    and AI-powered solutions.
                  </p>
                </div>

                {/* Enhanced CTA Button */}
                <div className="flex gap-4 pt-2">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-8 py-4 
                             bg-green-500 text-black font-bold text-lg
                             rounded-lg shadow-lg shadow-green-500/50
                             hover:-translate-y-1
                             transition-all duration-600 ease-in-out
                             border-2 border-green-400 cursor-none
                             hover:bg-black hover:text-green-500
                             group"
                  >
                    View My Projects
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>

                  {/* Optional: Secondary CTA
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 
                             bg-transparent text-green-400 font-bold text-lg
                             rounded-lg border-2 border-green-500
                             hover:bg-green-500/10 hover:scale-105 hover:-translate-y-1
                             transition-all duration-300 ease-out"
                  >
                    Contact Me
                  </Link> */}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};
