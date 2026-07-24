import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

import { WaveDivider } from './WaveDivider';

const GOOGLE_REVIEWS_URL = "https://share.google/ln2wxVmoiYH1T3msT";

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

const testimonials = [
  {
    name: 'Marcos Oliveira',
    time: 'Há 2 semanas',
    avatarBg: 'bg-blue-600',
    content: 'Excelente purificador! A qualidade da água é notavelmente superior, leve e sem nenhum sabor residual de cloro. A instalação foi super rápida e o atendimento da equipe Gorre foi nota 10. Recomendo demais!',
  },
  {
    name: 'Luciana B. Ferreira',
    time: 'Há 3 semanas',
    avatarBg: 'bg-cyan-600',
    content: 'Melhor investimento que fiz para minha casa! Sofria bastante com azia e refluxo, e após começar a consumir a água alcalina ionizada da Gorre senti uma melhora incrível na digestão. Aparelho lindo e muito prático.',
  },
  {
    name: 'Dr. Roberto Camargo',
    time: 'Há 1 mês',
    avatarBg: 'bg-indigo-600',
    content: 'Como profissional da saúde, pesquisei bastante antes de escolher o purificador para minha clínica e residência. Os purificadores Gorre entregam exatamente o pH alcalino e a filtragem que prometem. Nota mil!',
  },
  {
    name: 'Patrícia Mendes',
    time: 'Há 1 mês',
    avatarBg: 'bg-teal-600',
    content: 'Atendimento impecável desde a primeira dúvida no WhatsApp até a entrega. O purificador é excelente, a água sai geladinha e muito pura. Toda a família adorou!',
  },
  {
    name: 'Fernanda & Gabriel',
    time: 'Há 2 meses',
    avatarBg: 'bg-sky-600',
    content: 'Design moderno, troca de refil descomplicada e água de altíssima qualidade. Sentimos a diferença até no sabor do café e no preparo das refeições no dia a dia.',
  },
  {
    name: 'Sérgio Ramos',
    time: 'Há 3 meses',
    avatarBg: 'bg-blue-700',
    content: 'Sempre tive receio de purificadores que não gelavam bem, mas o modelo da Gorre é fantástico! Água trincando de gelada, alcalina e filtragem perfeita. Empresa séria e comprometida.',
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden" id="depoimentos">
      <WaveDivider color="#ffffff" position="top" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-200/40 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-200/40 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Depoimentos Reais dos Nossos <span className="text-blue-600">Clientes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium mb-8"
          >
            Veja o que dizem as pessoas que já transformaram sua saúde com a Gorre Purificadores no Google.
          </motion.p>

          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-wrap items-center justify-center gap-3 bg-white px-6 py-3.5 rounded-2xl shadow-md border border-slate-200/80 mb-2"
          >
            <GoogleIcon className="w-6 h-6" />
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900 text-lg">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-slate-400">|</span>
            <span className="text-sm text-slate-600 font-medium">Avaliações verificadas no Google</span>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4 ml-1"
            >
              Ver no Google <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative px-2 sm:px-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Depoimento Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Próximo Depoimento"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Cards */}
          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {visibleTestimonials.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-7 shadow-lg shadow-slate-200/60 border border-slate-100 flex flex-col justify-between relative hover:shadow-xl transition-all duration-300 min-h-[260px]"
                  >
                    <div>
                      {/* Header with Avatar, Name, Google Icon & Verification */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-bold text-base flex items-center justify-center shadow-md shrink-0`}>
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-base leading-snug flex items-center gap-1.5">
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                              <span>Cliente Verificado</span>
                            </div>
                          </div>
                        </div>
                        <GoogleIcon className="w-5 h-5 shrink-0 opacity-90" />
                      </div>

                      {/* Star Rating & Time */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-slate-400">{item.time}</span>
                      </div>

                      {/* Review Text */}
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                        "{item.content}"
                      </p>
                    </div>

                    {/* Card Footer Badge */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <GoogleIcon className="w-3.5 h-3.5" /> Avaliação via Google
                      </span>
                      <span className="font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        5.0 ★
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para o slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-blue-600'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


