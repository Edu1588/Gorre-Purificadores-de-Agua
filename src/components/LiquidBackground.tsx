import { useRef, useEffect } from 'react';

export function LiquidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Simulation grid dimensions (scaled down for high performance 60fps physics)
    const SIM_SCALE = 0.25; 
    let simWidth = 0;
    let simHeight = 0;
    let size = 0;

    let buffer1: Float32Array;
    let buffer2: Float32Array;
    let textureData: ImageData | null = null;
    let rippleImageData: ImageData | null = null;

    const damping = 0.965; // Wave dissipation factor

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      
      if (width === 0 || height === 0) return;

      canvas.width = width;
      canvas.height = height;

      simWidth = Math.floor(width * SIM_SCALE);
      simHeight = Math.floor(height * SIM_SCALE);
      size = simWidth * simHeight;

      buffer1 = new Float32Array(size);
      buffer2 = new Float32Array(size);

      // Render static water texture base on a temp canvas
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx) {
        // Deep blue liquid gradient with caustics pattern
        const grad = tempCtx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#03071e');
        grad.addColorStop(0.3, '#03045e');
        grad.addColorStop(0.6, '#0077b6');
        grad.addColorStop(0.85, '#0096c7');
        grad.addColorStop(1, '#03045e');
        tempCtx.fillStyle = grad;
        tempCtx.fillRect(0, 0, width, height);

        // Add soft organic water light spots / caustics
        tempCtx.fillStyle = 'rgba(56, 189, 248, 0.15)';
        for (let i = 0; i < 8; i++) {
          const cx = Math.random() * width;
          const cy = Math.random() * height;
          const r = 80 + Math.random() * 180;
          tempCtx.beginPath();
          tempCtx.arc(cx, cy, r, 0, Math.PI * 2);
          tempCtx.fill();
        }

        textureData = tempCtx.getImageData(0, 0, width, height);
        rippleImageData = ctx.createImageData(width, height);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse movement liquid injection
    let prevMouseX = -1;
    let prevMouseY = -1;

    const addDistortion = (x: number, y: number, radius: number, strength: number) => {
      const simX = Math.floor(x * SIM_SCALE);
      const simY = Math.floor(y * SIM_SCALE);

      for (let j = -radius; j <= radius; j++) {
        for (let i = -radius; i <= radius; i++) {
          const px = simX + i;
          const py = simY + j;
          if (px > 0 && px < simWidth - 1 && py > 0 && py < simHeight - 1) {
            const dist = Math.sqrt(i * i + j * j);
            if (dist < radius) {
              const index = py * simWidth + px;
              buffer1[index] += (1 - dist / radius) * strength;
            }
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (prevMouseX !== -1 && prevMouseY !== -1) {
        const dx = x - prevMouseX;
        const dy = y - prevMouseY;
        const speed = Math.sqrt(dx * dx + dy * dy);
        if (speed > 1) {
          const strength = Math.min(speed * 12, 180);
          addDistortion(x, y, 6, strength);
        }
      } else {
        addDistortion(x, y, 6, 100);
      }

      prevMouseX = x;
      prevMouseY = y;
    };

    const handleMouseLeave = () => {
      prevMouseX = -1;
      prevMouseY = -1;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Main 60fps wave simulation & refraction rendering loop
    const render = () => {
      if (simWidth > 0 && simHeight > 0 && textureData && rippleImageData) {
        // 1. Water Ripple Physics Step (2D Wave Equation)
        for (let y = 1; y < simHeight - 1; y++) {
          const row = y * simWidth;
          for (let x = 1; x < simWidth - 1; x++) {
            const i = row + x;
            buffer2[i] =
              (buffer1[i - 1] +
                buffer1[i + 1] +
                buffer1[i - simWidth] +
                buffer1[i + simWidth]) / 2 - buffer2[i];
            buffer2[i] *= damping;
          }
        }

        // Swap buffers
        const temp = buffer1;
        buffer1 = buffer2;
        buffer2 = temp;

        // 2. Refraction Rendering Step
        const srcData = textureData.data;
        const dstData = rippleImageData.data;

        for (let y = 0; y < height; y++) {
          const simY = Math.floor(y * SIM_SCALE);
          const simYRow = simY * simWidth;
          const yRow = y * width;

          for (let x = 0; x < width; x++) {
            const simX = Math.floor(x * SIM_SCALE);
            const simIdx = simYRow + simX;

            // Calculate height gradient for refraction offset
            let xOffset = 0;
            let yOffset = 0;

            if (simX > 0 && simX < simWidth - 1 && simY > 0 && simY < simHeight - 1) {
              xOffset = Math.floor(buffer1[simIdx - 1] - buffer1[simIdx + 1]);
              yOffset = Math.floor(buffer1[simIdx - simWidth] - buffer1[simIdx + simWidth]);
            }

            // Distort texture coordinates
            let srcX = x + xOffset;
            let srcY = y + yOffset;

            // Clamp bounds
            if (srcX < 0) srcX = 0;
            if (srcX >= width) srcX = width - 1;
            if (srcY < 0) srcY = 0;
            if (srcY >= height) srcY = height - 1;

            const pixelIdx = (yRow + x) * 4;
            const srcPixelIdx = (srcY * width + srcX) * 4;

            // Subtle highlight on wave crests
            const highlight = (xOffset + yOffset) * 0.8;

            dstData[pixelIdx] = Math.min(255, Math.max(0, srcData[srcPixelIdx] + highlight));
            dstData[pixelIdx + 1] = Math.min(255, Math.max(0, srcData[srcPixelIdx + 1] + highlight * 1.5));
            dstData[pixelIdx + 2] = Math.min(255, Math.max(0, srcData[srcPixelIdx + 2] + highlight * 2));
            dstData[pixelIdx + 3] = 255;
          }
        }

        ctx.putImageData(rippleImageData, 0, 0);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto z-0 cursor-pointer">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Light Gradient overlay to blend perfectly with section theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-blue-950/60 pointer-events-none" />
    </div>
  );
}
