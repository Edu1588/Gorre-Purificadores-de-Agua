import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle, ShieldCheck, Wrench, Sparkles, MessageCircle, Droplets } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  badge?: string;
}

const FAQ_DATA: FaqItem[] = [
  // Tecnologia & Saúde
  {
    id: '1',
    category: 'Tecnologia & Saúde',
    badge: 'Destaque',
    question: 'O que é água alcalina ionizada e por que ela é superior à água comum?',
    answer: 'A água alcalina ionizada possui um pH elevado (superior a 8.5) e baixo ORP (Potencial de Óxido-Redução), tornando-se um poderoso antioxidante natural. Ela neutraliza a acidez corporal, auxilia no combate aos radicais livres, melhora a digestão, potencializa a hidratação celular e auxilia no fortalecimento da imunidade e estrutura óssea.'
  },
  {
    id: '2',
    category: 'Tecnologia & Saúde',
    question: 'Como funciona o processo de filtragem e purificação dos aparelhos Gorre?',
    answer: 'Os purificadores Gorre contam com um sistema avançado de filtragem multiestágios. O elemento filtrante retém partículas sólidas (barro, ferrugem, areia), elimina até 99,9% do cloro residual, elimina odores e sabores indesejados e enriquece a água com minerais essenciais como Cálcio e Magnésio, elevando o pH e promovendo a ionização.'
  },
  {
    id: '3',
    category: 'Tecnologia & Saúde',
    question: 'A água do purificador Gorre elimina bactérias e cloro?',
    answer: 'Sim! A tecnologia com prata coloidal e carvão ativado atua com ação bacteriostática contínua, impedindo a proliferação de germes e bactérias no interior do refil, garantindo uma água 100% pura, cristalina, sem cloro e microbiologicamente segura para toda a família.'
  },
  {
    id: '4',
    category: 'Tecnologia & Saúde',
    question: 'Crianças e idosos podem consumir a água alcalina Gorre diariamente?',
    answer: 'Com certeza. A água alcalina ionizada Gorre é perfeita para todas as idades. Em crianças, auxilia na absorção celular de nutrientes e no crescimento saudável. Em idosos, contribui para a saúde óssea, reduz a acidez estomacal (refluxo e azia) e promove melhor disposição.'
  },

  // Manutenção & Refil
  {
    id: '5',
    category: 'Manutenção & Refil',
    badge: 'Importante',
    question: 'De quanto em quanto tempo devo substituir o refil purificador?',
    answer: 'Recomendamos a troca do refil a cada 6 a 9 meses ou após o consumo de aproximadamente 3.000 litros de água (o que ocorrer primeiro). O tempo exato pode variar de acordo com a qualidade da água fornecida na sua região e o volume diário de uso.'
  },
  {
    id: '6',
    category: 'Manutenção & Refil',
    question: 'Eu mesmo consigo fazer a troca do refil ou preciso chamar um técnico?',
    answer: 'A troca foi projetada no sistema "Girou, Trocou". Você mesmo faz a substituição em menos de 2 minutos, sem necessidade de ferramentas, sem sujeira e sem precisar desligar registros complexos. Além disso, enviamos o manual com passo a passo ilustrado e suporte por vídeo.'
  },
  {
    id: '7',
    category: 'Manutenção & Refil',
    question: 'Onde posso adquirir os refis originais Gorre?',
    answer: 'Você pode comprar refis originais Gorre diretamente em nosso site oficial, via WhatsApp com nossa equipe de atendimento, ou com nossa rede autorizada de revendedores espalhada por todo o Brasil.'
  },

  // Instalação & Refrigeração
  {
    id: '8',
    category: 'Instalação & Refrigeração',
    question: 'O purificador Gorre gela a água de verdade?',
    answer: 'Sim! Nossos modelos refrigerados possuem sistema de refrigeração de alta eficiência (por compressor ecológico ou placa eletrônica de alto desempenho). A água sai trincando de gelada (entre 5°C e 10°C), mesmo nos dias mais quentes do ano, além de oferecer as opções de água natural e misturada.'
  },
  {
    id: '9',
    category: 'Instalação & Refrigeração',
    question: 'Como é feita a instalação do purificador na minha cozinha?',
    answer: 'Os aparelhos Gorre acompanham o kit completo de instalação (mangueira, adaptador para torneira ou ponto de água de parede e suporte). Podem ser instalados sobre a bancada/pia ou fixados na parede. A instalação é simples e rápida!'
  },
  {
    id: '10',
    category: 'Instalação & Refrigeração',
    question: 'Os aparelhos Gorre consomem muita energia elétrica?',
    answer: 'Não! Todos os modelos Gorre possuem selo de alta eficiência energética e consumo reduzido de energia. O sistema inteligente entra em modo de economia assim que a água atinge a temperatura ideal, mantendo baixo custo na sua conta de luz.'
  },

  // Garantia & Suporte
  {
    id: '11',
    category: 'Garantia & Suporte',
    badge: 'Garantia Gorre',
    question: 'Qual é o prazo de garantia do meu purificador Gorre?',
    answer: 'Todos os purificadores Gorre possuem 12 meses (1 ano) de garantia de fábrica contra defeitos de fabricação, além do suporte técnico permanente e peças originais para reposição sempre que precisar.'
  },
  {
    id: '12',
    category: 'Garantia & Suporte',
    question: 'E se o purificador precisar de assistência técnica futuramente?',
    answer: 'A Gorre conta com rede de assistência autorizada e suporte centralizado. Basta entrar em contato com nosso SAC via WhatsApp para acionar a garantia ou tirar dúvidas técnicas em tempo real com nossos especialistas.'
  }
];

const CATEGORIES = [
  'Todas',
  'Tecnologia & Saúde',
  'Manutenção & Refil',
  'Instalação & Refrigeração',
  'Garantia & Suporte'
];

export function Faq() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('1');

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Todas' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
      <WaveDivider color="#ffffff" position="top" />

      {/* Decorative ambient blur spheres */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-200/50 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-200/50 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-200"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Tire Suas Dúvidas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            Perguntas <span className="text-blue-600">Frequentes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium"
          >
            Tudo o que você precisa saber sobre a tecnologia, filtragem, manutenção e saúde da água Gorre.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 relative max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Digite sua dúvida (ex: refil, garantia, água gelada, pH)..."
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-full border border-slate-200 text-slate-800 text-sm sm:text-base placeholder:text-slate-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-full"
                >
                  Limpar
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-blue-500 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/20'
                      : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <span className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors leading-snug">
                        {faq.question}
                      </span>
                      {faq.badge && (
                        <span className="inline-self-start sm:inline-self-auto text-[11px] font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800 px-2.5 py-0.5 rounded-full border border-cyan-200 shrink-0">
                          {faq.badge}
                        </span>
                      )}
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-blue-600 text-white rotate-180'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">Nenhuma pergunta encontrada</h3>
              <p className="text-sm text-slate-500">Tente buscar por termos mais genéricos como "refil", "garantia" ou "filtro".</p>
            </div>
          )}
        </div>

        {/* WhatsApp Direct Help Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-lg">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Ainda tem alguma dúvida?</h3>
              <p className="text-blue-100/80 text-sm sm:text-base">
                Fale diretamente com nossa equipe técnica de especialistas em purificadores pelo WhatsApp.
              </p>
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=551938452226&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20purificadores%20Gorre.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm sm:text-base shrink-0"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar com Especialista</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
