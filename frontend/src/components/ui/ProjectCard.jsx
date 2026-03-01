import React, { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
export const ProjectCard = ({ project, getSkillInfo, skillInfo }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const groupedIcons = new Map();
  project.skills.forEach((skill) => {
    const { icon, color, hoverGlow, hoverColor, hoverRotate } =
      getSkillInfo(skill);
    const iconKey = icon.type.name;
    if (!groupedIcons.has(iconKey)) {
      groupedIcons.set(iconKey, {
        icon,
        color,
        hoverGlow,
        hoverColor,
        hoverRotate,
        skills: [skill],
      });
    } else {
      groupedIcons.get(iconKey).skills.push(skill);
    }
  });

  return (
    <RevealOnScroll>
      <div className="group relative w-full max-w-sm overflow-hidden  mx-auto aspect-[4/3] rounded-xl shadow-lg hover:drop-shadow-[0px_0px_30px_rgba(0,255,0,0.3)] hover:-translate-y-2 transition-all ease-in-out duration-300">
        <img
          src={project.image}
          alt={project.title}
          className={`
            absolute inset-0 h-full w-full object-cover rounded-xl 
            transition-all duration-500 ease-in-out 
            md:group-hover:scale-110 md:group-hover:blur-sm
          `}
        />
        <div
          className={`
            absolute inset-0 bg-black/40 rounded-xl
            transition-all duration-500 ease-in-out 
            md:group-hover:bg-black/70
          `}
        ></div>
        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white bg-[rgba(0,0,0,0.4)] rounded mb-auto text-center p-3">
            {project.title}
          </h3>

          <div
            className={`
              opacity-100 translate-y-0 group-hover:opacity-100
              md:opacity-0 md:group-hover:opacity-100 
              md:translate-y-4 md:group-hover:translate-y-0
              transition-all duration-300 ease-in
            `}
          >
            <div className="mb-8 text-sm text-white  min-h-[4rem]">
              {isDescriptionExpanded ? (
                <>
                  <p className="transition-all duration-300 ease-in-out opacity-100">
                    {project.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents card click when hiding text
                      setIsDescriptionExpanded(false);
                    }}
                    className="font-semibold text-green-300 transition-all ease-in-out duration-300 hover:text-green-200 mt-2 cursor-none"
                  >
                    Show Less
                  </button>
                </>
              ) : (
                <div className="flex items-start">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDescriptionExpanded(true);
                    }}
                    className="cursor-none font-bold text-2xl leading-none text-gray-300 hover:text-green-500 duration-500 transition-all ease-in-out"
                  >
                    ...
                  </button>
                </div>
              )}
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              {Array.from(groupedIcons.values()).map((info) => {
                const isPythonIcon = info.icon.type.name === "FaPython";
                const displayColor = isPythonIcon
                  ? skillInfo["python"].color
                  : info.color;
                const tooltipText = isPythonIcon
                  ? "Python"
                  : info.skills.join(" / ");

                return (
                  <div
                    key={info.skills.join("-")}
                    className="group/tooltip relative"
                  >
                    <div
                      className={` hidden md:block md:text-3xl md:cursor-none transition-transform duration-300 ease-in-out hover:scale-110
                                 ${displayColor} ${info.color} ${info.hoverColor}  md:hover:-translate-y-2 ${info.hoverGlow}`}
                    >
                      {info.icon}
                    </div>

                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-500 ease-in-out group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:-translate-y-2 group-hover/tooltip:pointer-events-auto">
                      {tooltipText}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black/80"></div>
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group cursor-none font-semibold text-green-300 transition-all ease-in-out hover:scale-110 hover:text-green-500 hover:-translate-y-1  duration-500"
              >
                View Project{" "}
                <span className="inline-block  transition-all duration-500 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};
