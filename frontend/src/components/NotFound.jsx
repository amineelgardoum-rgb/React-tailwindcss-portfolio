import { Link } from "react-router-dom";
import { CustomCursor } from "./CustomCursor";

const NotFound = () => {
  return (
    <>
      <CustomCursor />
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 overflow-hidden">
        <div
          className="
            mb-8 flex items-center justify-center 
            border-2 border-green-400 rounded-lg px-12 py-6 
            shadow-[0_0_15px_rgba(74,222,128,0.5)]
            md:shadow-[0_0_25px_rgba(74,222,128,0.7)]
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
