import React, { useState } from "react";
import { FaDocker, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
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
  SiHuggingface
} from "react-icons/si";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";

const pythonIcon = <FaPython />;
const kafkaIcon = <SiApachekafka />;
const apacheIcon = <SiApache />;
const defaultIcon = <FaPython />;

const ProjectCard = ({ project, getSkillInfo, skillInfo }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const groupedIcons = new Map();
  project.skills.forEach((skill) => {
    const { icon, color } = getSkillInfo(skill);
    const iconKey = icon.type.name;
    if (!groupedIcons.has(iconKey)) {
      groupedIcons.set(iconKey, { icon, color, skills: [skill] });
    } else {
      groupedIcons.get(iconKey).skills.push(skill);
    }
  });

  const handleCardClick = () => {
    if (window.innerWidth < 768) {
      setIsTapped(!isTapped);
    }
  };

  return (
    <RevealOnScroll>
      <div onClick={handleCardClick} className="group relative w-full max-w-sm mx-auto aspect-[4/3] rounded-xl shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 h-full w-full object-fit transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm ${isTapped ? 'scale-110 blur-sm' : 'scale-100 blur-0'} md:group-hover:scale-110 md:group-hover:blur-sm`}
        />
        <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${isTapped ? 'bg-black/70' : 'bg-black/40'} md:group-hover:bg-black/70 ease-in-out group-hover:bg-black/70`}></div>
        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white bg-[rgba(0,0,0,0.2)] rounded mb-auto">
            {project.title}
          </h3>
          <div className={`opacity-0 transition-all duration-500 ease-in-out ${isTapped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}>
            <div className="mb-6 text-sm text-gray-300 min-h-[4rem]">
              {isDescriptionExpanded ? (
                <>
                  <p className="transition-opacity duration-300 ease-in-out opacity-100">
                    {project.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents card click when hiding text
                      setIsDescriptionExpanded(false);
                    }}
                    className="font-semibold text-green-300 hover:text-green-200 mt-2 cursor-none"
                  >
                    Show Less
                  </button>
                </>
              ) : (
                // --- THIS IS THE CHANGED PART ---
                <div className="flex items-start">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents card click when showing text
                      setIsDescriptionExpanded(true);
                    }}
                    className="cursor-none font-bold text-2xl leading-none text-gray-300 hover:text-white transition-colors"
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
                  <div key={info.skills.join("-")} className="group/tooltip relative">
                    <div className={`text-3xl cursor-none transition-transform group-hover/tooltip:scale-110 ${displayColor} hover:text-green-400 hover:filter-drop-shadow-[0_0_10px_#00ff00]`}>
                      {info.icon}
                    </div>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-in-out group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:-translate-y-1 group-hover/tooltip:pointer-events-auto">
                      {tooltipText}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black/80"></div>
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block cursor-none font-semibold text-green-300 transition-colors hover:text-green-200">
                View Project →
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
      title: "MRI Brain Tumor Detection",
      description: "A deep learning model using TensorFlow to classify brain tumors from MRI scans. Served via a FastAPI backend with a simple HTML/CSS frontend for interaction.",
      skills: ["TensorFlow", "FastAPI", "HTML5", "CSS3", "Kaggle"],
      link: "https://github.com/amineel-crypto/tumor",
      image: "/images/mri_brain_detection.png",
      category: "AI",
    },
    {
      id: 2,
      title: "Bitcoin Price Streaming",
      description: "A real-time data pipeline that streams Bitcoin prices. Uses Kafka (with Redpanda) for messaging, FastAPI for the API, and Streamlit for live visualization.",
      skills: ["Docker", "FastAPI", "Redpanda", "Kafka", "MongoDB", "Streamlit"],
      link: "https://github.com/amineel-crypto/btc-real-time-streaming",
      image: "/images/btc-stream.png",
      category: "Data Engineering",
    },
    {
      id: 3,
      title: "Mental Health Prediction",
      description: "A machine learning model predicting mental health conditions based on survey data. Built with Python, Pandas, and Scikit-learn, using Seaborn for visualizations.",
      skills: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Kaggle"],
      link: "https://github.com/amineel-crypto/Depression_Predict",
      image: "/images/depression.png",
      category: "AI",
    },
    {
      id: 4,
      title: "In-Depth Sales Analysis",
      description: "A comprehensive sales data analysis project performed in a Jupyter environment. Utilized Pandas for data manipulation and Matplotlib/Seaborn for insights.",
      skills: ["Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter"],
      link: "https://github.com/amineel-crypto/Prediction_Sales",
      image: "/images/sales.png",
      category: "AI",
    },
    {
      id: 5,
      title: "E-Commerce Data Pipeline",
      description: "Constructed a real-time data pipeline for an e-commerce platform using Docker, Kafka, and FastAPI, with data stored in MongoDB and visualized with Chart.js.",
      skills: ["Docker", "Kafka", "FastAPI", "MongoDB", "Chart.js", "Zookeeper"],
      link: "https://github.com/amineel-crypto/transactions_e_commerce_pipeline",
      image: "/images/real_time_e_commerce.png",
      category: "Data Engineering",
    },
    {
      id: 6,
      title: "RAG chatbot about me.",
      description: "Designed a RAG chatbot to answer questions about me.",
      skills: ["Langchain", "FastAPI", "React", "Gemini", "Huggingface"],
      image: '/images/chatbot_image.png',
      category: "AI",
    }
  ];

  const skillInfo = {
    docker: { icon: <FaDocker />, color: "text-white" },
    fastapi: { icon: <SiFastapi />, color: "text-white" },
    mongodb: { icon: <SiMongodb />, color: "text-white" },
    kafka: { icon: kafkaIcon, color: "text-white" },
    redpanda: { icon: kafkaIcon, color: "text-white" },
    zookeeper: { icon: apacheIcon, color: "text-white" },
    html5: { icon: <FaHtml5 />, color: "text-white" },
    css3: { icon: <FaCss3Alt />, color: "text-white" },
    "chart.js": { icon: <SiChartdotjs />, color: "text-white" },
    streamlit: { icon: <SiStreamlit />, color: "text-white" },
    python: { icon: pythonIcon, color: "text-white" },
    tensorflow: { icon: <SiTensorflow />, color: "text-white" },
    "scikit-learn": { icon: <SiScikitlearn />, color: "text-white" },
    pandas: { icon: <SiPandas />, color: "text-white" },
    jupyter: { icon: <SiJupyter />, color: "text-white" },
    kaggle: { icon: <SiKaggle />, color: "text-white" },
    seaborn: { icon: pythonIcon, color: "text-white" },
    matplotlib: { icon: pythonIcon, color: "text-white" },
    react: { icon: <SiReact />, color: "text-white" },
    langchain: { icon: <SiLangchain />, color: "text-white" },
    gemini: { icon: <SiGooglegemini />, color: "text-white" },
    huggingface: { icon: <SiHuggingface />, color: "text-white" }
  };

  const getSkillInfo = (skill) => {
    return (
      skillInfo[skill.toLowerCase()] || {
        icon: defaultIcon,
        color: "text-gray-400",
      }
    );
  };

  const aiProjects = projectsData.filter(p => p.category === "AI");
  const dataEngProjects = projectsData.filter(p => p.category === "Data Engineering");

  return (
    <>
      <CustomCursor />
      <section id="projects" className="flex min-h-screen items-start justify-center py-28 bg-black text-green-300">
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
          <div>
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