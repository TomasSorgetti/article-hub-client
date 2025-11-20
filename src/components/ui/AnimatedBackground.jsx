import { useRef, useState, useEffect } from "react";

export default function AnimatedBackground({ globalInteractive = false }) {
  const [pos, setPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const targetPos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      if (!globalInteractive) {
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (!isInside) return;
      }

      // Calcular posición relativa dentro del contenedor
      const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
      targetPos.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let frame;
    const animate = () => {
      setPos((prev) => {
        const speed = 0.08;
        const x = prev.x + (targetPos.current.x - prev.x) * speed;
        const y = prev.y + (targetPos.current.y - prev.y) * speed;
        return { x, y };
      });
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, [globalInteractive]);

  const squareSize = 10;
  const gap = 32;
  const totalCols = Math.ceil(window.innerWidth / (squareSize + gap));
  const totalRows = Math.ceil(window.innerHeight / (squareSize + gap));

  const squares = [];
  for (let y = 0; y < totalRows; y++) {
    for (let x = 0; x < totalCols; x++) {
      squares.push(
        <div
          key={`${x}-${y}`}
          className="bg-white/30"
          style={{
            width: `${squareSize}px`,
            height: `${squareSize / 2}px`,
            marginRight: `${gap}px`,
            marginBottom: `${gap}px`,
          }}
        />
      );
    }
  }

  return (
    <div
      ref={containerRef}
      className="absolute z-0 inset-0 w-full h-full overflow-hidden bg-black pointer-events-none"
    >
      <div
        className="absolute inset-0 flex flex-wrap pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle 150px at ${pos.x}px ${pos.y}px, white 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 150px at ${pos.x}px ${pos.y}px, white 0%, transparent 100%)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        {squares}
      </div>

      <div className="absolute inset-0 bg-black/90 pointer-events-none" />

      <div
        className="absolute rounded-full pointer-events-none blur-3xl"
        style={{
          width: "320px",
          height: "320px",
          transform: `translate(${pos.x - 160}px, ${pos.y - 160}px)`,
          background: `radial-gradient(circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.05) 35%,
      rgba(255, 255, 255, 0.01) 65%,
      rgba(0, 0, 0, 0) 100%
    )`,
          mixBlendMode: "screen",
        }}
      />

      <div className="w-full h-full bg-radial from-primary/10 via-primary/10 to-primary/20 blur-2xl absolute inset-0 pointer-events-none"></div>
      <div className="w-260 h-260 rounded-full bg-radial from-primary/30 to-transparent blur-2xl absolute -top-145 -left-210 pointer-events-none"></div>
      <div className="w-200 h-200 rounded-full bg-radial from-primary/20 to-transparent blur-2xl absolute -top-140 -right-160 pointer-events-none"></div>
      <div className="w-full h-200 rounded-full bg-radial from-primary/15 to-transparent blur-2xl absolute -bottom-140 left-0 pointer-events-none"></div>
    </div>
  );
}
