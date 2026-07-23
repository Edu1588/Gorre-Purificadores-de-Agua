import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

import { WaveDivider } from './WaveDivider';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Mãe e Empreendedora',
    content: 'Desde que instalamos o purificador Gorre, a qualidade da água mudou completamente. Minha família está bebendo mais água e nos sentimos muito mais dispostos no dia a dia.',
  },
  {
    name: 'Dr. Carlos Mendes',
    role: 'Nutricionista',
    content: 'Recomendo os purificadores da Gorre para todos os meus pacientes. A água alcalina é fundamental para uma hidratação celular eficiente e para manter o metabolismo saudável.',
  },
  {
    name: 'João e Ana',
    role: 'Aposentados',
    content: 'Nossa saúde digestiva melhorou muito. A azia que o João sentia diminuiu consideravelmente após começarmos a consumir a água ionizada. Um ótimo investimento!',
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      <WaveDivider color="#ffffff" position="top" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-200/40 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-200/40 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Quem revolucionou sua saúde com Gorre <span className="text-blue-600">recomenda!</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium"
          >
            Na voz de quem viveu.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 relative"
            >
              <Quote className="w-12 h-12 text-blue-100 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed relative z-10">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
