import Typewriter from "typewriter-effect";

export const HeroText = ({ strings, className }) => {
  return (
    <div className={className}>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 100,
        }}
      />
    </div>
  );
};