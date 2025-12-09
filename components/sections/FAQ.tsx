import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
  { q: "A IA funciona mesmo?", a: "Sim. Utilizamos modelos de visão computacional treinados em milhões de pratos. A taxa de acerto é superior a 94%. Se houver erro, você pode corrigir manualmente em 2 segundos." },
  { q: "Preciso fotografar absolutamente tudo?", a: "Para o melhor resultado, sim. Quanto mais dados o sistema tem, mais preciso é o ajuste semanal. Mas se esquecer uma refeição, pode adicionar texto rápido." },
  { q: "E se eu viajar ou tiver um evento?", a: "O sistema se adapta. Você marca 'Modo Viagem' ou 'Evento' e ele recalcula suas metas compensatórias para os dias adjacentes, sem culpa." },
  { q: "Substitui um nutricionista?", a: "O SnapMacro foca na execução e organização diária. Ele complementa o trabalho de um nutricionista se você tiver patologias específicas, mas funciona perfeitamente sozinho para emagrecimento/hipertrofia em pessoas saudáveis." },
  { q: "Meus dados e fotos são seguros?", a: "100%. Utilizamos criptografia de ponta a ponta. Suas fotos são processadas pela IA e deletadas dos nossos servidores em 24h. Ninguém vê o que você come além do algoritmo." },
  { q: "Posso cancelar se não gostar?", a: "Sim. O cancelamento é feito com 2 cliques no painel de configurações. Sem ligar, sem falar com atendente." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900">{item.q}</span>
                {openIndex === idx ? <Minus className="text-gray-400" /> : <Plus className="text-gray-400" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-500 leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};