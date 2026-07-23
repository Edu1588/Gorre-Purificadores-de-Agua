import { motion } from 'motion/react';
import { Sparkles, Droplets, Magnet, ShieldCheck, Leaf } from 'lucide-react';

const features = [
  { text: "Tecnologia Ceramic Hydrogen", icon: Sparkles },
  { text: "Turmalina negra para melhor hidratação celular", icon: Droplets },
  { text: "Imã de 3000 gauss capaz de alterar a molécula da água", icon: Magnet },
  { text: "Componente bactericida de ação prolongada", icon: ShieldCheck },
  { text: "Bpa Free", icon: Leaf },
];

// Duplicate to ensure smooth infinite scroll.
// We need enough duplicates to fill the screen, and we must translate by exactly half if we double it.
// To be safe for wide screens, let's quadruple it and translate by 25%, or just duplicate twice and translate by 50%.
// Let's use 4 sets. 25% of 4 sets is exactly 1 set. So it perfectly loops.
const allFeatures = [...features, ...features, ...features, ...features];

export function ScrollingFeatures() {
  return (
    <div className="bg-white py-10 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <motion.div
        animate={{ x: ["0%", "-25%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-12 px-6"
      >
        {allFeatures.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div 
              key={idx} 
              className="flex items-center gap-3 text-slate-800"
            >
              <Icon className="w-6 h-6 text-blue-600" strokeWidth={2} />
              <span className="font-semibold text-2xl tracking-wide whitespace-nowrap">{feature.text}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
