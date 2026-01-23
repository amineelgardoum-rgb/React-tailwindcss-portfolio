import {
  FaAws,
  FaDocker,
  FaJava,
  FaLinux,
  FaPython,
  FaUbuntu,
  FaWindows,
} from "react-icons/fa";
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
  SiHtml5,
  SiVercel,
  SiTailwindcss,
  SiCss3,
  SiShell,
  SiShelly,
  SiGnubash,
  SiMinio,
  SiPostgresql,
  SiApachehadoop,
  SiTrino,
  SiDbt
} from "react-icons/si";
import {
  TbSql,
  TbChartLine,
  TbBrandPowershell,
  TbCommand,
  TbCommandOff,
  TbBrandNextjs,
} from "react-icons/tb";
import { VscSymbolNamespace } from "react-icons/vsc";
import { IoBarChart } from "react-icons/io5";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";
import { GiPanda, GiTwinShell } from "react-icons/gi";
// import { icons } from "lucide-react";

const iconMap = {
  airflow: {
    icon: <SiApacheairflow />,
    name: "Apache Airflow",
    hoverColor: "hover:text-blue-400",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://airflow.apache.org/",
  },
  kafka: {
    icon: <SiApachekafka />,
    name: "Apache Kafka",
    hoverColor: "hover:text-yellow-300",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
    url: "https://kafka.apache.org/",
  },
  postgres:{
    icon:<SiPostgresql />,
    name:"Postgres",
    hoverColor:"hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_20px_blue)]",
    url:"#"
  },
  docker: {
    icon: <FaDocker />,
    name: "Docker",
    hoverColor: "hover:text-blue-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://www.docker.com/",
  },
  trino:{
    icon:<SiTrino/>,
    name:"Trino",
    hoverColor:"hover:text-pink-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_pink)_drop-shadow(0_0_10px_pink)_drop-shadow(0_0_20px_pink)]",
    url:"#"
  },
  hadoop:{
    icon:<SiApachehadoop />,
    name:"Hadoop",
    hoverColor:"hover:text-yellow-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_20px_yellow)]",
    url:"#"
  },
  mongodb: {
    icon: <SiMongodb />,
    name: "MongoDB",
    hoverColor: "hover:text-green-300",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
    url: "https://www.mongodb.com/",
  },
  mysql: {
    icon: <SiMysql />,
    name: "MySQL",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://www.mysql.com/",
  },
  oracledb: {
    icon: <SiOracle />,
    name: "OracleDB",
    hoverColor: "hover:text-red-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_10px_red)]",
    url: "https://www.oracle.com/",
  },
  fastapi: {
    icon: <SiFastapi />,
    name: "FastAPI",
    hoverColor: "hover:text-green-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
    url: "https://fastapi.tiangolo.com/",
  },
  pandas: {
    icon: <SiPandas />,
    name: "Pandas",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://pandas.pydata.org/",
  },
  python: {
    icon: <FaPython />,
    name: "Python",
    hoverColor: "hover:text-yellow-400",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
    url: "https://www.python.org/",
  },
  sql: {
    icon: <TbSql />,
    name: "SQL",
    hoverColor: "hover:text-blue-900",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://en.wikipedia.org/wiki/SQL",
  },
  nosql: {
    icon: <VscSymbolNamespace />,
    name: "NoSQL",
    hoverColor: "hover:text-green-400",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
    url: "https://en.wikipedia.org/wiki/NoSQL",
  },
  java: {
    icon: <FaJava />,
    name: "Java",
    hoverColor: "hover:text-red-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
    url: "https://www.java.com/en/",
  },
  c: {
    icon: <SiC />,
    name: "C",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  github: {
    icon: <SiGithub />,
    name: "Github",
    hoverColor: "hover:text-white",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_15px_white)]",
    url: "https://github.com/",
  },
  javascript: {
    icon: <SiJavascript />,
    name: "Javascript",
    hoverColor: "hover:text-yellow-200",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  react: {
    icon: <SiReact />,
    name: "React",
    hoverColor: "hover:text-blue-300",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://react.dev/",
  },
  streamlit: {
    icon: <SiStreamlit />,
    name: "Streamlit",
    hoverColor: "hover:text-red-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
    url: "https://streamlit.io/",
  },
  scikit_learn: {
    icon: <SiScikitlearn />,
    name: "Scikit Learn",
    hoverColor: "hover:text-orange-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    url: "https://scikit-learn.org/",
  },
  langchain: {
    icon: <SiLangchain />,
    name: "Langchain",
    hoverColor: "hover:text-gray-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]",
    url: "https://www.langchain.com/",
  },
  tensorflow: {
    icon: <SiTensorflow />,
    name: "Tensorflow",
    hoverColor: "hover:text-orange-400",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    url: "https://www.tensorflow.org/",
  },
  canva: {
    icon: <SiCanva />,
    name: "Canva",
    hoverColor: "hover:text-violet-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_violet)_drop-shadow(0_0_10px_violet)_drop-shadow(0_0_15px_violet)]",
    url: "https://www.canva.com/",
  },
  git: {
    icon: <SiGit />,
    name: "Git",
    hoverColor: "hover:text-red-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
    url: "https://git-scm.com/",
  },
  matplotlib: {
    icon: <TbChartLine />,
    name: "Matplotlib",
    hoverColor: "hover:text-blue-800",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://matplotlib.org/",
  },
  seaborn: {
    icon: <IoBarChart />,
    name: "Seaborn",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://seaborn.pydata.org/",
  },
  numpy: {
    icon: <SiNumpy />,
    name: "Numpy",
    hoverColor: "hover:text-blue-800",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://numpy.org/",
  },
  netlify: {
    icon: <SiNetlify />,
    name: "Netlify",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://www.netlify.com/",
  },
  prefect: {
    icon: <SiPrefect />,
    name: "Prefect",
    hoverColor: "hover:text-blue-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://www.prefect.io/",
  },
  pytorch: {
    icon: <SiPytorch />,
    name: "Pytorch",
    hoverColor: "hover:text-red-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
    url: "https://pytorch.org/",
  },
  vercel: {
    icon: <SiVercel />,
    name: "Vercel",
    hoverColor: "hover:text-white",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_15px_white)]",
    url: "https://vercel.com/",
  },
  dbt:{
    icon:<SiDbt />,
    name:"dbt",
    hoverColor: "hover:text-orange-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    url:"#"

  },
  html: {
    icon: <SiHtml5 />,
    name: "html",
    hoverColor: "hover:text-orange-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    url: "https://en.wikipedia.org/wiki/HTML",
  },
  tailwindcss: {
    icon: <SiTailwindcss />,
    name: "tailwindcss",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://tailwindcss.com/",
  },
  css: {
    icon: <SiCss3 />,
    name: "css",
    hoverColor: "hover:text-blue-800",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_20px_blue)]",
    url: "https://en.wikipedia.org/wiki/CSS",
  },
  redpanda: {
    icon: <GiPanda />,
    name: "Readpanda",
    hoverColor: "hover:text-red-700",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
    url: "https://www.redpanda.com/",
  },
  linux: {
    icon: <FaLinux />,
    name: "linux(Ubuntu)",
    hoverColor: "hover:text-white-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    url: "https://www.linux.org/",
  },
  windows: {
    icon: <FaWindows />,
    name: "windows",
    hoverColor: "hover:text-blue-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://blogs.windows.com/",
  },
  powershell: {
    icon: <TbBrandPowershell />,
    name: "powershell",
    hoverColor: "hover:text-blue-300",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    url: "https://learn.microsoft.com/en-us/powershell/",
  },
  bash: {
    icon: <SiGnubash />,
    name: "cmd",
    hoverColor: "hover:text-gray-500",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]",
    url: "https://linuxcommand.org/lc3_lts0010.php",
  },
  aws:{
    icon:<FaAws />,
    name:"aws",
    hoverColor:"hover:text-orange-500",
    shadow:"hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    url:"https://aws.amazon.com/"
  },
  next:{
    icon:<TbBrandNextjs />,
    name:'next',
    hoverColor:'hover:text-white',
    shadow:'hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_20px_white)]',
    url:'#'
  },
  minio:{
    icon:<SiMinio />,
    name:'minio',
    hoverColor:'hover:text-pink-600',
    shadow:"hover:[filter:drop-shadow(0_0_5px_pink)_drop-shadow(0_0_10px_pink)_drop-shadow(0_0_20px_pink)]"
  }
};

