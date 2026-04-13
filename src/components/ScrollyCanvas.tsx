"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

import Overlay from "./Overlay";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, "0");
        img.src = `/sequance1/frame_${paddedIndex}_delay-0.066s.webp`;
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas display at full window inner size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = images[index];

    // object-fit: cover logic mapped to canvas
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Fill with #121212 background just in case
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(
        img, 
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // Initial render when images load
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
        renderFrame(0);
    }
  }, [images]);

  // Render on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0 && canvasRef.current) {
      renderFrame(Math.floor(latest));
    }
  });

  // Re-render on resize
  useEffect(() => {
    const handleResize = () => {
        if (images.length > 0) {
            renderFrame(Math.floor(frameIndex.get()));
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 block h-full w-full"
        />
        <div className="absolute inset-0 z-10 pointer-events-none">
           <Overlay progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
