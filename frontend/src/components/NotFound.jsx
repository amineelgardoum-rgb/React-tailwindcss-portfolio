import { Link } from "react-router-dom";
import { CustomCursor } from "./CustomCursor";
import "./glow.css"
import MatrixBackground from "./MatrixBackground";
const NotFound = () => {
  return (
    <>
      <CustomCursor />
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 overflow-hidden">
        <MatrixBackground />
        <div
          className="
            mb-8 flex items-center justify-center filter
            border-2 border-green-400 rounded-lg px-12 py-6 
            bg-black text-white animate-glow transition-all z-20 duration-500
          "
        >
          <h1 className="text-7xl md:text-9xl font-bold font-mono tracking-widest">
            404
          </h1>
        </div>

        <p className="text-xl mb-6 font-mono">Page Not Found</p>
        <Link
          to="/"
          className="text-green-400 cursor-none underline hover:text-green-600 transition-all font-mono"
        >
          Go back home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
