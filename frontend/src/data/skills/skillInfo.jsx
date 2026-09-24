// src/data/skillInfo.jsx
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaCloud,
  FaSnowflake,
  FaDatabase,
  FaMicrosoft,
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
  SiGrafana,
  SiRedis,
SiPrometheus,
SiApachespark,
  SiN8N,
  SiDuckdb,
  SiObsidian,
  SiMarkdown} from "react-icons/si";
import { IoBarChart } from "react-icons/io5";
import { TbChartLine } from "react-icons/tb";
import { GiPanda } from "react-icons/gi";
import {DiRedis} from "react-icons/di"
import { SiMetabase } from "react-icons/si";
import { DataFactories } from "@threeveloper/azure-react-icons/dist/components/analytics/10126-icon-service-Data-Factories";
import { AzureSynapseAnalytics } from "@threeveloper/azure-react-icons/dist/components/analytics/00606-icon-service-Azure-Synapse-Analytics";
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
    color: "text-red-300",
    hoverColor: "text-red-300",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
  },
  docker: {
    icon: <FaDocker />,
    color: "text-blue-500",
    hoverColor: "hover:text-blue-500",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  hive: {
    icon: <SiApachehive />,
    color: "text-yellow-400",
    hoverColor: "hover:text-yellow-400",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
  },
  makefile: {
    icon: <SiMake />,
    color: "text-red-400",
    hoverColor: "hover:text-red-400",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
  },
  bash: {
    icon: <SiGnubash />,
    color: "text-orange-600",
    hoverColor: "hover:text-orange-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  fastapi: {
    icon: <SiFastapi />,
    color: "text-green-600",
    hoverColor: "hover:text-green-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
  },
  mongodb: {
    icon: <SiMongodb />,
    color: "text-green-500",
    hoverColor: "hover:text-green-500",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
  },
  kafka: {
    icon: <SiApachekafka />,
    color: "text-yellow-600",
    hoverColor: "hover:text-yellow-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
  },
  redpanda: {
    icon: <GiPanda />,
    color: "text-yellow-600",
    hoverColor: "hover:text-yellow-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
  },
  zookeeper: {
    icon: <SiApache />,
    color: "text-green-300",
    hoverColor: "hover:text-green-300",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
  },
  html5: {
    icon: <FaHtml5 />,
    color: "text-orange-600",
    hoverColor: "hover:text-orange-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  css3: {
    icon: <FaCss3Alt />,
    color: "text-blue-300",
    hoverColor: "hover:text-blue-300",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  "chart.js": {
    icon: <SiChartdotjs />,
    color: "text-pink-600",
    hoverColor: "hover:text-pink-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_pink)_drop-shadow(0_0_10px_pink)_drop-shadow(0_0_15px_pink)]",
  },
  streamlit: {
    icon: <SiStreamlit />,
    color: "text-red-600",
    hoverColor: "hover:text-red-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]",
  },
  python: {
    icon: <SiPython />,
    color: "text-yellow-600",
    hoverColor: "hover:text-yellow-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
  },
  tensorflow: {
    icon: <SiTensorflow />,
    color: "text-orange-700",
    hoverColor: "hover:text-orange-700",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  vite: {
    icon: <SiVite />,
    color: "text-violet-500",
    hoverColor: "hover:text-violet-500",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_violet)_drop-shadow(0_0_10px_violet)_drop-shadow(0_0_15px_violet)]",
  },
  "scikit-learn": {
    icon: <SiScikitlearn />,
    color: "text-orange-500",
    hoverColor: "hover:text-orange-500",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  "sql-server": {
    icon: <FaDatabase />,
    color:"text-white",
    name: "sql-server",
    hoverColor: "hover:text-violet-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_violet)_drop-shadow(0_0_10px_violet)_drop-shadow(0_0_20px_violet)]",
  },
  pandas: {
    icon: <SiPandas />,
    color: "text-blue-700",
    hoverColor: "hover:text-blue-700",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  jupyter: {
    icon: <SiJupyter />,
    color: "text-orange-600",
    hoverColor: "hover:text-orange-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  kaggle: {
    icon: <SiKaggle />,
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  seaborn: {
    icon: <IoBarChart />,
    color: "text-blue-700",
    hoverColor: "hover:text-blue-700",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  matplotlib: {
    icon: <TbChartLine />,
    color: "text-blue-500",
    hoverColor: "hover:text-blue-500",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  react: {
    icon: <SiReact />,
    color: "text-blue-500",
    hoverColor: "hover:text-blue-500",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  langchain: {
    icon: <SiLangchain />,
    color: "text-gray-600",
    hoverColor: "hover:text-gray-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]",
  },
  gemini: {
    icon: <SiGooglegemini />,
    color: "text-blue-400",
    hoverColor: "hover:text-blue-400",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_#FF00FF)_drop-shadow(0_0_10px_#FF00FF)_drop-shadow(0_0_15px_#FF00FF)]",
  },
  huggingface: {
    icon: <SiHuggingface />,
    color: "text-yellow-600",
    hoverColor: "hover:text-yellow-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_#FFA500)_drop-shadow(0_0_10px_#FFA500)_drop-shadow(0_0_15px_#FFA500)]",
  },
  tailwindcss: {
    icon: <SiTailwindcss />,
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_#38B2AC)_drop-shadow(0_0_10px_#38B2AC)_drop-shadow(0_0_15px_#38B2AC)]",
  },
  numpy: {
    icon: <SiNumpy />,
    color: "text-blue-500",
    hoverColor: "hover:text-blue-500",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_#013243)_drop-shadow(0_0_10px_#013243)_drop-shadow(0_0_15px_#013243)]",
  },
  airflow: {
    icon: <SiApacheairflow />,
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  "aws_(s3_bucket)": {
    icon: <FaCloud />,
    color: "text-orange-300",
    hoverColor: "hover:text-orange-300",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  snowflake: {
    icon: <FaSnowflake />,
    color: "text-blue-400",
    hoverColor: "hover:text-blue-400",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  dbt: {
    icon: <SiDbt />,
    color: "text-orange-600",
    hoverColor: "hover:text-orange-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]",
  },
  minio: {
    icon: <SiMinio />,
    color: "text-pink-600",
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
    color: "text-pink-600",
    hoverColor: "hover:text-pink-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_pink)_drop-shadow(0_0_10px_pink)_drop-shadow(0_0_15px_pink)]",
  },
  hadoop: {
    icon: <SiApachehadoop />,
    color: "text-yellow-400",
    hoverColor: "hover:text-yellow-400",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]",
  },
  postgres: {
    icon: <SiPostgresql />,
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600",
    hoverGlow:
      "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]",
  },
  grafana:{
    icon:<SiGrafana />,
    color: "text-orange-600",
    hoverColor: "hover:text-orange-600",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]"
  },
  redis:{
    icon:<DiRedis />,
    color: "text-red-600",
    hoverColor: "hover:text-red-600",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]"
  },
  prometheus:{
    icon:<SiPrometheus />,
    color: "text-red-800",
    hoverColor: "hover:text-red-800",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]"
  },
  adf:{
    icon:<DataFactories />,
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
  },
  asa:{
    icon:<AzureSynapseAnalytics />,
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
  },
  metabase:{
    icon:<SiMetabase />,
    color: "text-blue-400",
    hoverColor: "hover:text-blue-400",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
  },
  spark:{
    icon:<SiApachespark />,
    color: "text-orange-500",
    hoverColor: "hover:text-orange-500",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]"
  },
  n8n:{
    icon:<SiN8N />,
    color: "text-red-500",
    hoverColor: "hover:text-red-500",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_10px_red)_drop-shadow(0_0_15px_red)]"
  },
  duckdb:{
    icon:<SiDuckdb />,
    color: "text-green-600",
    hoverColor: "hover:text-green-600",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]"
  },
  obsidian:{
    icon:<SiObsidian />,
    color: "text-violet-400",
    hoverColor: "hover:text-violet-400",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_violet)_drop-shadow(0_0_10px_violet)_drop-shadow(0_0_15px_violet)]"
  },
  markdown:{
    icon:<SiMarkdown />,
    color: "text-gray-300",
    hoverColor: "hover:text-gray-300",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]"
  },
  azure:{
    icon:<FaMicrosoft />,
    color: "text-blue-500",
    hoverColor: "hover:text-blue-500",
    hoverGlow:
    "hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
  }
};
