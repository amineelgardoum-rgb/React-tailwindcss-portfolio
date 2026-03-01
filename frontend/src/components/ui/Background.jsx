export const Background = () => {
  return (
    <>
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-grid-flow"
          style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                             linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              #10b981 100px,
              #10b981 101px
            )`,
          }}
        ></div>
      </div>

      {/* Multiple gradient orbs for depth */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl animate-float"
      ></div>
      <div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-float-delayed"
      ></div>

      {/* Radial gradient overlay for vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-particle-1"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-particle-2"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-particle-3"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-particle-4"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-particle-5"></div>
      </div>

      <style jsx>{`
        @keyframes grid-flow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -30px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.05);
          }
          66% {
            transform: translate(20px, -20px) scale(0.95);
          }
        }

        @keyframes particle-1 {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(100px, -200px);
            opacity: 0;
          }
        }

        @keyframes particle-2 {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(-150px, -250px);
            opacity: 0;
          }
        }

        @keyframes particle-3 {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(120px, 180px);
            opacity: 0;
          }
        }

        @keyframes particle-4 {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(-100px, 220px);
            opacity: 0;
          }
        }

        @keyframes particle-5 {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(80px, -180px);
            opacity: 0;
          }
        }

        .animate-grid-flow {
          animation: grid-flow 20s ease-in-out infinite;
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-particle-1 {
          animation: particle-1 8s ease-in-out infinite;
        }

        .animate-particle-2 {
          animation: particle-2 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-particle-3 {
          animation: particle-3 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-particle-4 {
          animation: particle-4 9s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-particle-5 {
          animation: particle-5 11s ease-in-out infinite;
          animation-delay: 3s;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at 50% 50%, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
};