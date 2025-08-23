import { FaDocker, FaJava, FaPython } from "react-icons/fa";
import {
  SiApacheairflow,
  SiApachekafka,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPandas,
  SiC,
  SiGithub,
  SiJavascript,
  SiReact,
  SiStreamlit,
  SiScikitlearn,
  SiLangchain,
  SiTensorflow,
  SiCanva,
  SiGit,
  SiNumpy,
  SiNetlify,
  SiPrefect
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscSymbolNamespace } from "react-icons/vsc";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";
import { TbChartLine } from "react-icons/tb";
import { IoBarChart } from "react-icons/io5";

const iconMap = {
  airflow: {
    icon: <SiApacheairflow />,
    name: "Apache Airflow",
    hoverColor: "group-hover:text-green-400",
  },
  kafka: {
    icon: <SiApachekafka />,
    name: "Apache Kafka",
    hoverColor: "group-hover:text-green-300",
  },
  docker: {
    icon: <FaDocker />,
    name: "Docker",
    hoverColor: "group-hover:text-green-500",
  },
  mongodb: {
    icon: <SiMongodb />,
    name: "MongoDB",
    hoverColor: "group-hover:text-green-500",
  },
  mysql: {
    icon: <SiMysql />,
    name: "MySQL",
    hoverColor: "group-hover:text-green-400",
  },
  oracledb: {
    icon: <SiOracle />,
    name: "OracleDB",
    hoverColor: "group-hover:text-green-500",
  },
  fastapi: {
    icon: <SiFastapi />,
    name: "FastAPI",
    hoverColor: "group-hover:text-green-600",
  },
  pandas: {
    icon: <SiPandas />,
    name: "Pandas",
    hoverColor: "group-hover:text-green-400",
  },
  python: {
    icon: <FaPython />,
    name: "Python",
    hoverColor: "group-hover:text-green-400",
  },
  sql: {
    icon: <TbSql />,
    name: "SQL",
    hoverColor: "group-hover:text-green-500",
  },
  nosql: {
    icon: <VscSymbolNamespace />,
    name: "NoSQL",
    hoverColor: "group-hover:text-green-400",
  },
  java: {
    icon: <FaJava />,
    name: "Java",
    hoverColor: "group-hover:text-green-400",
  },
  c: { icon: <SiC />, name: "C", hoverColor: "group-hover:text-green-600" },
  github: {
    icon: <SiGithub />,
    name: "github",
    hoverColor: "group-hover:text-green-700",
  },
  javascript: {
    icon: <SiJavascript />,
    name: "javascript",
    hoverColor: "group-hover:text-green-200",
  },
  react: {
    icon: <SiReact />,
    name: "React",
    hoverColor: "group-hover:text-green-300",
  },
  streamlit: {
    icon: <SiStreamlit />,
    name: "Streamlit",
    hoverColor: "group-hover:text-green-600",
  },
  scikit_learn: {
    icon: <SiScikitlearn />,
    name: "scikit_learn",
    hoverColor: "group-hover:text-green-500",
  },
  langchain: {
    icon: <SiLangchain />,
    name: "langchain",
    hoverColor: "group-hover:text-green-700",
  },
  tensorflow: {
    icon: <SiTensorflow />,
    name: "tensorflow",
    hoverColor: "group-hover:text-green-400",
  },
  canva:{
    icon:<SiCanva />,
    name:"canva",
    hoverColor:"group-hover:text-green-600"
  },
  git:{
    icon:<SiGit />,
    name:'git',
    hoverColor:"group-hover:text-green-700"
  },
  matplotlib:{
    icon:<TbChartLine />,
    name:"matplotlib",
    hoverColor:"group-hover:text-green-800"
  },
  seaborn:{
    icon:<IoBarChart />,
    name:"seaborn",
    hoverColor:"group-hover:text-green-600"
  },
  numpy:{
    icon:<SiNumpy />,
    name:"numpy",
    hoverColor:"group-hover:text-green-800"
  },
  netlify:{
    icon:<SiNetlify />,
    name:"netlify",
    hoverColor:"group-hover:text-green-600"
  },
  prefect:{
    icon:<SiPrefect />,
    name:'prefect',
    hoverColor:"group-hover:text-green-500"
  }
};

const getIconInfo = (techName) => {
  const defaultIcon = {
    icon: <FaPython />,
    name: techName,
    hoverColor: "group-hover:text-gray-400",
  };
  return iconMap[techName.toLowerCase()] || defaultIcon;
};

