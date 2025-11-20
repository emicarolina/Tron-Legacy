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
        className="flex items-center justify-center w-full px-4"
      >
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-tron-blue text-black font-bold hover:bg-white hover:shadow-tron mr-2"
        >
          <ArrowLeft />
        </button>

        <div className="overflow-hidden w-full max-w-3xl" ref={emblaRef}>
          <div className="flex">
            {curiosities.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] p-8 flex flex-col items-center justify-center select-none"
              >
                <div className="bg-gray-900 p-8 rounded-2xl max-w-xl min-h-[400px] md:min-h-[300px] flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-[28px] font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[16px]">{item.description}</p>
                  <img
                    src={item.image}
                    className="w-32 h-32 max-w-xs rounded-full mx-auto mt-8 object-cover border-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-tron-blue text-black font-bold hover:bg-white hover:shadow-tron ml-2"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Curiosities;
