import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaJava,
  FaLinux,
  FaPython,
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
  SiGnubash,
  SiMinio,
  SiPostgresql,
  SiApachehadoop,
  SiTrino,
  SiDbt,
  SiApachehive,
  SiApachecassandra,
  SiSnowflake,
  SiElasticsearch,
  SiDbeaver
} from "react-icons/si";
import {
  TbSql,
  TbChartLine,
  TbBrandPowershell,
  TbBrandNextjs,
} from "react-icons/tb";
import { VscSymbolNamespace } from "react-icons/vsc";
import { IoBarChart } from "react-icons/io5";
import { GiPanda} from "react-icons/gi";
export const icons = {
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
  "Sql-server":{
    icon:<FaDatabase />,
    name:"sql-server",
    hoverColor:"hover:text-violet-600",
    shadow:
      "hover:[filter:drop-shadow(0_0_5px_violet)_drop-shadow(0_0_10px_violet)_drop-shadow(0_0_20px_violet)]"
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
  hive:{
    icon:<SiApachehive />,
    name:"Hive",
    hoverColor:"hover:text-yellow-400",
    shadow:
     "hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_20px_yellow)]",
    url:"#"
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
  },
  cassandra:{
    icon:<SiApachecassandra />,
    name:"cassandra",
    hoverColor:"hover:text-blue-300",
    shadow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_20px_blue)]"
  },
  snowflake:{
    icon:<SiSnowflake />,
    name:"snowflake",
    hoverColor:"hover:text-blue-500",
    shadow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_20px_blue)]"
  },
  elasticsearch:{
    icon:<SiElasticsearch />,
    name:"elasticsearch",
    hoverColor:"hover:text-green-400",
    shadow:"hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_20px_green)]"
  },
  dbeaver:{
    icon:<SiDbeaver />,
    name:"dbeaver",
    hoverColor:"hover:text-white",
    shadow:"hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_20px_white)]"
  }
};
