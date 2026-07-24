import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

export function Hero() {
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Staggered scroll transforms (desktop only): Title -> Subtext -> Buttons (disappears LAST)
  const titleBlur = useTransform(scrollY, [0, 200], ['blur(0px)', 'blur(16px)']);
  const titleOpacity = useTransform(scrollY, [0, 180], [1, 0]);
  const titleY = useTransform(scrollY, [0, 200], [0, -60]);

  const subtextBlur = useTransform(scrollY, [50, 280], ['blur(0px)', 'blur(16px)']);
  const subtextOpacity = useTransform(scrollY, [50, 250], [1, 0]);
  const subtextY = useTransform(scrollY, [50, 280], [0, -50]);

  const buttonsBlur = useTransform(scrollY, [150, 380], ['blur(0px)', 'blur(16px)']);
  const buttonsOpacity = useTransform(scrollY, [150, 350], [1, 0]);
  const buttonsY = useTransform(scrollY, [150, 380], [0, -40]);

  const titleScrollStyle = isDesktop ? { filter: titleBlur, opacity: titleOpacity, y: titleY } : {};
  const subtextScrollStyle = isDesktop ? { filter: subtextBlur, opacity: subtextOpacity, y: subtextY } : {};
  const buttonsScrollStyle = isDesktop ? { filter: buttonsBlur, opacity: buttonsOpacity, y: buttonsY } : {};

  return (
    <section className="relative md:sticky top-0 min-h-[650px] md:h-screen md:min-h-[700px] w-full flex items-center overflow-hidden bg-[#08204d] pt-20 pb-16 md:py-0 z-0">
      {/* 1. Background Image (z-0) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img 
          src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1784930336/eagcwxvmtutrempmr6ed.png" 
          alt="Gorre Background" 
          className="w-full h-full object-cover [object-position:75%_center] md:object-center block"
        />
        {/* Subtle dark blue overlay on mobile for better text contrast */}
        <div className="absolute inset-0 bg-[#011438]/35 md:bg-transparent pointer-events-none" />
      </div>

      {/* 2. Overlap Image (z-20) - Hidden on mobile, visible on md+ */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none z-20">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          src="https://res.cloudinary.com/ifuatk2z/image/upload/v1784852379/GORRE_SOBREPOR3_z32yqy.png" 
          alt="Gorre Products Overlap" 
          className="w-full h-full object-cover object-center block"
        />
      </div>

      {/* 3. Text & Buttons Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full pointer-events-none">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          {/* Title Layer at z-10 (behind Overlap Image z-20 for 3D depth) */}
          <motion.div
            style={titleScrollStyle}
            className="relative z-10 pointer-events-auto mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]"
            >
              Há mais de 20 anos <br />
              <span className="text-[#53e9fd]">
                Elevamos a qualidade
              </span> <br />
              da sua água
            </motion.h1>
          </motion.div>

          {/* Subtext & Buttons Container */}
          <div className="relative z-30 pointer-events-auto">
            <motion.div style={subtextScrollStyle}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 max-w-2xl mx-auto md:mx-0 text-base sm:text-xl md:text-2xl font-light leading-[2.2] text-white"
              >
                <span className="inline bg-[#011b46] px-3 py-1 box-decoration-clone rounded-none shadow-md">
                  Transformamos a sua saúde com água pura, alcalina e ionizada. Tecnologia e inovação para o bem-estar da sua família.
                </span>
              </motion.p>
            </motion.div>

            <motion.div
              style={buttonsScrollStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-stretch sm:items-center"
            >
              <button className="bg-white text-blue-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-black/30">
                Conheça nossos produtos
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-blue-800/80 text-white border border-blue-300/40 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-800 transition-colors flex items-center justify-center shadow-lg">
                Seja um revendedor
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



