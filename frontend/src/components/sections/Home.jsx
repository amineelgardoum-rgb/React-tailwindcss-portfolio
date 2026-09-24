import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section
      id="home"
      className="h-[calc(100vh-64px)] w-full flex items-center justify-center relative z-10 overflow-x-hidden"
    >
      {/* Background picture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-transparent to-emerald-600/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50 dark:from-black dark:via-transparent dark:to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-500/10" />
        <img
          src="/images/amine.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30 dark:bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <div className="space-y-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/60 bg-green-500/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-bold tracking-wide text-green-600 dark:text-green-400 uppercase">
                Data Engineer · AI Portfolio
              </span>
            </div>

            {/* Big headline */}
            <h1 className="text-[13vw] sm:text-7xl md:text-8xl xl:text-[7rem] font-black uppercase leading-[0.95] tracking-tight">
              <span className="block text-gray-900 dark:text-white">
                Data<span className="text-green-500">-</span>AI
              </span>
              <span className="block bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]">
                Engineering
              </span>
              <span className="block text-gray-900 dark:text-white">
                Student
              </span>
            </h1>

            {/* Supporting line */}
            <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Building robust data pipelines and intelligent systems that turn
              raw data into actionable insights. Extracting the signal from the
              noise — that is the craft.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-lg border-2 border-green-400 shadow-lg shadow-green-500/50 hover:-translate-y-1 hover:bg-black hover:text-green-500 hover:shadow-green-500/70 transition-all duration-300 ease-in-out cursor-none"
              >
                Try the projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-lg rounded-lg border-2 border-green-500/60 text-green-600 dark:text-green-400 hover:-translate-y-1 hover:bg-green-500 hover:text-black hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300 ease-in-out cursor-none"
              >
                Let&apos;s talk
              </Link>
            </div>

            {/* Hairline */}
            <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};