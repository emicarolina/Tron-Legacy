import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      if (!isMobile) setIsOpen(false);
    } else {
      audioRef.current.play();
      if (!isMobile) setIsOpen(true);
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={togglePlay}
      className={`fixed bottom-6 right-6 z-50 cursor-pointer
        transition-all duration-300 ease-out shadow-lg rounded-full
        bg-gray-900 ring-2 ring-gray-100 text-gray-100 flex items-center
        ${
          !isMobile && isOpen
            ? "w-64 h-20 rounded-2xl px-4"
            : "w-16 h-16 justify-center"
        }
      `}
    >
      <audio ref={audioRef} src="/tron-soundtrack.mp3" loop />

      {!isMobile && isOpen ? (
        <div className="flex ml-3 items-center gap-3 w-full">
          <img
            src="/album.webp"
            alt="Tron Legacy album cover"
            className="w-12 h-12 rounded-md object-cover"
          />

          <div className="flex flex-col flex-1">
            <span className="font-semibold text-sm font-prompt">
              End of Line
            </span>
            <span className="text-xs text-gray-500 font-prompt">Daft Punk</span>
          </div>

          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </div>
      ) : (
        <>{isPlaying ? <Pause size={28} /> : <Play size={28} />}</>
      )}
    </div>
  );
};

export default MusicPlayer;
