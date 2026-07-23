import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function FixedButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os purificadores de água Gorre e como posso transformar a saúde da minha família.");
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=551938452226&text=${whatsappMessage}&type=phone_number&app_absent=0`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all relative overflow-hidden group hover:shadow-blue-500/50"
            aria-label="Voltar ao topo"
          >
            {/* Efeito Liquido (Wave) */}
            <div className="absolute top-[100%] left-1/2 w-[250%] aspect-square bg-blue-500 rounded-[40%] -translate-x-1/2 group-hover:top-[-50%] group-hover:rotate-180 transition-all duration-700 ease-in-out" />
            <ArrowUp className="w-6 h-6 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#22bf5b] transition-all hover:scale-110 relative group"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale com a nossa equipe!
        </span>
      </motion.a>
    </div>
  );
}
