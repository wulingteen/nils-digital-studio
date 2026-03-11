// @ts-ignore
import createGlobe from "@/lib/cobe.js";
import { useEffect, useRef } from "react";
import { useSpring } from "framer-motion";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  
  // Framer Motion spring for smooth dragging
  const springInfo = useSpring(0, {
    mass: 1,
    tension: 280,
    friction: 60,
    precision: 0.001,
  });

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        // Cobe needs the explicit pixel dimensions for sharp retina display
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2, // Slight tilt to see Europe and Asia clearly
      dark: 1, // Dark mode aesthetic
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.78, 0.63, 0.31], // Primary Gold color from the theme
      glowColor: [0.1, 0.1, 0.1], // Fades into the dark background
      markers: [
        // longitude, latitude, size
        { location: [25.0330, 121.5654], size: 0.1 },     // Taipei, Taiwan
        { location: [52.5200, 13.4050], size: 0.08 },     // Berlin, Germany
        { location: [52.3676, 4.9041], size: 0.08 },      // Amsterdam, Netherlands
      ],
      onRender: (state) => {
        // We handle interactive dragging via the spring, while auto-rotating slowly otherwise.
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + springInfo.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [springInfo]);

  return (
    <div
      className={`absolute inset-0 mx-auto aspect-square w-full max-w-[600px] ${className}`}
      style={{
        width: "100%",
        contain: "layout paint size",
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            springInfo.set(delta / 200);
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            springInfo.set(delta / 100);
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          animation: "fade-in 1.5s ease-in forwards",
        }}
      />
    </div>
  );
};
