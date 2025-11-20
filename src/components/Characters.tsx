import kevin from "../assets/images/characters/kevin.webp";
import sam from "../assets/images/characters/sam.webp";
import quorra from "../assets/images/characters/quorra.webp";
import clu from "../assets/images/characters/clu.webp";
import { ReactTyped } from "react-typed";

const characters = [
  {
    img: kevin,
    name: "Kevin Flynn",
    desc: "Criador visionário do Grid, preso no mundo digital.",
  },
  {
    img: sam,
    name: "Sam Flynn",
    desc: "Filho de Kevin, corajoso e determinado a encontrar seu pai.",
  },
  {
    img: quorra,
    name: "Quorra",
    desc: "Lutadora ágil e fiel, guardiã dos segredos do Grid.",
  },
  {
    img: clu,
    name: "CLU",
    desc: "Programa de controle que se volta contra seu criador.",
  },
];

const Characters = () => {
  return (
    <section className="w-full min-h-screen py-16 px-4 bg-black flex flex-col items-center justify-center">
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-prompt text-tron-blue"
      >
        <ReactTyped strings={["Personagens Principais"]} showCursor={true} />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {characters.map((char, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col items-center text-center border-tron-blue/30 border-2"
          >
            <img
              src={char.img}
              alt={char.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-tron-blue font-st">
              {char.name}
            </h3>
            <p className="text-sm text-gray-500 font-prompt">{char.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Characters;
