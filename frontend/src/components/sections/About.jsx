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
  SiPrefect,
  SiPytorch,
  SiVercel,
} from "react-icons/si";
import { TbSql, TbChartLine } from "react-icons/tb";
import { VscSymbolNamespace } from "react-icons/vsc";
import { IoBarChart } from "react-icons/io5";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";

const iconMap = {
  airflow: {
    icon: <SiApacheairflow />,
    name: "Apache Airflow",
    hoverColor: "hover:text-blue-400",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  kafka: {
    icon: <SiApachekafka />,
    name: "Apache Kafka",
    hoverColor: "hover:text-yellow-300",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
  },
  docker: {
    icon: <FaDocker />,
    name: "Docker",
    hoverColor: "hover:text-blue-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  mongodb: {
    icon: <SiMongodb />,
    name: "MongoDB",
    hoverColor: "hover:text-green-300",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
  },
  mysql: {
    icon: <SiMysql />,
    name: "MySQL",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  oracledb: {
    icon: <SiOracle />,
    name: "OracleDB",
    hoverColor: "hover:text-red-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_10px_red)]",
  },
  fastapi: {
    icon: <SiFastapi />,
    name: "FastAPI",
    hoverColor: "hover:text-green-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
  },
  pandas: {
    icon: <SiPandas />,
    name: "Pandas",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  python: {
    icon: <FaPython />,
    name: "Python",
    hoverColor: "hover:text-yellow-400",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
  },
  sql: {
    icon: <TbSql />,
    name: "SQL",
    hoverColor: "hover:text-blue-900",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  nosql: {
    icon: <VscSymbolNamespace />,
    name: "NoSQL",
    hoverColor: "hover:text-green-400",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
  },
  java: {
    icon: <FaJava />,
    name: "Java",
    hoverColor: "hover:text-red-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
  },
  c: {
    icon: <SiC />,
    name: "C",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  github: {
    icon: <SiGithub />,
    name: "Github",
    hoverColor: "hover:text-white",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_15px_white)]",
  },
  javascript: {
    icon: <SiJavascript />,
    name: "Javascript",
    hoverColor: "hover:text-yellow-200",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
  },
  react: {
    icon: <SiReact />,
    name: "React",
    hoverColor: "hover:text-blue-300",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  streamlit: {
    icon: <SiStreamlit />,
    name: "Streamlit",
    hoverColor: "hover:text-red-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
  },
  scikit_learn: {
    icon: <SiScikitlearn />,
    name: "Scikit Learn",
    hoverColor: "hover:text-orange-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  langchain: {
    icon: <SiLangchain />,
    name: "Langchain",
    hoverColor: "hover:text-gray-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]",
  },
  tensorflow: {
    icon: <SiTensorflow />,
    name: "Tensorflow",
    hoverColor: "hover:text-orange-400",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  canva: {
    icon: <SiCanva />,
    name: "Canva",
    hoverColor: "hover:text-violet-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_violet)_drop-shadow(0_0_10px_violet)_drop-shadow(0_0_15px_violet)]",
  },
  git: {
    icon: <SiGit />,
    name: "Git",
    hoverColor: "hover:text-red-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
  },
  matplotlib: {
    icon: <TbChartLine />,
    name: "Matplotlib",
    hoverColor: "hover:text-blue-800",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  seaborn: {
    icon: <IoBarChart />,
    name: "Seaborn",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  numpy: {
    icon: <SiNumpy />,
    name: "Numpy",
    hoverColor: "hover:text-blue-800",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  netlify: {
    icon: <SiNetlify />,
    name: "Netlify",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  prefect: {
    icon: <SiPrefect />,
    name: "Prefect",
    hoverColor: "hover:text-blue-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  pytorch: {
    icon: <SiPytorch />,
    name: "Pytorch",
    hoverColor: "hover:text-red-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
  },
  vercel: {
    icon: <SiVercel />,
    name: "Vercel",
    hoverColor: "hover:text-white",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_15px_white)]",
  },
};

const getIconInfo = (name) =>
  iconMap[name.toLowerCase()] || {
    icon: <FaPython />,
    name,
    hoverColor: "hover:text-gray-400",
    shadow: "hover:drop-shadow-[0_0_10px_gray]",
  };

export const About = () => {
  const dataEngTools = [
    "Kafka",
    "MongoDB",
    "MySQL",
    "OracleDB",
    "Pandas",
    "Streamlit",
    "Matplotlib",
    "Seaborn",
    "Numpy",
  ];
  const dataEngLanguages = [
    "Python",
    "SQL",
    "NoSQL",
    "Java",
    "C",
    "Javascript",
  ];
  const dataOrchestrate = ["Docker", "Airflow", "Prefect"];
  const frameworks = ["React", "FastAPI"];
  const aiTools = ["Langchain", "Scikit_Learn", "Tensorflow", "Pytorch"];
  const design = ["Canva"];
  const vsc = ["Github", "Git"];
  const hostingTools = ["Netlify", "Vercel"];

  const renderIcons = (items) =>
    items.map((name) => {
      const { icon, hoverColor, shadow } = getIconInfo(name);
      return (
        <div
          key={name}
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
        </div>
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
                training neural networks. I am actively seeking opportunities to
                apply my skills to solve real-world challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Data Engineering Tools
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(dataEngTools)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(dataEngLanguages)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Orchestration & Automation
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(dataOrchestrate)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(frameworks)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    AI Tools
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(aiTools)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Design
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(design)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Version Control & Repo Hosting
                  </h3>
                  <div className="flex flex-wrap gap-4">{renderIcons(vsc)}</div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Hosting Tools
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(hostingTools)}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <RevealOnScroll>
              <div className="p-6 h-full rounded-xl shadow-[0px_2px_10px_green] hover:shadow-[0px_3px_40px_green]   bg-gray-900/20 backdrop-blur-sm hover:-translate-y-2 transition-all ease-in-out duration-500 border border-green-500">
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
              <div className="p-6 h-full rounded-xl shadow-[0px_2px_10px_green] hover:shadow-[0px_3px_40px_green]  border border-green-500 bg-gray-900/20 backdrop-blur-sm hover:-translate-y-2 transition-all ease-in-out  duration-500">
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
