import { ReactTyped } from "react-typed";

const gallery = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
  "image7",
  "image8",
  "image9",
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="w-full min-h-screen py-16 px-4 bg-black text-white flex flex-col items-center"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-prompt text-tron-blue"
      >
        <ReactTyped strings={["Galeria de Fotos"]} showCursor={true} />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {gallery.map((image, key) => (
          <div
            data-aos="fade-up"
            key={key}
            className="border-2 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={`/gallery/${image}.webp`}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
