import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Revendedor', href: '#revendedor' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 bg-white shadow-md py-3' : 'absolute top-[72px] sm:top-[44px] bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center md:w-1/4">
            <img 
              src="https://res.cloudinary.com/ifuatk2z/image/upload/v1784833951/logo-rodape-gorre_ks0dnb.svg" 
              alt="Gorre Purificadores" 
              className={`h-6 sm:h-8 md:h-10 transition-all ${isScrolled ? '' : 'brightness-0 invert'}`} 
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center justify-center gap-8 md:w-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-blue-400 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center justify-end gap-4 lg:gap-6 md:w-1/4">
            <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}>
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button className="bg-blue-600 text-white px-5 lg:px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 whitespace-nowrap text-sm lg:text-base">
              Compre Agora
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl absolute top-full left-0 right-0"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 font-medium text-lg hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 mt-4">
                Compre Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
