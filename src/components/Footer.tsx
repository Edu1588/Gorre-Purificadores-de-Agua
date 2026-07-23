import { Droplets, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1784833951/logo-rodape-gorre_ks0dnb.svg" 
                alt="Gorre Purificadores" 
                className="h-12 brightness-0 invert" 
              />
            </div>
            <p className="max-w-md leading-relaxed mb-6">
              Transformando a saúde e a qualidade de vida de milhares de famílias através da melhor tecnologia em purificação de água.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jarragorre/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://business.facebook.com/jarragorre1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#produtos" className="hover:text-cyan-400 transition-colors">Nossos Produtos</a></li>
              <li><a href="#beneficios" className="hover:text-cyan-400 transition-colors">Benefícios</a></li>
              <li><a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre a Gorre</a></li>
              <li><a href="#revendedor" className="hover:text-cyan-400 transition-colors">Seja um Revendedor</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-3">
              <li>0800 123 4567</li>
              <li>contato@gorre.com.br</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-center">
          <p>MKG COMÉRCIO DE FILTROS EIRELI • CNPJ: 17.774.774/0001-72 • Endereço: Rua Pedro Coelho, 103, CEP 13185-503, Hortolândia, SP.</p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href="https://www.fabricapublicidade.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              Desenvolvido por Fabrica Publicidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
