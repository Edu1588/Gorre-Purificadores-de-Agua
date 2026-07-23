import { motion } from 'motion/react';
import { Briefcase, Megaphone, MonitorPlay, GraduationCap } from 'lucide-react';

export function Reseller() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="revendedor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-transparent" />
          
          <div className="relative z-10 p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-cyan-300 font-semibold text-sm mb-6 border border-blue-400/20 backdrop-blur-sm">
                <Briefcase className="w-4 h-4" />
                Oportunidade de Negócio
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Seja um revendedor Gorre
              </h2>
              <p className="text-xl text-blue-100/90 mb-8 leading-relaxed font-light">
                Leve mais saúde e disposição, ajudando mais famílias a terem acesso a uma água de qualidade, e ainda tenha uma boa rentabilidade para sua loja de purificadores com altos ganhos e baixo investimento.
              </p>
              
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-colors shadow-xl shadow-black/20">
                Quero ser um revendedor
              </button>
            </motion.div>
            
            <div
              className="space-y-4"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <Megaphone className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Material de Marketing Físico</h4>
                  <p className="text-blue-100/70 text-sm">Panfletos, banners e catálogos para seu ponto de venda.</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <MonitorPlay className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Material de Marketing Digital</h4>
                  <p className="text-blue-100/70 text-sm">Artes para redes sociais, vídeos e campanhas prontas.</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Treinamento Institucional</h4>
                  <p className="text-blue-100/70 text-sm">Capacitação completa sobre todos os nossos produtos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
