import { ReactTyped } from "react-typed";

const Legacy = () => {
  return (
    <section
      id="legacy"
      style={{
        backgroundImage: "url('/legacy.web')",
      }}
      className="w-full min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center justify-center text-center"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-bold mb-10 font-prompt text-tron-blue"
      >
        <ReactTyped strings={["O Legado de Tron: Legacy"]} showCursor={true} />
      </h2>
      <div data-aos="fade-up" className="max-w-3xl space-y-6">
        <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed font-light">
          Lançado em 2010,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tron-blue to-blue-500 font-bold">
            Tron: Legacy
          </span>{" "}
          marcou uma nova era nos efeitos visuais e na trilha sonora dos
          blockbusters. Com sua estética neon e atmosfera digital única, o filme
          redefiniu o visual da ficção científica moderna. A participação do
          Daft Punk na trilha sonora não só potencializou a imersão no universo,
          como influenciou gerações de compositores e cineastas.
        </p>
        <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed font-light">
          Mesmo anos após seu lançamento,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tron-blue to-blue-500 font-bold">
            Tron: Legacy
          </span>{" "}
          continua a inspirar não só o cinema, mas também o design, os
          videogames e a moda futurista. Sua mensagem sobre a relação entre
          humanos e tecnologia permanece atual, tornando o filme uma obra
          atemporal que vai além do entretenimento: é uma reflexão sobre o
          futuro que já vivemos.
        </p>
      </div>
    </section>
  );
};

export default Legacy;
