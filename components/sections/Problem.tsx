import React from 'react';
import { AlertCircle, Repeat, XCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <>
      {/* Block 1: Identification */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">O Ciclo da Falha</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-12">
            Por Que Você Sempre Desiste?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Você improvisa</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Não tem um plano real. Come o que tem na geladeira e acha que está "saudável".</p>
            </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ninguém te cobra</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Você mente para si mesmo. "Só um pedacinho" vira um hábito diário.</p>
            </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Repeat className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">É chato demais</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Pesar comida, digitar em apps complexos, planilhas infinitas. Ninguém aguenta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Agitation */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative pl-8 border-l-2 border-gray-200 space-y-8">
                {[
                  { day: "Segunda", status: "Começa empolgado" },
                  { day: "Quarta", status: "Já furou no almoço" },
                  { day: "Sábado", status: "Desistiu totalmente" },
                  { day: "Domingo", status: '"Mês que vem eu começo direito"' },
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-200 border-4 border-white"></div>
                    <h4 className="font-bold text-gray-900">{item.day}</h4>
                    <p className="text-gray-500">{item.status}</p>
                  </div>
                ))}
                <div className="pt-4">
                  <p className="font-semibold text-red-500">6 meses depois: mesmo lugar.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <blockquote className="text-2xl font-light text-gray-600 italic mb-6">
                "A definição de insanidade é repetir a mesma coisa esperando resultado diferente."
              </blockquote>
              <div className="h-1 w-20 bg-gray-900 mx-auto md:mx-0"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};