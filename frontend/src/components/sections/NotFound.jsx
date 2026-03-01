import { Link } from "react-router-dom";
import { CustomCursor } from "../ui/CustomCursor";
import "../ui/glow.css";
import  { Background } from "../ui/Background";

const NotFound = () => {
  return (
    <>
      <CustomCursor />
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono overflow-hidden">
        {/* Matrix background */}
        <Background className="absolute inset-0 z-0" />

        {/* 404 Title */}
        <div
          className="
            relative mb-8 px-12 py-6 rounded-lg border-2 border-green-500 
            bg-black/70 backdrop-blur-sm text-center z-20
            animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] duration-300 ease-in-out
          "
        >
          <h1
            className="
            relative
              text-7xl md:text-9xl font-bold tracking-widest 
              glitch  z-20 text-white hover:text-green-500 duration-300  ease-in-out transition-all
            "
            data-text="404"
          >
            404
          </h1>
        </div>

        {/* Message */}
        <p className="text-xl mb-6 text-white z-20 ">
          Page Not Found
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="
            relative px-6 py-3 border-2 border-green-500 rounded-lg
            hover:bg-green-500 hover:text-black
            transition-all duration-300 ease-in-out z-20
            cursor-none hover:scale-110 hover:-translate-y-2
            drop-shadow-[0_0_5px_#22c55e]
            hover:drop-shadow-[0_0_10px_#22c55e]
          "
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
