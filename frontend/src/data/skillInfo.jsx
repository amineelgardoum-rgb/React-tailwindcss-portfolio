// src/data/skillInfo.jsx
import { FaDocker, FaHtml5, FaCss3Alt, FaPython, FaCloud, FaSnowflake } from "react-icons/fa";
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
  SiApacheairflow,
  SiDbt,
  SiMinio,
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
  SiPython,
} from "react-icons/si";
import { IoBarChart } from "react-icons/io5";
import { TbChartLine } from "react-icons/tb";
import { GiPanda } from "react-icons/gi";

export const skillInfo = {
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
          icon: <SiApachekafka />,
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
          icon: <SiApache />,
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
          icon: <SiPython />,
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
        ollama: {
          icon: <SiOllama />,
          color: "text-white",
          hoverColor: "hover:text-white",
          hoverGlow:
            "hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_15px_white)]",
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