const getIconInfo = (name) =>
  iconMap[name.toLowerCase()] || {
    icon: <FaPython />,
    name,
    hoverColor: "hover:text-gray-400",
    shadow: "hover:drop-shadow-[0_0_10px_gray]",
    url: "#",
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
    "Minio",
    "Redpanda",
    "Hadoop",
    "Postgres",
    "Trino",
    "dbt"
  ];
  const dataEngLanguages = [
    "Python",
    "SQL",
    "NoSQL",
    "Java",
    "C",
    "Javascript",
    "Html",
    "Css",
  ];
  const dataOrchestrate = ["Docker", "Airflow", "Prefect"];
  const frameworks = ["React", "FastAPI", "Tailwindcss","Next"];
  const aiTools = ["Langchain", "Scikit_Learn", "Tensorflow", "Pytorch"];
  const design = ["Canva"];
  const vsc = ["Github", "Git"];
  const hostingTools = ["Netlify", "Vercel"];
  const os = ["linux", "windows"];
  const scripting_tools = ["bash", "powershell"];
  const cloud=["AWS"]
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
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    operating systems
                  </h3>
                  <div className="flex flex-wrap gap-4">{renderIcons(os)}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    command tools
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(scripting_tools)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-300">
                    Cloud Services
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {renderIcons(cloud)}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <RevealOnScroll>
              <div className="p-6 h-full rounded-xl shadow-[0px_2px_10px_green] hover:shadow-[0px_3px_40px_green]   bg-black  hover:-translate-y-2 transition-all ease-in-out duration-500 border border-green-500">
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
              <div className="p-6 h-full rounded-xl shadow-[0px_2px_10px_green] hover:shadow-[0px_3px_40px_green]  border border-green-500 bg-black  hover:-translate-y-2 transition-all ease-in-out  duration-500">
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
            <RevealOnScroll>
              <div className="p-6 h-full rounded-xl shadow-[0px_2px_10px_green] hover:shadow-[0px_3px_40px_green]  border border-green-500 bg-black hover:-translate-y-2 transition-all ease-in-out  duration-500">
                <h3 className="text-xl font-bold mb-4 text-green-300">
                  Certification
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">C programming language:</h4>
                    <p className="text-sm text-gray-400">Udemy:C</p>
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
