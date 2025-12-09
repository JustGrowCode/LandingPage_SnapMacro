import React from 'react';
import { LayoutDashboard, Camera, BarChart3 } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-4 block">O Novo Mecanismo</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            O Que Estava Faltando:<br/>Organização Completa
          </h2>
          <p className="text-gray-400 text-lg">
            Não é mais um app. Não é força de vontade. É um <span className="text-white font-semibold">sistema completo</span> que organiza tudo por você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: LayoutDashboard,
              title: "Planejamento Automático",
              desc: "Cálculos metabólicos precisos e plano semanal gerado instantaneamente.",
            },
            {
              icon: Camera,
              title: "Execução Sem Esforço",
              desc: "Apenas tire uma foto. Nossa IA analisa, pesa e registra em segundos.",
            },
            {
              icon: BarChart3,
              title: "Accountability Brutal",
              desc: "Relatórios semanais diretos. Sem massagem no ego. A verdade nua e crua.",
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-colors group">
              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};