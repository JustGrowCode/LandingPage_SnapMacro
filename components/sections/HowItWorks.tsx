import React from 'react';

const steps = [
  {
    num: "01",
    title: "Quiz de 5 Minutos",
    desc: "Idade, peso, objetivo, rotina. O sistema calcula sua Taxa Metabólica Basal, gasto calórico real e define sua meta de macronutrientes.",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400"
  },
  {
    num: "02",
    title: "Plano Completo Gerado",
    desc: "7 dias de refeições + quantidades exatas + lista de compras automática + receitas simples de 5 ingredientes.",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400"
  },
  {
    num: "03",
    title: "Foto = Análise Instantânea",
    desc: "A IA identifica os alimentos no prato, calcula os macros e compara com sua meta da refeição. A foto é deletada em seguida. Leva 5 segundos.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
  },
  {
    num: "04",
    title: "Feedback Contínuo",
    desc: "Todo domingo você recebe um relatório: quantos dias bateu a meta, projeção matemática de resultado e ajustes necessários para a próxima semana.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-20 text-gray-900">Como Funciona</h2>
        
        <div className="space-y-24">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <span className="text-6xl font-bold text-gray-100">{step.num}</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed max-w-md">{step.desc}</p>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100 rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};