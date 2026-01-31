import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[500px_1fr] gap-8 lg:gap-16 items-start lg:items-center">
            
            {/* Left Side - Profile Image */}
            <RevealOnScroll>
              <div className="order-2 lg:order-1">
                <div 
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden 
                           border-4 border-green-500/40 shadow-2xl
                           transition-all duration-300 hover:border-green-500/20 
                           hover:scale-[1.02]
                           hover:-transalte-y-1"
                >
                  <img 
                    src="/images/amine.png" 
                    alt="Amine ELGARDOUM - Data Engineer" 
                    className="w-full h-full object-cover" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Side - Main Content */}
            <RevealOnScroll>
              <div className="order-1 lg:order-2 space-y-8 lg:pt-12">
                
                {/* Subtitle */}
                <div className="space-y-3">
                  
                  {/* Main Title - Huge Bold Text */}
                  <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7rem] 
                                font-black leading-[0.9] tracking-tighter">
                    <span className="inline-block text-white">DATA<span>.</span></span>
                    <span className="inline-block bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                                   bg-clip-text text-transparent">
                      ENGINEER
                    </span>
                  </h1>
                </div>

                {/* Name and Description */}
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Amine ELGARDOUM
                    </h3>
                    <p className="text-xl text-green-400 font-medium">
                      Data <span className="text-xl text-white">&</span> AI Engineer
                    </p>
                  </div>
                  
                  <p className="text-gray-300 bg-black p-6 border-green-500/100 border-2 rounded text-lg md:text-xl leading-relaxed max-w-2xl duration-300 ease-in-out hover:-translate-y-2 ">
                    Building robust <span className="text-green-400 font-semibold">data pipelines</span> and 
                    <span className="text-green-400 font-semibold"> intelligent systems</span> that transform 
                    raw data into actionable insights. Specializing in scalable architecture, ETL/ELT processes, 
                    and AI-powered solutions.
                  </p>
                </div>

              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};