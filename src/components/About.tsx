import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 bg-white relative" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start relative">
          
          {/* About Text - Sticky */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Sobre Nós</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Gorre: inovação e tecnologia com foco em saúde e bem-estar
            </h3>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                A Gorre é uma empresa com <span className="font-semibold text-slate-800">mais de 23 anos de mercado</span>, que surgiu com a proposta de criar soluções que melhoram a vida das pessoas e ainda contribuem para a preservação do meio ambiente.
              </p>
              <p>
                Acompanhamos todas as tendências e pesquisas sobre os impactos da qualidade da água na saúde e longevidade das pessoas desde os anos 2000. Então, buscamos soluções tecnológicas para contribuir com a prevenção de doenças e até envelhecimento precoce de maneira natural, com o consumo diário de água alcalina e ionizada.
              </p>
              <p>
                Hoje, nossas linhas são fabricadas com matérias-primas de alta qualidade e com tecnologia inovadora para seguirmos na missão de levar saúde e bem-estar. Milhares de lares já cuidam melhor da sua hidratação e vivem com mais disposição com os purificadores Gorre. Este, sem dúvidas, é o nosso maior legado!
              </p>
            </div>
          </motion.div>

          {/* MVV Cards - Stacking */}
          <div className="space-y-6 pb-24">
            {/* Missão */}
            <div
              className="sticky top-24 lg:top-32 group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 border border-slate-100 z-10"
            >
              <div className="flex gap-6 items-start relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center shrink-0 border border-blue-100/50">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  >
                    <Target className="w-7 h-7 text-blue-600" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Missão</h4>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Promover saúde, bem-estar e qualidade de vida, ajudando pessoas a viverem melhor por meio de soluções inovadoras em purificação de água e, ao mesmo tempo, criando oportunidades reais de crescimento financeiro, empreendedorismo e independência por meio do nosso modelo de negócio.
                  </p>
                </div>
              </div>
            </div>

            {/* Visão */}
            <div
              className="sticky top-28 lg:top-36 group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 border border-slate-100 z-20"
            >
              <div className="flex gap-6 items-start relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100/50 flex items-center justify-center shrink-0 border border-cyan-100/50">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <Eye className="w-7 h-7 text-cyan-600" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">Visão</h4>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Ser referência nacional em purificação de água e negócios sustentáveis, reconhecida por impactar positivamente a saúde das pessoas e por gerar oportunidades de renda, crescimento profissional e transformação de vidas em todo o Brasil.
                  </p>
                </div>
              </div>
            </div>

            {/* Valores */}
            <div
              className="sticky top-32 lg:top-40 group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 border border-slate-100 z-30"
            >
              <div className="flex gap-6 items-start relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center shrink-0 border border-blue-100/50">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <Heart className="w-7 h-7 text-blue-600 fill-blue-600/20" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Valores</h4>
                  <ul className="text-slate-600 leading-relaxed space-y-3 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>Acreditamos em servir pessoas com empatia, cuidado e propósito.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>Trabalhamos para transformar vidas, promovendo saúde, oportunidade e esperança.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>Agimos com verdade, respeito e compromisso com o bem coletivo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>Buscamos deixar um impacto positivo e duradouro por onde passamos.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
