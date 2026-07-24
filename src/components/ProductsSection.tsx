import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, StarHalf, Droplet, ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  rating: number; // 5.0, 4.5, 4.8
  baseReviews: number; // Between 30 and 150
  totalPrice: string;
  installments: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'aqua-pro',
    name: 'Purificador Gorre Aqua Pro',
    description: 'Água alcalina, ionizada e refrigerada com máxima eficiência para toda a família.',
    rating: 5.0,
    baseReviews: 84,
    totalPrice: 'R$ 1.499,00',
    installments: '10x de R$ 149,90 sem juros',
    badge: 'Mais Vendido',
  },
  {
    id: 'jarra-alcalina',
    name: 'Jarra Alcalina Gorre 2.5L',
    description: 'Praticidade para manter sua família sempre hidratada com água alcalina em qualquer lugar.',
    rating: 4.5,
    baseReviews: 46,
    totalPrice: 'R$ 299,00',
    installments: '10x de R$ 29,90 sem juros',
    badge: 'Portátil',
  },
  {
    id: 'master-touch',
    name: 'Purificador Gorre Master Touch',
    description: 'Design sofisticado com painel touch inteligente e refrigeração de alta performance.',
    rating: 4.8,
    baseReviews: 122,
    totalPrice: 'R$ 1.999,00',
    installments: '10x de R$ 199,90 sem juros',
    badge: 'Linha Premium',
  },
  {
    id: 'compact-slim',
    name: 'Purificador Gorre Compact Slim',
    description: 'Compacto e elegante, ideal para cozinhas modernas e pequenos espaços.',
    rating: 4.5,
    baseReviews: 68,
    totalPrice: 'R$ 899,00',
    installments: '10x de R$ 89,90 sem juros',
    badge: 'Compacto',
  },
];

// Dynamically calculates review count increasing by 2 every 2 days
function getDynamicReviews(baseReviews: number): number {
  const anchorDate = new Date('2026-07-01T00:00:00Z').getTime();
  const currentDate = new Date().getTime();
  const diffInMs = currentDate - anchorDate;
  const daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const extraReviews = Math.floor(daysPassed / 2) * 2;
  return baseReviews + Math.max(0, extraReviews);
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
      {hasHalfStar && (
        <StarHalf key="half" className="w-4 h-4 fill-amber-400 text-amber-400" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-slate-300" />
      ))}
    </div>
  );
}

export function ProductsSection() {
  const [reviewCounts, setReviewCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const updated: { [key: string]: number } = {};
    PRODUCTS.forEach((p) => {
      updated[p.id] = getDynamicReviews(p.baseReviews);
    });
    setReviewCounts(updated);
  }, []);

  return (
    <section className="py-24 bg-white" id="produtos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Nossos <span className="text-blue-600">Produtos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium"
          >
            Jarras e purificadores de água com alta tecnologia e filtragem avançada.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => {
            const reviews = reviewCounts[product.id] || product.baseReviews;
            const whatsappMsg = encodeURIComponent(
              `Olá! Gostaria de mais informações para comprar o ${product.name}.`
            );
            const buyUrl = `https://api.whatsapp.com/send/?phone=551938452226&text=${whatsappMsg}&type=phone_number&app_absent=0`;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div className="flex flex-col h-full">
                  {/* 1. Large Image Container */}
                  <div className="aspect-[3/4] bg-slate-100/80 rounded-[2rem] mb-5 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform shadow-sm">
                    {product.badge && (
                      <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-extrabold tracking-wide uppercase px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                        {product.badge}
                      </span>
                    )}
                    <Droplet className="w-24 h-24 text-blue-500/70 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Content Block */}
                  <div className="flex flex-col flex-grow text-center items-center">
                    {/* 2. Rating */}
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <StarRating rating={product.rating} />
                      <span className="text-xs font-medium text-blue-700">
                        ({reviews})
                      </span>
                    </div>

                    {/* 3. Product Name */}
                    <h3 className="text-slate-900 font-bold text-base sm:text-lg leading-snug mb-2 min-h-[48px] flex items-center justify-center">
                      {product.name}
                    </h3>

                    {/* 4. Total Price */}
                    <div className="text-slate-900 font-bold text-lg sm:text-xl tracking-tight">
                      {product.totalPrice}
                    </div>

                    {/* 5. Installment Price */}
                    <div className="text-blue-600 font-semibold text-sm mb-6">
                      {product.installments}
                    </div>

                    {/* 6. Buy Button */}
                    <div className="mt-auto w-full">
                      <a
                        href={buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 text-sm hover:scale-[1.02]"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Comprar Agora</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

