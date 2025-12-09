import React from 'react';
import { Button } from '../ui/Button';
import { Camera, CheckCircle, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gray-100 blur-3xl opacity-50"></div>
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-50 blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Você já tentou 5 dietas.<br />
            <span className="text-gray-400">Todas falharam.</span><br />
            O problema não é você.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Sistema completo que organiza suas refeições, analisa por foto e te confronta quando necessário.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="shadow-2xl shadow-blue-900/10">
              Começar Teste de 7 Dias
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
             <div className="flex items-center gap-2">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                       <img src={`https://picsum.photos/seed/${i + 50}/100`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <span className="font-medium">3.800+ usuários</span>
             </div>
             <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>Dados Criptografados</span>
             </div>
          </div>
        </div>

        {/* Visual Hero - Simulated App Interface */}
        <div className="relative mx-auto max-w-5xl mt-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-[2.5rem] bg-gray-900 p-4 shadow-2xl ring-1 ring-gray-900/10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-20"></div>
            <div className="relative rounded-[2rem] bg-gray-50 overflow-hidden aspect-[16/9] md:aspect-[21/9] flex">
              
              {/* Left Side: Photo Input */}
              <div className="w-1/2 bg-white border-r border-gray-100 p-8 flex flex-col justify-center items-center relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 grayscale hover:grayscale-0 transition-all duration-700"></div>
                <div className="z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-3">
                  <Camera className="w-6 h-6 text-gray-900" />
                  <span className="font-medium text-sm">Analisando foto...</span>
                </div>
              </div>

              {/* Right Side: Analysis Output */}
              <div className="w-1/2 bg-gray-50 p-8 flex flex-col justify-center">
                <div className="space-y-4 max-w-sm mx-auto w-full">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Resultado</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">Aprovado</span>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 text-sm">Salmão Grelhado</span>
                      <span className="font-semibold text-sm">180g</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-900 w-[90%]"></div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                     <div className="flex justify-between mb-2">
                      <span className="text-gray-600 text-sm">Vegetais</span>
                      <span className="font-semibold text-sm">200g</span>
                    </div>
                     <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full"></div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-4 bg-blue-50 p-3 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <p className="text-xs text-blue-800 leading-relaxed">
                      Excelente escolha proteica. Você atingiu 85% da sua meta diária de proteínas nesta refeição. Continue assim.
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg">
                <ArrowRight className="w-5 h-5 text-gray-900" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};