import { motion } from 'motion/react';
import { Droplet, Zap, AlertTriangle } from 'lucide-react';

export function Educational() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="educativo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Conteúdos educativos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A água que você ingere não oferece benefícios?
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                A água comum é pobre em minerais e pode conter bactérias e substâncias perigosas, como o <span className="font-semibold text-slate-800">cloro e metais pesados</span>. Você tem a oportunidade de oferecer água pura, rica em minerais e segura para a sua família.
              </p>
              
              <div className="flex gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <Zap className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                <p className="text-base text-blue-900">
                  Uma vida ativa pede água com alto poder de hidratação. A <strong>água alcalina e ionizada</strong> tem maior potencial de hidratação do corpo, pois seu pH é semelhante ao do sangue humano. Além disso, a ionização da água facilita o transporte até as células.
                </p>
              </div>
              
              <p>
                Jarras e purificadores de água com alta tecnologia. Todos os produtos Gorre são produzidos nos mais altos padrões de qualidade para clientes verdadeiramente exigentes e comprometidos com a saúde.
              </p>
            </div>
          </motion.div>

          {/* Image / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 relative shadow-2xl">
              {/* Abstract fluid placeholder since we don't have real images */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-800 opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full rounded-full border-[16px] border-white/20 flex items-center justify-center backdrop-blur-sm relative">
                  <Droplet className="w-32 h-32 text-white absolute -mt-4 animate-pulse" />
                  <div className="absolute bottom-12 text-white text-center font-bold text-xl uppercase tracking-widest opacity-80">
                    Água Alcalina
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Água Comum</p>
                <p className="text-sm font-bold text-slate-800">Cloro & Metais</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Droplet className="w-5 h-5 text-blue-600 fill-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Gorre</p>
                <p className="text-sm font-bold text-slate-800">100% Pura e Segura</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
