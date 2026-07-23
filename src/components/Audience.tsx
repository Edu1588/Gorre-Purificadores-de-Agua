import { motion } from 'motion/react';

import { WaveDivider } from './WaveDivider';

const audiences = [
  {
    image: 'https://res.cloudinary.com/ifuatk2z/image/upload/v1784839952/4422894_jysond.jpg',
    title: 'Para as crianças',
    description: 'Água livre de impurezas, bactérias e metais pesados. Afaste os perigos da desidratação, com uma hidratação rápida e eficiente.'
  },
  {
    image: 'https://res.cloudinary.com/ifuatk2z/image/upload/v1784839953/14577_zl3dvh.jpg',
    title: 'Para os jovens',
    description: 'Mais disposição para a prática de exercícios físicos. Hidratação celular para dias quentes ou com baixa umidade.'
  },
  {
    image: 'https://res.cloudinary.com/ifuatk2z/image/upload/v1784839953/1735_gtcmot.jpg',
    title: 'Para os adultos',
    description: 'Melhora a aparência da pele e dos cabelos, auxilia no emagrecimento e no funcionamento do metabolismo. Auxilia em problemas estomacais, como azia e má digestão, e combate os radicais livres causadores de doenças.'
  },
  {
    image: 'https://res.cloudinary.com/ifuatk2z/image/upload/v1784839953/69203_ecq3x3.jpg',
    title: 'Para os idosos',
    description: 'Repõe minerais essenciais ao corpo e auxilia na manutenção dos ossos. Dá mais disposição para o dia a dia. Ajuda a regular o intestino e possui ação antioxidante que retarda o envelhecimento celular.'
  }
];

export function Audience() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Hidrate seu corpo com <span className="text-blue-600">água alcalina e ionizada</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Benefícios reais para cada fase da vida da sua família.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 flex flex-col"
              >
                <div className="w-full h-48 bg-blue-50 shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
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
