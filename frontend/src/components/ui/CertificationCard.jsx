import { BiSolidAward } from "react-icons/bi";
import { RevealOnScroll } from "./RevealOnScroll";

export const CertificationCard = ({ cert }) => {
  return (
    <RevealOnScroll>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-green-500/30 bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.3)]"
      >
        <div className="relative aspect-[16/11] overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img
            src={cert.image}
            alt={cert.role}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60 dark:from-black"></div>
          <span className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-600 backdrop-blur-sm dark:bg-black/70 dark:text-green-400">
            {cert.issuer}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold leading-snug text-gray-900 dark:text-white">
            {cert.role}
          </h3>
          <div className="mt-auto inline-flex items-center justify-between gap-2 pt-6">
            <span className="inline-flex items-center gap-2 font-bold text-green-600 transition-all duration-300 group-hover:gap-3 dark:text-green-400">
              <BiSolidAward className="text-lg" />
              View certificate
            </span>
            <span className="text-green-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-green-400">
              →
            </span>
          </div>
        </div>
      </a>
    </RevealOnScroll>
  );
};