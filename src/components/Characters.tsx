import kevin from "../assets/images/characters/kevin.webp";
import sam from "../assets/images/characters/sam.webp";
import quorra from "../assets/images/characters/quorra.webp";
import clu from "../assets/images/characters/clu.webp";
import { ReactTyped } from "react-typed";

const Characters = () => {
  return (
    <section className="w-full min-h-screen py-16 px-4 bg-black text-white flex flex-col items-center justify-center">
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-prompt text-tron-blue"
      >
        <ReactTyped strings={["Personagens Principais"]} showCursor={true} />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div
          data-aos="fade-up"
          className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col items-center text-center"
        >
          <img
            src={kevin}
            alt="Kevin Flynn"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Kevin Flynn</h3>
          <p className="text-sm">
            Criador visionário do Grid, preso no mundo digital.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col items-center text-center"
        >
          <img
            src={sam}
            alt="Sam Flynn"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Sam Flynn</h3>
          <p className="text-sm">
            Filho de Kevin, corajoso e determinado a encontrar seu pai.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col items-center text-center"
        >
          <img
            src={quorra}
            alt="Quorra"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Quorra</h3>
          <p className="text-sm">
            Lutadora ágil e fiel, guardiã dos segredos do Grid.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col items-center text-center"
        >
          <img
            src={clu}
            alt="CLU"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">CLU</h3>
          <p className="text-sm">
            Programa de controle que se volta contra seu criador.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Characters;
