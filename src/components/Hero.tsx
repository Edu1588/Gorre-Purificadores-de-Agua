import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { WaveDivider } from './WaveDivider';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-blue-900 pt-20">
      {/* Abstract Water Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/20 blur-3xl mix-blend-screen" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-400/20 blur-3xl mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 text-blue-100 text-sm font-semibold tracking-wider mb-6 border border-blue-400/30 backdrop-blur-sm">
              TECNOLOGIA EM PURIFICAÇÃO
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Há mais de 20 anos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                Elevamos a qualidade
              </span> <br />
              da sua água
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 mb-10 max-w-2xl leading-relaxed font-light">
              Transformamos a sua saúde com água pura, alcalina e ionizada. Tecnologia e inovação para o bem-estar da sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pb-16 md:pb-24">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-black/20">
                Conheça nossos produtos
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-blue-800/50 text-white border border-blue-400/30 backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
                Seja um revendedor
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <WaveDivider color="#f8fafc" />
    </section>
  );
}
