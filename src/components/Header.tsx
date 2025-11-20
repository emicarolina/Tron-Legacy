const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-black/30 border-b border-white/10 ">
      <div className="text-tron-blue font-orbitron text-2xl font-bold">
        <a href="/">TRON: Legacy</a>
      </div>
      <nav className="space-x-4 text-white text-lg flex md:space-x-8">
        <a
          href="#about"
          className="font-prompt  hover:text-tron-blue transition"
        >
          Sobre
        </a>
        <a
          href="#gallery"
          className="font-prompt hover:text-tron-blue transition"
        >
          Galeria
        </a>
        <a
          href="#legacy"
          className="font-prompt hover:text-tron-blue transition"
        >
          Legado
        </a>
      </nav>
    </header>
  );
};

export default Header;
