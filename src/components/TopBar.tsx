import { ExternalLink } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-500 py-2.5 px-4 text-center z-[60] relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
        <span className="font-semibold text-slate-800">
          Informamos que a Jarra Gorre não foi testada pelo Instituto Adolfo Lutz.
        </span>
        <a 
          href="https://gorre.com.br/wp-content/uploads/2026/03/1018867-64.2020.8.26.0053.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-800 font-medium hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span className="underline decoration-slate-800/30 group-hover:decoration-white">Acesse o link</span> e confira o documento integral.
        </a>
      </div>
    </div>
  );
}
