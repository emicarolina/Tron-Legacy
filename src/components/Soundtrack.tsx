import { ReactTyped } from "react-typed";

const Soundtrack = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-6 py-16 text-center">
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-bold font-prompt text-tron-blue mb-6"
      >
        <ReactTyped
          strings={["Trilha Sonora por Daft Punk"]}
          showCursor={true}
        />
      </h2>
      <p
        data-aos="fade-up"
        className="text-lg md:text-xl text-white max-w-3xl leading-relaxed mb-8 font-light"
      >
        A trilha sonora de{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tron-blue to-blue-500 font-bold">
          Tron: Legacy
        </span>{" "}
        é uma obra-prima que combina música eletrônica com orquestra clássica,
        criando uma atmosfera única. Daft Punk elevou o filme a outro nível,
        misturando batidas futuristas com emoções profundas.
      </p>
      <div className="w-full max-w-md">
        <iframe
          data-aos="fade-up"
          src="https://open.spotify.com/embed/album/3AMXFnwHWXCvNr5NCCpLZI?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Soundtrack;
