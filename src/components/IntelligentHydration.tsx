import { motion } from 'motion/react';
import { ShieldPlus, Bone, Droplets, ActivitySquare } from 'lucide-react';

import { WaveDivider } from './WaveDivider';

const effects = [
  {
    icon: ShieldPlus,
    title: 'Imunidade',
    description: 'Contribui para a remoção de toxinas, fornece oxigênio ao organismo, combate vírus e bactérias e ainda aprimora o metabolismo, fortalecendo o sistema imunológico como um todo.'
  },
  {
    icon: Bone,
    title: 'Saúde Óssea',
    description: 'Rica em minerais como o magnésio, ajuda a fortalecer os ossos, nutre o organismo e reduz a reabsorção óssea, promovendo uma estrutura óssea mais saudável e resistente.'
  },
  {
    icon: Droplets,
    title: 'Hidratação Profunda',
    description: 'Proporciona uma pele mais saudável, melhora a limpeza do corpo, mantém as células mais hidratadas e oferece um potencial de hidratação superior para o equilíbrio do organismo.'
  },
  {
    icon: ActivitySquare,
    title: 'Sistema Digestivo',
    description: 'Aprimora a digestão, reduz a azia e a queimação, auxilia no tratamento de doenças gástricas e contribui para regular o funcionamento do intestino, promovendo bem-estar digestivo.'
  }
];

export function IntelligentHydration() {
  return (
    <section className="py-24 bg-blue-900 text-white relative overflow-hidden" id="beneficios">
      <WaveDivider color="#eff6ff" position="top" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-600/10 blur-3xl rounded-full translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/20 blur-3xl rounded-full -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Hidratação Inteligente
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100/80 font-light"
          >
            Conheça os efeitos transformadores no seu corpo
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {effects.map((effect, index) => {
            const Icon = effect.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{effect.title}</h3>
                    <p className="text-blue-100/70 leading-relaxed">
                      {effect.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <WaveDivider color="#ffffff" position="bottom" />
    </section>
  );
}
