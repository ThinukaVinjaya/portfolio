"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
  sequencePaths?: string[];
  OverlayComponent?: React.ComponentType<{ progress: MotionValue<number> }>;
}

export default function ScrollyCanvas({ 
  sequencePaths = ["/sequance1", "/sequance2"], 
  OverlayComponent 
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const totalFrames = 120 * sequencePaths.length; // 240 frames
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 480vh on mobile ensures fast, responsive scrolling; 650vh on desktop provides smooth cinematic feel
  const containerHeightVh = isMobile ? 480 : 650;
  // Let the 240 frames play across 0% to 75% of scroll, then hold final pose for the About section
  const animationEndProgress = 0.75; 

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Freeze at the last frame after animationEndProgress
  const frameIndex = useTransform(scrollYProgress, [0, animationEndProgress], [0, totalFrames - 1]);

  // Preload all frames
  useEffect(() => {
    let active = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    sequencePaths.forEach((path) => {
      for (let i = 0; i < 120; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, "0");
        img.src = `${path}/frame_${paddedIndex}_delay-0.066s.webp`;
        img.onload = () => {
          if (!active) return;
          loadedCount++;
          // When first 15 frames are ready, set isLoaded to true so user sees immediate render
          if (loadedCount >= 15) {
            setIsLoaded(true);
          }
        };
        loadedImages.push(img);
      }
    });

    setImages(loadedImages);

    return () => {
      active = false;
    };
  }, [sequencePaths]);

  const renderFrame = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(images.length - 1, index));
    const img = images[clampedIndex];
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // object-fit: cover math
      const hRatio = displayWidth / img.width;
      const vRatio = displayHeight / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (displayWidth - img.width * ratio) / 2;
      const centerShift_y = (displayHeight - img.height * ratio) / 2;
      
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, displayWidth, displayHeight);
      
      ctx.drawImage(
        img, 
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );

      ctx.restore();
    };

    if (img.complete && img.naturalWidth !== 0) {
      draw();
    } else {
      img.onload = () => {
        if (Math.floor(frameIndex.get()) === clampedIndex) {
          draw();
        }
      };
    }
  }, [images, frameIndex]);

  // Render on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0 && canvasRef.current) {
      renderFrame(Math.floor(latest));
    }
  });

  // Handle canvas sizing and initial/resize rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      if (images.length > 0) {
        renderFrame(Math.floor(frameIndex.get()));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex, renderFrame]);

  // Initial draw once loaded
  useEffect(() => {
    if (isLoaded && images.length > 0) {
      renderFrame(0);
    }
  }, [isLoaded, images, renderFrame]);

  return (
    <section 
      ref={containerRef} 
      style={{ height: `${containerHeightVh}vh` }} 
      className="relative w-full bg-[#121212]"
    >
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden">
        {/* Canvas Display */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 block h-full w-full"
        />

        {/* Cinematic Vignette & Ambient Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/40 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(18,18,18,0.7)_100%)] pointer-events-none z-[1]" />
        
        {/* Bottom Smooth Transition to Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-44 md:h-64 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent pointer-events-none z-[2]" />

        {/* Narrative Overlay Component */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {OverlayComponent && <OverlayComponent progress={scrollYProgress} />}
        </div>
      </div>
    </section>
  );
}
