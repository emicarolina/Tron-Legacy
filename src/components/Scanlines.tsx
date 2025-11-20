import React from "react";

const Scanlines: React.FC = () => {
  return (
    <>
      {/* Scanlines */}
      <div
        className="fixed inset-0 z-100 pointer-events-none opacity-60"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          )`,
          backgroundSize: "100% 4px",
        }}
      />

      {/* Vinheta */}
      <div
        className="fixed inset-0 z-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, transparent 60%, black 150%)",
        }}
      />
    </>
  );
};

export default Scanlines;
