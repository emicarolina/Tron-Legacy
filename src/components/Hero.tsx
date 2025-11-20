import grid from "../assets/images/hero.webp";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-start justify-center text-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={grid}
          alt="Tron Legacy Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-white px-4">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          className="text-shadow-tron text-tron-blue text-4xl md:text-5xl font-orbitron font-bold"
        >
          <ReactTyped
            strings={["Tron Legacy: o impossível se torna real."]}
            typeSpeed={50}
            backSpeed={30}
            startDelay={1900}
            backDelay={3000}
            showCursor={true}
            loop={true}
          />
        </h1>
        <p
          data-aos="fade-zoom-in"
          data-aos-delay="3000"
          data-aos-easing="ease-in-back"
          className="text-lg pt-2 md:text-2xl font-extralight"
        >
          Explore um universo de luz, códigos e revolução digital.
        </p>
      </div>
    </section>
  );
};

export default Hero;
