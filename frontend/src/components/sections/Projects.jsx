import { useState } from "react";
import { skillInfo } from "../../data/skills/skillInfo";
import { ProjectCard } from "../ui/ProjectCard";
import { projectsData } from "../../data/projects/projectsData";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SiPython } from "react-icons/si";

const defaultIcon = <SiPython />;

const CATEGORY_ORDER = [
  "AI",
  "Data Engineering",
  "Notes",
  "Coming Soon",
];

const getSkillInfo = (skill) => {
  const info = skillInfo[skill.toLowerCase()];
  if (!info) {
    return {
      icon: defaultIcon,
      color: "text-gray-400",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]",
      hoverColor: "text-gray-600",
    };
  }
  return info;
};

const filterLabels = {
  All: "All",
  AI: "AI",
  "Data Engineering": "Data",
  Notes: "Notes",
};

export const Projects = () => {
  const [active, setActive] = useState(CATEGORY_ORDER[0]);

  const categories = CATEGORY_ORDER.filter((cat) =>
    projectsData.some((p) => p.category === cat),
  );

  const projects = projectsData
    .filter((p) => p.category === active)
    .sort(
      (a, b) =>
        CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category),
    );

  return (
    <section
      id="projects"
      className="flex min-h-screen items-start justify-center py-20 bg-white dark:bg-black text-green-600 dark:text-green-300"
    >
        <div className="mx-auto w-full max-w-7xl px-4">
          {/* Editorial headline */}
          <RevealOnScroll>
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.3em] text-green-600 dark:text-green-400">
                Portfolio
              </p>
              <h2 className="text-4xl font-black leading-tight text-gray-900 dark:text-white md:text-6xl">
                Turning data into answers at the{" "}
                <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.25)]">
                  speed of real time
                </span>
                .
              </h2>
            </div>
          </RevealOnScroll>

          {/* Category filter */}
          <RevealOnScroll>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => {
                const activeCat = active === cat;
                const count = projectsData.filter(
                  (p) => p.category === cat,
                ).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`cursor-none rounded-lg border-2 px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                      activeCat
                        ? "border-green-500 bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                        : "border-green-500/40 text-green-600 hover:-translate-y-0.5 hover:border-green-500 hover:bg-green-500/10 dark:text-green-400"
                    }`}
                  >
                    {filterLabels[cat] ?? cat}
                    <span
                      className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                        activeCat
                          ? "bg-black/20 text-black"
                          : "bg-green-500/15 text-green-600 dark:text-green-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                getSkillInfo={getSkillInfo}
                skillInfo={skillInfo}
              />
            ))}
          </div>
        </div>
      </section>
  );
};