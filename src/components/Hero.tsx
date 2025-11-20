import TronBackground from "./TronBackground";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-start justify-center text-center overflow-hidden pt-35 "
    >
      <TronBackground />
      <div className="text-white">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          className="text-shadow-tron text-tron-blue text-4xl md:text-7xl max-w-80 md:min-w-300 font-orbitron "
        >
          Tron Legacy: o impossível se torna real.
        </h1>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          className="text-gray-300 max-w-74 md:min-w-130 mx-auto text-lg md:text-xl leading-relaxed glass-panel mt-15 p-6 rounded-sm font-st"
        >
          Entre em um mundo criado por códigos luminosos e descubra como a
          tecnologia pode transformar realidades.
        </p>
      </div>
    </section>
  );
};

export default Hero;
