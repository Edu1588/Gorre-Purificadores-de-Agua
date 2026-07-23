import { motion } from 'motion/react';
import { MapPin, Mail, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function Contact() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50" id="contato">
      {/* Animated Water Background using framer-motion */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: ["0%", "-5%", "0%"],
            x: ["0%", "2%", "0%"],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-400/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl"
        />
        <motion.div
          animate={{
            y: ["-5%", "0%", "-5%"],
            x: ["-2%", "0%", "-2%"],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-cyan-400/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl"
        />
        <motion.div
          animate={{
            y: ["0%", "8%", "0%"],
            x: ["0%", "-4%", "0%"],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[20%] left-[20%] w-[80%] h-[80%] bg-blue-500/15 rounded-[50%_50%_30%_70%/50%_70%_30%_50%] blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Atendimento</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Ficou com alguma dúvida?
            </h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Nossa equipe está pronta para te auxiliar! Entre em contato ou se preferir, preencha o formulário.
            </p>

            <div 
              className="space-y-8 bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-xl shadow-blue-900/5 relative"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Localização</h4>
                  <p className="text-slate-600">Rua Pedro Coelho, 103, Hortolândia, SP</p>
                  <p className="text-slate-600">CEP 13185-503</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(19) 3845-2226</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">E-mail</h4>
                  <p className="text-slate-600">kleber@gorre.com.br</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div 
              className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-900/10 border border-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full" />
              
              <form className="relative z-10 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Seu nome completo" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="seu@email.com" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone/WhatsApp</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">Cidade e Estado</label>
                      <input type="text" id="city" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Ex: Hortolândia, SP" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="Como podemos ajudar?" />
                  </div>
                </div>

                <button type="button" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
