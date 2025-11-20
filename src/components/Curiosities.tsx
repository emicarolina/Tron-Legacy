import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactTyped } from "react-typed";

const curiosities = [
  {
    title: "Trilha sonora icônica",
    description:
      "Daft Punk não só compôs a trilha sonora, como também faz uma participação especial no filme como DJs virtuais!",
    image: "/curiosities/daft.webp",
  },
  {
    title: "Tecnologia inovadora",
    description:
      "Tron: Legacy foi um dos primeiros filmes a usar captura de movimentos para criar uma versão mais jovem de um ator (Jeff Bridges como Clu).",
    image: "/curiosities/clu2.webp",
  },
  {
    title: "Visual premiado",
    description:
      "O filme foi indicado ao Oscar pela excelência em efeitos visuais e som, revolucionando o design de filmes futuristas.",
    image: "/curiosities/oscar.webp",
  },
  {
    title: "Inspiração original",
    description:
      "O conceito de Tron surgiu da paixão de Steven Lisberger por videogames nos anos 80, especialmente Pong!",
    image: "/curiosities/steven.webp",
  },
];

const Curiosities = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center text-center">
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-bold font-prompt text-tron-blue mb-8"
      >
        <ReactTyped strings={["Curiosidades"]} showCursor={true} />
      </h2>

      <div
        data-aos="fade-up"
        className="
      flex flex-col md:flex-row 
      items-center justify-center 
      w-full max-w-4xl mx-auto gap-4 px-4
    "
      >
        {/* SETA ESQUERDA — fica escondida no mobile */}
        <button
          onClick={scrollPrev}
          className="
        hidden md:flex 
        p-3 rounded-full bg-tron-blue text-black hover:bg-white
      "
        >
          <ArrowLeft />
        </button>

        {/* CAROUSEL ÚNICO */}
        <div
          className="overflow-hidden w-full max-w-sm md:max-w-xl"
          ref={emblaRef}
        >
          <div className="flex">
            {curiosities.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] p-4 flex flex-col items-center justify-center"
              >
                <div
                  className="
              bg-gray-900 p-6 rounded-2xl 
              w-full min-h-[350px] md:min-w-[400px]
              md:min-h-[350px]
              flex flex-col justify-center border-tron-blue/30 border-2 select-none
            "
                >
                  <h3 className="text-2xl md:text-2xl font-semibold mb-2 font-st text-tron-blue">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-prompt text-gray-400">
                    {item.description}
                  </p>

                  <img
                    src={item.image}
                    className="w-30 h-30 md:w-34 md:h-34 rounded-full mx-auto mt-8 object-cover border-2 border-tron-blue/50"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SETA DIREITA — escondida no mobile */}
        <button
          onClick={scrollNext}
          className="
        hidden md:flex 
        p-3 rounded-full bg-tron-blue text-black hover:bg-white
      "
        >
          <ArrowRight />
        </button>
      </div>

      {/* SETAS NO MOBILE EMBAIXO */}
      <div className="flex md:hidden justify-center gap-6 mt-4">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full bg-tron-blue text-black hover:bg-white"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 rounded-full bg-tron-blue text-black hover:bg-white"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Curiosities;
