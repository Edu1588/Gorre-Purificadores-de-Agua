import { useEffect, useRef } from "react";

export function LiquidEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Generate dynamic blue gradient texture
    const bgCanvas = document.createElement('canvas');
    bgCanvas.width = 1024;
    bgCanvas.height = 1024;
    const ctx = bgCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#041533');
      grad.addColorStop(0.3, '#08204d');
      grad.addColorStop(0.6, '#004e82');
      grad.addColorStop(0.85, '#006da8');
      grad.addColorStop(1, '#021029');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1024);
    }
    const blueGradientUrl = bgCanvas.toDataURL('image/png');

    // Load the script dynamically
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';
      
      const canvas = document.getElementById('liquid-canvas');
      if (canvas) {
        const app = LiquidBackground(canvas);
        app.loadImage('${blueGradientUrl}');
        app.liquidPlane.material.metalness = 0.65;
        app.liquidPlane.material.roughness = 0.3;
        app.liquidPlane.uniforms.displacementScale.value = 5;
        app.setRain(false);
        window.__liquidApp = app;
      }
    `;
    document.body.appendChild(script);

    return () => {
      if (window.__liquidApp && window.__liquidApp.dispose) {
        try {
          window.__liquidApp.dispose();
        } catch (e) {
          console.error(e);
        }
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="absolute inset-0 m-0 w-full h-full touch-none overflow-hidden z-0 pointer-events-auto"
    >
      <canvas ref={canvasRef} id="liquid-canvas" className="absolute inset-0 w-full h-full" />
      {/* Subtle overlay to harmonize with theme */}
      <div className="absolute inset-0 bg-blue-950/20 pointer-events-none" />
    </div>
  );
}

declare global {
  interface Window {
    __liquidApp?: any;
  }
}
