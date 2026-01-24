import React, { useState } from "react";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaAws,
  FaCloud,
  FaSnowflake,
} from "react-icons/fa";
import {
  SiFastapi,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiMongodb,
  SiStreamlit,
  SiKaggle,
  SiJupyter,
  SiChartdotjs,
  SiApachekafka,
  SiApache,
  SiLangchain,
  SiReact,
  SiGooglegemini,
  SiHuggingface,
  SiTailwindcss,
  SiNumpy,
  SiApacheairflow, // NEW
  SiDbt, // NEW
  SiMinio, // NEW
  SiOllama,
  SiApachehadoop,
  SiTrino,
  SiPostgresql,
  SiGnubash,
  SiMake,
  SiApachehive,
  SiVite,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";
import { IoBarChart } from "react-icons/io5";
import { TbChartLine } from "react-icons/tb";
import { GiPanda } from "react-icons/gi";
import { Kafdrop } from "../Kafdrop";
const pythonIcon = <FaPython />;
const kafkaIcon = <SiApachekafka />;
const apacheIcon = <SiApache />;
const defaultIcon = <FaPython />;

const ProjectCard = ({ project, getSkillInfo, skillInfo }) => {
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

export const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "MRI Brain Tumor Detection.",
      description:
        "A deep learning model using TensorFlow to classify brain tumors from MRI scans. Served via a FastAPI backend with a simple HTML/CSS frontend for interaction.",
      skills: [
        "TensorFlow",
        "FastAPI",
        "HTML5",
        "CSS3",
        "Kaggle",
        "Numpy",
        "Python",
      ],
      link: "https://tumor-presentation.netlify.app/",
      image: "/images/mri_brain_detection.png",
      category: "AI",
    },
    {
      id: 2,
      title: "Bitcoin Price Streaming.",
      description: "Coming Soon...",
      skills: ["Docker", "FastAPI", "AWS_(S3_bucket)", "Airflow", "Python"],
      link: "https://coming-soon-presenta.netlify.app/",
      image: "/images/btc-stream.png",
      category: "Coming Soon",
    },
    {
      id: 3,
      title: "Mental Health Prediction.",
      description:
        "A machine learning model predicting mental health conditions based on survey data. Built with Python, Pandas, and Scikit-learn, using Seaborn for visualizations.",
      skills: [
        "Pandas",
        "Python",
        "Scikit-learn",
        "Seaborn",
        "Kaggle",
        "matplotlib",
      ],
      link: "https://mental-health-presentation.netlify.app/",
      image: "/images/depression.png",
      category: "AI",
    },
    {
      id: 4,
      title: "In-Depth Sales Analysis.",
      description:
        "A comprehensive sales data analysis project performed in a Jupyter environment. Utilized Pandas for data manipulation and Matplotlib/Seaborn for insights.",
      skills: [
        "Pandas",
        "Python",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Jupyter",
      ],
      link: "https://in-depth-sales-presentation.netlify.app/",
      image: "/images/sales.png",
      category: "AI",
    },
    {
      id: 5,
      title: "E-Commerce Data Pipeline.",
      description:
        "Constructed a real-time data pipeline for an e-commerce platform using Docker, Kafka, and FastAPI, with data stored in MongoDB and visualized with Chart.js.",
      skills: [
        "Docker",
        "Python",
        "Kafka",
        "FastAPI",
        "MongoDB",
        "Chart.js",
        "Zookeeper",
      ],
      link: "https://e-commerce-presentation.netlify.app/",
      image: "/images/real_time_e_commerce.png",
      category: "Data Engineering",
    },
    {
      id: 6,
      title: "RAG chatbot about me.",
      description: "Designed a RAG chatbot to answer questions about me.",
      skills: [
        "Langchain",
        "FastAPI",
        "React",
        "Gemini",
        "Huggingface",
        "Tailwindcss",
        "Tensorflow",
        "Docker",
      ],
      link: "https://rag-presentation.netlify.app/",
      image: "/images/chatbot_image.png",
      category: "AI",
    },
    {
      id: 7,
      title: "GITA",
      description:
        "Designed a RAG chatbot to answer questions about any github repo.",
      skills: [
        "Langchain",
        "FastAPI",
        "Gemini",
        "Ollama",
        "Tensorflow",
        "Docker",
        "React",
        "vite",
      ],
      link: "https://github-gita.netlify.app/",
      image: "/images/gita.png",
      category: "AI",
    },
    {
      id: 8,
      title: "Procurement data pipeline",
      description: "a simplified procurement pipeline big data project",
      skills: ["Hadoop", "Docker", "Trino", "Postgres", "Bash", "Hive"],
      link: "https://procurementproject.netlify.app/",
      image: "/images/big_data.png",
      category: "Data Engineering",
    },
    {
      id: 9,
      title: "Stocks data pipeline",
      description: "Production Grade Stocks data pipeline",
      skills: [
        "dbt",
        "Postgres",
        "Minio",
        "Kafka",
        "Airflow",
        "Docker",
        "FastAPI",
      ],
      link: "#",
      image: "/images/Stocks_pipeline.png",
      category: "Data Engineering",
    },
    {
      id: 10,
      title: "Heart disease classification end-to-end",
      description: "A classification model to predict the heart disease",
      skills: ["Streamlit", "Scikit-learn", "Docker", "Makefile"],
      link: "#",
      image: "/images/classification.png",
      category: "AI",
    },
  ];

  const skillInfo = {
    github: {
      icon: <SiGithub />,
      color: "text-white",
      hoverColor: "hover:text-white",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_15px_white)]",
    },
    git: {
      icon: <SiGit />,
      color: "text-white",
      hoverColor: "text-red-300",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
    },
    docker: {
      icon: <FaDocker />,
      color: "text-white",
      hoverColor: "hover:text-blue-500",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    hive: {
      icon: <SiApachehive />,
      color: "text-white",
      hoverColor: "hover:text-yellow-400",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
    },
    makefile: {
      icon: <SiMake />,
      color: "text-white",
      hoverColor: "hover:text-red-400",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
    },
    bash: {
      icon: <SiGnubash />,
      color: "text-white",
      hoverColor: "hover:text-orange-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    },
    fastapi: {
      icon: <SiFastapi />,
      color: "text-white",
      hoverColor: "hover:text-green-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
    },
    mongodb: {
      icon: <SiMongodb />,
      color: "text-white",
      hoverColor: "hover:text-green-500",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
    },
    kafka: {
      icon: kafkaIcon,
      color: "text-white",
      hoverColor: "hover:text-yellow-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
    },
    redpanda: {
      icon: <GiPanda />,
      color: "text-white",
      hoverColor: "hover:text-yellow-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
    },
    zookeeper: {
      icon: apacheIcon,
      color: "text-white",
      hoverColor: "hover:text-green-300",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
    },
    html5: {
      icon: <FaHtml5 />,
      color: "text-white",
      hoverColor: "hover:text-orange-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    },
    css3: {
      icon: <FaCss3Alt />,
      color: "text-white",
      hoverColor: "hover:text-blue-300",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    "chart.js": {
      icon: <SiChartdotjs />,
      color: "text-white",
      hoverColor: "hover:text-pink-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_pink)_drop-shadow(0_0_10px_pink)_drop-shadow(0_0_15px_pink)]",
    },
    streamlit: {
      icon: <SiStreamlit />,
      color: "text-white",
      hoverColor: "hover:text-red-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
    },
    python: {
      icon: pythonIcon,
      color: "text-white",
      hoverColor: "hover:text-yellow-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
    },
    tensorflow: {
      icon: <SiTensorflow />,
      color: "text-white",
      hoverColor: "hover:text-orange-700",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    },
    vite: {
      icon: <SiVite />,
      color: "text-white",
      hoverColor: "hover:text-violet-500",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_violet)_drop-shadow(0_0_10px_violet)_drop-shadow(0_0_15px_violet)]",
    },
    "scikit-learn": {
      icon: <SiScikitlearn />,
      color: "text-white",
      hoverColor: "hover:text-orange-500",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    },
    pandas: {
      icon: <SiPandas />,
      color: "text-white",
      hoverColor: "hover:text-blue-700",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    jupyter: {
      icon: <SiJupyter />,
      color: "text-white",
      hoverColor: "hover:text-orange-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    },
    kaggle: {
      icon: <SiKaggle />,
      color: "text-white",
      hoverColor: "hover:text-blue-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    seaborn: {
      icon: <IoBarChart />,
      color: "text-white",
      hoverColor: "hover:text-blue-700",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    matplotlib: {
      icon: <TbChartLine />,
      color: "text-white",
      hoverColor: "hover:text-blue-500",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    react: {
      icon: <SiReact />,
      color: "text-white",
      hoverColor: "hover:text-blue-500",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    langchain: {
      icon: <SiLangchain />,
      color: "text-white",
      hoverColor: "hover:text-gray-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]",
    },
    gemini: {
      icon: <SiGooglegemini />,
      color: "text-white",
      hoverColor: "hover:text-blue-400",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_#FF00FF)_drop-shadow(0_0_10px_#FF00FF)_drop-shadow(0_0_15px_#FF00FF)]",
    },
    huggingface: {
      icon: <SiHuggingface />,
      color: "text-white",
      hoverColor: "hover:text-yellow-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_#FFA500)_drop-shadow(0_0_10px_#FFA500)_drop-shadow(0_0_15px_#FFA500)]",
    },
    tailwindcss: {
      icon: <SiTailwindcss />,
      color: "text-white",
      hoverColor: "hover:text-blue-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_#38B2AC)_drop-shadow(0_0_10px_#38B2AC)_drop-shadow(0_0_15px_#38B2AC)]",
    },
    numpy: {
      icon: <SiNumpy />,
      color: "text-white",
      hoverColor: "hover:text-blue-500",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_#013243)_drop-shadow(0_0_10px_#013243)_drop-shadow(0_0_15px_#013243)]",
    },
    airflow: {
      icon: <SiApacheairflow />,
      color: "text-white",
      hoverColor: "hover:text-blue-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    "aws_(s3_bucket)": {
      icon: <FaCloud />,
      color: "text-white",
      hoverColor: "hover:text-orange-300",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    },
    snowflake: {
      icon: <FaSnowflake />,
      color: "text-white",
      hoverColor: "hover:text-blue-150",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    dbt: {
      icon: <SiDbt />,
      color: "text-white",
      hoverColor: "hover:text-orange-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
    },
    minio: {
      icon: <SiMinio />,
      color: "text-white",
      hoverColor: "hover:text-pink-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_pink)_drop-shadow(0_0_10px_pink)_drop-shadow(0_0_15px_pink)]",
    },
    kafdrop: {
      icon: <Kafdrop />,
      color: "text-white",
      hoverColor: "hover:text-blue-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    ollama: {
      icon: <SiOllama />,
      color: "text-white",
      hoverColor: "hover:text-blue-500",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
    trino: {
      icon: <SiTrino />,
      color: "text-white",
      hoverColor: "hover:text-pink-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_pink)_drop-shadow(0_0_10px_pink)_drop-shadow(0_0_15px_pink)]",
    },
    hadoop: {
      icon: <SiApachehadoop />,
      color: "text-white",
      hoverColor: "hover:text-yellow-400",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
    },
    postgres: {
      icon: <SiPostgresql />,
      color: "text-white",
      hoverColor: "hover:text-blue-600",
      hoverGlow:
        "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
    },
  };

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
