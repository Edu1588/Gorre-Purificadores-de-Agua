import { motion } from 'motion/react';
import { Droplet, Info } from 'lucide-react';

const products = [
  {
    name: 'Purificador Aqua Pro',
    description: 'Água alcalina e ozonizada com máxima eficiência.',
    price: '10x de R$ 149,90'
  },
  {
    name: 'Jarra Alcalina Gorre',
    description: 'Praticidade para manter sua família hidratada.',
    price: '10x de R$ 29,90'
  },
  {
    name: 'Purificador Master',
    description: 'Design sofisticado para cozinhas modernas.',
    price: '10x de R$ 199,90'
  }
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-white" id="produtos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Nossos Produtos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Jarras e purificadores de água com alta tecnologia.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-[2rem] p-8 text-center border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="aspect-[4/5] bg-gradient-to-b from-blue-100 to-white rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                <Droplet className="w-24 h-24 text-blue-300" />
                <div className="absolute top-4 right-4 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-blue-600 cursor-pointer">
                  <Info className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
              <p className="text-slate-600 mb-6 text-sm">{product.description}</p>
              <div className="text-blue-600 font-bold mb-6">{product.price}</div>
              <button className="w-full bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
