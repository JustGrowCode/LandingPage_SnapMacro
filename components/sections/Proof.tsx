import React from 'react';
import { TrendingUp, Users, Utensils } from 'lucide-react';

const cases = [
  {
    name: "Ricardo M.",
    role: "Programador",
    before: "Comia pizza 4x na semana por preguiça.",
    after: "O sistema planeja, eu só executo. Simples.",
    result: "12kg em 14 semanas",
    img: "https://picsum.photos/seed/ricardo/200"
  },
  {
    name: "Ana P.",
    role: "Advogada",
    before: "Tentou 6 nutris, desistia no dia 15.",
    after: "O feedback semanal me mantém na linha.",
    result: "8kg em 11 semanas",
    img: "https://picsum.photos/seed/ana/200"
  },
  {
    name: "Carlos E.",
    role: "Empresário",
    before: "Sem tempo para pesar comida.",
    after: "A foto resolveu meu problema de tempo.",
    result: "15% gordura corporal OFF",
    img: "https://picsum.photos/seed/carlos/200"
  }
];

export const Proof: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Resultados Quando Você Para de Improvisar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img src={item.img} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2 text-sm">
                  <span className="text-red-500 font-medium">Antes:</span>
                  <span className="text-gray-500">{item.before}</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-green-500 font-medium">Depois:</span>
                  <span className="text-gray-500">{item.after}</span>
                </div>
                <div className="pt-4 border-t border-gray-50">
                  <p className="text-2xl font-bold text-gray-900">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="flex items-center gap-3">
                <Users className="text-gray-400" />
                <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-gray-900">3.847</p>
                    <p className="text-sm text-gray-500">Usuários Ativos</p>
                </div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="flex items-center gap-3">
                <Utensils className="text-gray-400" />
                <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-gray-900">178.000</p>
                    <p className="text-sm text-gray-500">Refeições Analisadas</p>
                </div>
            </div>
             <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="flex items-center gap-3">
                <TrendingUp className="text-gray-400" />
                <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-gray-900">0.6kg</p>
                    <p className="text-sm text-gray-500">Média de perda semanal</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};