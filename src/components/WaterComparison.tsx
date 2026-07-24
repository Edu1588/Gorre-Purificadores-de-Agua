import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, AlertTriangle, CheckCircle2, Info, X } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

interface BadgetItem {
  title: string;
  description: string;
  type: 'dirty' | 'clean';
}

const DIRTY_ITEMS: BadgetItem[] = [
  {
    title: 'Microplásticos',
    description: 'Partículas microscópicas invisíveis a olho nu presentes em águas de torneira e galões plásticos não purificados.',
    type: 'dirty',
  },
  {
    title: 'Vírus e Bactérias',
    description: 'Germes e microrganismos nocivos vindos do encanamento que podem causar infecções e desconfortos intestinais.',
    type: 'dirty',
  },
  {
    title: 'Metais Tóxicos e Cloro',
    description: 'Resíduos químicos de cloro, ferrugem e chumbo. Seu pH ácido contribui para azia, refluxo e inflamações no organismo.',
    type: 'dirty',
  },
];

const CLEAN_ITEMS: BadgetItem[] = [
  {
    title: 'Água Ideal',
    description: 'Filtragem multiestágios avançada com máxima retenção bacteriostática e remoção total de cloro e impurezas.',
    type: 'clean',
  },
  {
    title: 'Alcalina e Ionizada',
    description: 'pH superior alcalino e ionizado, altamente enriquecido com minerais essenciais como Magnésio, Cálcio e Potássio.',
    type: 'clean',
  },
  {
    title: 'Leve e sem Gosto',
    description: 'Hidratação celular até 3x superior, água super leve, cristalina e livre de qualquer gosto ou odor desagradável.',
    type: 'clean',
  },
];

export function WaterComparison() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHoverItem, setActiveHoverItem] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="comparativo">
      <WaveDivider color="#0f172a" position="top" />

      {/* Ambient glowing background effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 pt-6">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Teste da Qualidade da Água</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Você confia na água que está <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">bebendo?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-medium"
          >
            Arraste o divisor para comparar. <span className="text-cyan-400 font-bold">Passe o mouse ou toque nos selos</span> para ver os detalhes da contaminação vs. purificação.
          </motion.p>
        </div>

        {/* Interactive Image Comparison Slider - Expanded Horizontal Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 select-none group"
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] cursor-ew-resize overflow-hidden"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* === SIDE 1: CLEAN WATER (FULL UNDERNEATH BACKGROUND) === */}
            <div className="absolute inset-0 w-full h-full bg-slate-900">
              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1784931362/copolimpoGORRE_hldat3.png"
                alt="Água Purificada Gorre"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />

              {/* Clean Water Callout Badges (Right side overlay) */}
              <div className="absolute right-3 sm:right-10 md:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-6 z-20 max-w-[220px] sm:max-w-[320px]">
                {CLEAN_ITEMS.map((item) => {
                  const isActive = activeHoverItem === item.title;
                  return (
                    <div
                      key={item.title}
                      className="relative group/badge"
                      onMouseEnter={() => setActiveHoverItem(item.title)}
                      onMouseLeave={() => setActiveHoverItem(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHoverItem(isActive ? null : item.title);
                      }}
                    >
                      <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-400/60 text-white rounded-full px-4 py-2.5 sm:px-6 sm:py-3 shadow-[0_0_25px_rgba(34,211,238,0.3)] flex items-center justify-between gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-slate-900 hover:border-cyan-300">
                        <div className="flex items-center gap-2.5">
                          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                          <span className="text-xs sm:text-base font-bold text-cyan-200">
                            {item.title}
                          </span>
                        </div>
                        <Info className="w-4 h-4 text-cyan-400 shrink-0 opacity-80 group-hover/badge:opacity-100" />
                      </div>

                      {/* Tooltip on Hover / Click */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 sm:right-0 top-full mt-2 w-64 sm:w-80 bg-slate-950/95 border border-cyan-400/80 rounded-2xl p-4 shadow-2xl backdrop-blur-xl z-50 text-left pointer-events-auto"
                          >
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                                Água Gorre
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveHoverItem(null);
                                }}
                                className="text-slate-400 hover:text-white"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Top Label for Clean Water */}
              <div className="absolute top-4 right-4 bg-cyan-500 text-slate-950 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-10 pointer-events-none">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Água Gorre</span>
              </div>
            </div>

            {/* === SIDE 2: DIRTY WATER (CLIPPED OVERLAY ON LEFT) === */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-slate-950"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative h-full" style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}>
                <img
                  src="https://res.cloudinary.com/ifuatk2z/image/upload/v1784931363/coposujoGORRE_nbmf79.png"
                  alt="Água Comum Contaminada"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                {/* Dirty Water Callout Badges (Left side overlay) */}
                <div className="absolute left-3 sm:left-10 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-6 z-20 max-w-[220px] sm:max-w-[320px]">
                  {DIRTY_ITEMS.map((item) => {
                    const isActive = activeHoverItem === item.title;
                    return (
                      <div
                        key={item.title}
                        className="relative group/badge"
                        onMouseEnter={() => setActiveHoverItem(item.title)}
                        onMouseLeave={() => setActiveHoverItem(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHoverItem(isActive ? null : item.title);
                        }}
                      >
                        <div className="bg-stone-900/95 backdrop-blur-md border border-red-500/60 text-white rounded-full px-4 py-2.5 sm:px-6 sm:py-3 shadow-[0_0_25px_rgba(239,68,68,0.3)] flex items-center justify-between gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-stone-900 hover:border-red-400">
                          <div className="flex items-center gap-2.5">
                            <span className="w-3 h-3 rounded-full bg-red-500 animate-ping shrink-0" />
                            <span className="text-xs sm:text-base font-bold text-red-200">
                              {item.title}
                            </span>
                          </div>
                          <Info className="w-4 h-4 text-red-400 shrink-0 opacity-80 group-hover/badge:opacity-100" />
                        </div>

                        {/* Tooltip on Hover / Click */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 sm:left-0 top-full mt-2 w-64 sm:w-80 bg-stone-950/95 border border-red-500/80 rounded-2xl p-4 shadow-2xl backdrop-blur-xl z-50 text-left pointer-events-auto"
                            >
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                                  Água Comum
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveHoverItem(null);
                                  }}
                                  className="text-slate-400 hover:text-white"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                                {item.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Top Label for Dirty Water */}
                <div className="absolute top-4 left-4 bg-red-600 text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-10 pointer-events-none">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Água Comum</span>
                </div>
              </div>
            </div>

            {/* === SLIDER HANDLE DIVIDER === */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(255,255,255,0.9)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-14 sm:h-14 bg-white text-slate-900 rounded-full shadow-2xl border-4 border-slate-900 flex items-center justify-center font-bold text-sm sm:text-base hover:scale-110 active:scale-95 transition-transform">
                <span className="tracking-tighter font-serif text-slate-800">|||</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

