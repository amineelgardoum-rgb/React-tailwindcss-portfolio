import { icons } from "../../data/icons";
import { aboutSkills } from "../../data/AboutSkills";
import { CustomCursor } from "../CustomCursor";
import { SkillSection } from "../SkillSection";
import { RevealOnScroll } from "../RevealOnScroll";
import { InfoSection } from "../InfoSection";
import { aboutInfo } from "../../data/AboutInfo";
const getIconInfo = (name) =>
  icons[name.toLowerCase()] || {
    icon: <FaPython />,
    name,
    hoverColor: "hover:text-gray-400",
    shadow: "hover:drop-shadow-[0_0_10px_gray]",
    url: "#",
  };

export const About = () => {
  const renderIcons = (items) =>
    items.map((name) => {
      const { icon, hoverColor, shadow, url } = getIconInfo(name);
      return (
        <a
          key={name}
          target="_blank"
          href={url}
          className="relative flex flex-col items-center group cursor-none"
        >
          <div
            className={`text-3xl text-gray-300 transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 ${hoverColor} ${shadow}`}
          >
            {icon}
          </div>
          <span className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {name}
          </span>
        </a>
      );
    });

  return (
    <>
      <CustomCursor />
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-4xl mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="rounded-xl p-6 md:p-8 shadow-[0px_2px_12px_green] hover:shadow-[0px_0px_50px_green] bg-black transition-all ease-in-out duration-500 border border-green-500 hover:-translate-y-3">
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                As a second-year AI and Data Engineering student at ENSAH, my
                passion is to bridge the gap between complex data and
                intelligent action. My journey has evolved from writing
                foundational code to architecting robust data pipelines and
                integrate the data with ai. I am actively seeking opportunities
                to apply my skills to solve real-world challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillSection
                  title="Data Engineering Tools"
                  items={aboutSkills.dataEngTools}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Databases"
                  items={aboutSkills.databases}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Programming Languages"
                  items={aboutSkills.languages}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Orchestration & Automation"
                  items={aboutSkills.orchestration}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Frameworks"
                  items={aboutSkills.frameworks}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="AI Tools"
                  items={aboutSkills.aiTools}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Design"
                  items={aboutSkills.design}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Version Control & Repo Hosting"
                  items={aboutSkills.versionControl}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Hosting Tools"
                  items={aboutSkills.hosting}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Operating Systems"
                  items={aboutSkills.os}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Command / Scripting Tools"
                  items={aboutSkills.scripting}
                  renderIcons={renderIcons}
                />
                <SkillSection
                  title="Cloud Services"
                  items={aboutSkills.cloud}
                  renderIcons={renderIcons}
                />
              </div>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <InfoSection title="Education" items={aboutInfo.education} />
            <InfoSection title="Experience" items={aboutInfo.experience} />
            <InfoSection
              title="Certification"
              items={aboutInfo.certification}
            />
          </div>
        </div>
      </section>
    </>
  );
};
