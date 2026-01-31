import {skillInfo} from "../../data/skillInfo"
import { ProjectCard } from "../ProjectCard";
import { projectsData } from "../../data/projectsData";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";
import { SiPython } from "react-icons/si";
import { Background } from "../Background";
const defaultIcon = <SiPython />;



export const Projects = () => {

  const getSkillInfo = (skill) => {
    return (
      skillInfo[skill.toLowerCase()] || {
        icon: defaultIcon,
        color: "text-gray-400",
        hoverGlow:
          "hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]",
        hoverColor: "text-gray-600",
      }
    );
  };

  const aiProjects = projectsData.filter((p) => p.category === "AI");
  const dataEngProjects = projectsData.filter(
    (p) => p.category === "Data Engineering",
  );

  return (
    <>
      <CustomCursor />
      <Background />
      <section
        id="projects"
        className="flex min-h-screen items-start justify-center py-28 bg-black text-green-300"
      >
        <div className="mx-auto w-full max-w-7xl px-4">
          <RevealOnScroll>
            <h2 className="mb-12 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-center  text-4xl font-bold text-transparent font-mono">
              My Projects
            </h2>
          </RevealOnScroll>

          {/* AI & Machine Learning Section */}
          <div className="mb-20">
            <RevealOnScroll>
              <h3 className="text-3xl font-bold  bg-gradient-to-r from-green-500 to-green-300 bg-clip-text mb-8 text-center">
                AI & Machine Learning
              </h3>
            </RevealOnScroll>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aiProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  getSkillInfo={getSkillInfo}
                  skillInfo={skillInfo}
                />
              ))}
            </div>
          </div>

          {/* Data Engineering Section */}
          <div className="mb-20">
            <RevealOnScroll>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text mb-8 text-center">
                Data Engineering
              </h3>
            </RevealOnScroll>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {dataEngProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  getSkillInfo={getSkillInfo}
                  skillInfo={skillInfo}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
