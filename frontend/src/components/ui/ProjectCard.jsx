import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";

const taglines = {
  AI: "The Intelligence",
  "Data Engineering": "The Pipeline",
  Notes: "The Knowledge",
  "Coming Soon": "The Next Frontier",
};

export const ProjectCard = ({ project, getSkillInfo }) => {
  const groupedIcons = new Map();
  project.skills.forEach((skill) => {
    const { icon, hoverGlow, hoverColor } = getSkillInfo(skill);
    const iconKey = icon.type.name;
    if (!groupedIcons.has(iconKey)) {
      groupedIcons.set(iconKey, {
        icon,
        hoverGlow,
        hoverColor,
        skills: [skill],
      });
    } else {
      groupedIcons.get(iconKey).skills.push(skill);
    }
  });

  const tagline = taglines[project.category] || "The Project";

  return (
    <RevealOnScroll>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-green-500/30 bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.3)]">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-70 dark:from-black"></div>
          <span className="absolute left-4 top-4 rounded-full border border-green-500/60 bg-white/80 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-green-600 backdrop-blur-sm dark:bg-black/70 dark:text-green-400">
            {project.category}
          </span>
        </div>

        {/* Editorial content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-2xl font-black leading-tight text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-1 italic text-green-600 dark:text-green-400">
            * {tagline}
          </p>

          <p className="mt-3 flex-1 leading-relaxed text-gray-600 line-clamp-3 dark:text-gray-300">
            {project.description}
          </p>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {Array.from(groupedIcons.values()).map((info) => (
              <div
                key={info.skills.join("-")}
                className="group/tooltip relative"
              >
                <div
                  className={`text-2xl text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 ${info.hoverColor} ${info.hoverGlow}`}
                >
                  {info.icon}
                </div>
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-green-500/50 bg-white px-2 py-1 text-xs text-gray-900 shadow-lg opacity-0 transition-opacity duration-300 group-hover/tooltip:opacity-100 dark:bg-black dark:text-white">
                  {info.skills.join(" / ")}
                </span>
              </div>
            ))}
          </div>

          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-5 inline-flex items-center gap-2 font-bold text-green-600 transition-all duration-300 hover:gap-3 cursor-none dark:text-green-400"
            >
              <FaGithub className="text-lg" />
              View project
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </article>
    </RevealOnScroll>
  );
};