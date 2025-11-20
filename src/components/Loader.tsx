import React, { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1); // Para o efeito de fade-out

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setOpacity(0); // Inicia fade-out
            setTimeout(onComplete, 500); // Avisa o App que acabou
          }, 300);
          return 100;
        }
        // Incremento aleatório para parecer processamento real
        return Math.min(prev + Math.random() * 15, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (opacity === 0) return null; // Opcional: remove do render se invisível

  return (
    <div
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ opacity: opacity }}
    >
      {/* Título com fonte Orbitron (importe no index.html ou CSS global) */}
      <div
        className="text-4xl md:text-6xl font-orbitron font-bold tracking-widest mb-4 text-white"
        style={{
          textShadow: "0 0 10px #0ff",
        }}
      >
        TRON
      </div>

      {/* Barra de Progresso */}
      <div className="w-48 h-1 bg-gray-800 rounded overflow-hidden relative">
        <div
          className="h-full bg-cyan-400 shadow-[0_0_10px_#0ff] transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-2 text-cyan-400 text-xs tracking-widest font-mono">
        INICIALIZANDO SISTEMA... {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;
