import React from 'react';
import { Button } from '../ui/Button';

export const FooterCTA: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Você Está a 5 Minutos do<br/> Plano Completo
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Faça o quiz, receba seu plano e comece a fotografar suas refeições. Simples, rápido e eficaz.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" variant="white">
            Começar Teste de 7 Dias
          </Button>
          <p className="text-sm text-gray-500">Cancela quando quiser.</p>
        </div>

        <div className="mt-24 text-left border-t border-gray-800 pt-12 space-y-6 text-gray-400 font-light">
          <p><strong className="text-white font-semibold">P.S.</strong> — Se você leu até aqui, sabe que o problema não é informação. É organização. 7 dias de garantia. Sem risco.</p>
          <p><strong className="text-white font-semibold">P.P.S.</strong> — "Vou começar mês que vem" = você vai estar no mesmo lugar daqui 6 meses. A melhor hora é agora.</p>
          <p><strong className="text-white font-semibold">P.P.P.S.</strong> — Você não precisa de mais motivação. Precisa de um sistema que funcione quando a motivação acaba.</p>
        </div>

        <div className="mt-20 flex justify-between items-center text-xs text-gray-600 border-t border-gray-900 pt-8">
            <span>&copy; 2024 SnapMacro Inc. Todos os direitos reservados.</span>
            <div className="flex gap-4">
                <a href="#" className="hover:text-gray-400">Termos</a>
                <a href="#" className="hover:text-gray-400">Privacidade</a>
            </div>
        </div>
      </div>
    </footer>
  );
};