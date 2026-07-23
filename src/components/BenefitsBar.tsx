import { ShieldCheck, CreditCard, Truck, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  { icon: ShieldCheck, title: 'Loja oficial' },
  { icon: CreditCard, title: 'Em até 10x sem juros' },
  { icon: Truck, title: 'Envio para todo o Brasil' },
  { icon: Stethoscope, title: 'Indicado por profissionais de saúde' },
];

export function BenefitsBar() {
  return (
    <section className="bg-slate-50 py-12 relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-700 leading-tight">
                    {benefit.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
