import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";

export const ProjectCard = ({ project, getSkillInfo }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const groupedIcons = new Map();
  project.skills.forEach((skill) => {
    const { icon, color, hoverGlow, hoverColor } = getSkillInfo(skill);
    const iconKey = icon.type.name;
    if (!groupedIcons.has(iconKey)) {
      groupedIcons.set(iconKey, {
        icon,
        color,
        hoverGlow,
        hoverColor,
        skills: [skill],
      });
    } else {
      groupedIcons.get(iconKey).skills.push(skill);
    }
  });

  return (
    <RevealOnScroll>
      <div className="group relative flex flex-col w-full max-w-sm mx-auto bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-[0px_0px_35px_rgba(0,255,0,0.35)] border border-gray-800 hover:border-green-500/60 transition-all ease-in-out duration-300 h-full">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>

          <div className="text-sm text-gray-300 mb-4 flex-1">
            {isDescriptionExpanded ? (
              <>
                <p>{project.description}</p>
                <button
                  onClick={() => setIsDescriptionExpanded(false)}
                  className="mt-1 font-semibold text-green-400 hover:text-green-300 transition-colors duration-300 cursor-none"
                >
                  Show Less
                </button>
              </>
            ) : (
              <div className="flex items-start justify-between gap-2">
                <p className="line-clamp-2">{project.description}</p>
                <button
                  onClick={() => setIsDescriptionExpanded(true)}
                  className="shrink-0 font-bold text-lg leading-none text-green-400 hover:text-green-300 transition-colors duration-300 cursor-none"
                >
                  ...
                </button>
              </div>
            )}
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            {Array.from(groupedIcons.values()).map((info) => (
              <div
                key={info.skills.join("-")}
                className="group/tooltip relative"
              >
                <div
                  className={`text-2xl text-white transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 ${info.color} ${info.hoverColor} ${info.hoverGlow}`}
                >
                  {info.icon}
                </div>

                <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-500 ease-in-out group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:-translate-y-2 group-hover/tooltip:pointer-events-auto">
                  {info.skills.join(" / ")}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black/80"></div>
                </span>
              </div>
            ))}
          </div>

          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 font-semibold text-green-400 hover:text-green-300 transition-all ease-in-out hover:gap-3 duration-300 cursor-none"
            >
              <FaGithub className="text-lg" />
              View Project
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </RevealOnScroll>
  );
};