export const About = () => {
  const dataEngTools = [
    "Kafka",
    "MongoDB",
    "MySQL",
    "OracleDB",
    "Pandas",
    "Streamlit",
    'matplotlib',
    'seaborn',
  ];
  const dataEngLanguages = [
    "Python",
    "SQL",
    "NOSQL",
    "Java",
    "C",
    "Javascript",
  ];
  const dataOrchestrate = ["Docker", "Airflow","prefect"];
  const frameworks = ["React", "Fastapi"];
  const aiTools = ["Langchain", "scikit_learn", "tensorflow"];
  const design = ["canva"];
  const vsc=['Github','Git'];
  const hostingTools=['netlify'];

  return (
    <>
      <CustomCursor />
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-4xl mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent ">
              About Me
            </h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="rounded-xl p-6 md:p-8  hover:shadow-[0px_3px_20px_green] shadow-[0px_2px_12px_green] bg-black transition-all-ease duration-300 border border-green-500 hover:translate-y-3">
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I am a dedicated and detail-oriented Data Engineering student in
                my second year at the **National School of Applied Sciences of
                Al Hoceima (ENSAH)**.With a solid foundation in computer science
                and a growing expertise in data handling technologies, I am
                actively seeking an opportunity to apply my knowledge in a
                practical setting. My goal is to contribute to a
                forward-thinking organization where I can further develop my
                skills in data modeling, pipeline development, and data analysis
                while helping to solve complex, real-world problems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Data Engineering Tools
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {dataEngTools.map((tool) => {
                      const { icon, name, hoverColor } = getIconInfo(tool);
                      return (
                        <div
                          key={name}
                          className="group relative flex flex-col items-center"
                        >
                          <div
                            className={`text-3xl text-gray-300 transition-all duration-300 group-hover:scale-110 ${hoverColor}`}
                          >
                            {icon}
                          </div>
                          <span
                            className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300
                                     group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {dataEngLanguages.map((lang) => {
                      const { icon, name, hoverColor } = getIconInfo(lang);
                      return (
                        <div
                          key={name}
                          className="group relative flex flex-col items-center"
                        >
                          <div
                            className={`text-3xl text-gray-300 transition-all duration-300 group-hover:scale-110 ${hoverColor}`}
                          >
                            {icon}
                          </div>
                          <span
                            className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300
                                     group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Orchestration and Automation
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {dataOrchestrate.map((lang) => {
                      const { icon, name, hoverColor } = getIconInfo(lang);
                      return (
                        <div
                          key={name}
                          className="group relative flex flex-col items-center"
                        >
                          <div
                            className={`text-3xl text-gray-300 transition-all duration-300 group-hover:scale-110 ${hoverColor}`}
                          >
                            {icon}
                          </div>
                          <span
                            className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300
                                     group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {frameworks.map((lang) => {
                      const { icon, name, hoverColor } = getIconInfo(lang);
                      return (
                        <div
                          key={name}
                          className="group relative flex flex-col items-center"
                        >
                          <div
                            className={`text-3xl text-gray-300 transition-all duration-300 group-hover:scale-110 ${hoverColor}`}
                          >
                            {icon}
                          </div>
                          <span
                            className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300
                                     group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    AI tools
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {aiTools.map((lang) => {
                      const { icon, name, hoverColor } = getIconInfo(lang);
                      return (
                        <div
                          key={name}
                          className="group relative flex flex-col items-center"
                        >
                          <div
                            className={`text-3xl text-gray-300 transition-all duration-300 group-hover:scale-110 ${hoverColor}`}
                          >
                            {icon}
                          </div>
                          <span
                            className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300
                                     group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Design
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {design.map((lang) => {
                      const { icon, name, hoverColor } = getIconInfo(lang);
                      return (
                        <div
                          key={name}
                          className="group relative flex flex-col items-center"
                        >
                          <div
                            className={`text-3xl text-gray-300 transition-all duration-300 group-hover:scale-110 ${hoverColor}`}
                          >
                            {icon}
                          </div>
                          <span
                            className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300
                                     group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Version Control System & Repository Hosting Service
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {vsc.map((lang) => {
                      const { icon, name, hoverColor } = getIconInfo(lang);
                      return (
                        <div
                          key={name}
                          className="group relative flex flex-col items-center"
                        >
                          <div
                            className={`text-3xl text-gray-300 transition-all duration-300 group-hover:scale-110 ${hoverColor}`}
                          >
                            {icon}
                          </div>
                          <span
                            className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300
                                     group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Hosting Tools
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {hostingTools.map((lang) => {
                      const { icon, name, hoverColor } = getIconInfo(lang);
                      return (
                        <div
                          key={name}
                          className="group relative flex flex-col items-center"
                        >
                          <div
                            className={`text-3xl text-gray-300 transition-all duration-300 group-hover:scale-110 ${hoverColor}`}
                          >
                            {icon}
                          </div>
                          <span
                            className="absolute -top-8 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300
                                     group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <RevealOnScroll>
              <div className="p-6 h-full rounded-xl shadow-[0px_2px_10px_green] hover:shadow-[0px_3px_40px_green]   bg-gray-900/20 backdrop-blur-sm hover:-translate-y-1 transition-all ease-in-out duration-300 border border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-300">
                  Education
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>
                    <strong>National School of Applied Sciences (ENSAH)</strong>
                    <span className="block text-sm text-gray-400">
                      2022 - Present
                    </span>
                  </li>
                  <li>
                    <strong>Faculty of Sciences and Techniques (FST)</strong>
                    <span className="block text-sm text-gray-400">
                      2021 - 2022
                    </span>
                  </li>
                  <li>
                    <strong>Moroccan Baccalaureate, Physical Sciences</strong>
                    <span className="block text-sm text-gray-400">2021</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 h-full rounded-xl shadow-[0px_2px_10px_green] hover:shadow-[0px_3px_40px_green]  border border-green-500 bg-gray-900/20 backdrop-blur-sm hover:-translate-y-1 transition-all ease-in-out  duration-300">
                <h3 className="text-xl font-bold mb-4 text-green-300">
                  Work Experience
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">XAI Internship Program</h4>
                    <p className="text-sm text-gray-400">
                      Project: Smart Recruitment Agent
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};
