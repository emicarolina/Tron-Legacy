import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16 text-center"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-bold font-prompt text-tron-blue mb-6"
      >
        <ReactTyped strings={["Sobre o Filme"]} showCursor={true} />
      </h2>
      <p
        data-aos="fade-up"
        className="text-lg md:text-xl text-white max-w-3xl leading-relaxed font-light"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tron-blue to-blue-500 font-bold">
          Tron: Legacy
        </span>{" "}
        é uma jornada visual e sonora que transcende o tempo. Lançado em 2010, o
        filme combina tecnologia de ponta, uma narrativa emocionante e uma
        trilha sonora icônica composta pelo Daft Punk. Prepare-se para mergulhar
        em um universo onde luz e códigos definem a realidade.
      </p>
    </section>
  );
};

export default About;
