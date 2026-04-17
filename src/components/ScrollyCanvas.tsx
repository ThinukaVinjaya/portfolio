"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
  sequencePaths?: string[];
  OverlayComponent?: React.ComponentType<{ progress: MotionValue<number> }>;
}

export default function ScrollyCanvas({ sequencePaths = ["/sequance1"], OverlayComponent }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const totalFrames = 120 * sequencePaths.length;
  // Extra 50vh or 500vh reading time? 500vh is good.
  const containerHeightVb = sequencePaths.length * 500 + 500; 
  const animationEndProgress = (sequencePaths.length * 500) / containerHeightVb; // e.g. 1000 / 1500 = 0.666

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Freeze at the last frame after animationEndProgress
  const frameIndex = useTransform(scrollYProgress, [0, animationEndProgress], [0, totalFrames - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    sequencePaths.forEach((path) => {
      for (let i = 0; i < 120; i++) {
          const img = new Image();
          const paddedIndex = String(i).padStart(3, "0");
          img.src = `${path}/frame_${paddedIndex}_delay-0.066s.webp`;
          loadedImages.push(img);
      }
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImages(loadedImages);
  }, [sequencePaths]);

  const renderFrame = useCallback((index: number) => {
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
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(
        img, 
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  }, [images]);

  // Initial render when images load
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
        renderFrame(0);
    }
  }, [images, renderFrame]);

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
  }, [images, frameIndex, renderFrame]);

  return (
    <section ref={containerRef} style={{ height: `${containerHeightVb}vh` }} className="relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 block h-full w-full"
        />
        <div className="absolute inset-0 z-10 pointer-events-none">
           {OverlayComponent && <OverlayComponent progress={scrollYProgress} />}
        </div>
      </div>
    </section>
  );
}
