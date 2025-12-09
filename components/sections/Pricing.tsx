import React from 'react';
import { Button } from '../ui/Button';
import { ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Duas Opções</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            <span className="font-medium text-gray-900">Opção 1:</span> Continuar improvisando e estar no mesmo lugar daqui 6 meses.<br/>
            <span className="font-medium text-gray-900">Opção 2:</span> Deixar o sistema trabalhar por você e ver progresso real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 items-end">
          {/* Monthly */}
          <div className="p-8 rounded-3xl border border-gray-200 bg-white order-2 md:order-1">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Mensal</h3>
            <p className="text-gray-500 text-sm mb-6">Flexibilidade total</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">R$ 97</span>
              <span className="text-gray-500">/mês</span>
            </div>
            <Button variant="outline" fullWidth>Selecionar</Button>
          </div>

          {/* Quarterly (Highlighted) */}
          <div className="p-8 rounded-3xl border-2 border-gray-900 bg-gray-900 text-white relative transform md:-translate-y-4 order-1 md:order-2 shadow-2xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              Mais Escolhido
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Trimestral</h3>
            <p className="text-gray-400 text-sm mb-6">Compromisso sério</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">R$ 247</span>
              <div className="text-gray-400 text-sm mt-1">Equivalente a R$ 82/mês</div>
            </div>
            <Button variant="white" fullWidth className="font-bold">Começar Agora</Button>
            <p className="text-xs text-center text-gray-500 mt-4">Economize 15%</p>
          </div>

          {/* Annual */}
          <div className="p-8 rounded-3xl border border-gray-200 bg-white order-3">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Anual</h3>
            <p className="text-gray-500 text-sm mb-6">Melhor valor</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">R$ 877</span>
              <span className="text-gray-500">/ano</span>
              <div className="text-gray-400 text-xs mt-1">R$ 73/mês</div>
            </div>
            <Button variant="outline" fullWidth>Selecionar</Button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 flex items-start gap-4 border border-gray-100">
           <ShieldCheck className="w-12 h-12 text-gray-900 flex-shrink-0" />
           <div>
             <h4 className="font-bold text-lg text-gray-900 mb-2">Garantia Blindada de 7 Dias</h4>
             <p className="text-gray-600 leading-relaxed">
               Teste o sistema completo por 7 dias. Se você não sentir que sua vida ficou mais organizada e fácil, devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas. Basta um email.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};