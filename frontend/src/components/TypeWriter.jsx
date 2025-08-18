import Typewriter from "typewriter-effect";

export const HeroText = ({strings}) => {
  return (
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 100,
        }}
      />
  )
  
};
