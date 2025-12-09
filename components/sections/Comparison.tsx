import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900">
          Por Que Funciona Onde Tudo Falhou
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-6 px-4 text-sm font-medium text-gray-400 uppercase tracking-wider w-1/4">Comparativo</th>
                <th className="py-6 px-4 text-lg font-semibold text-gray-900 w-1/4 text-center">Apps Tradicionais</th>
                <th className="py-6 px-4 text-lg font-semibold text-gray-900 w-1/4 text-center">Nutricionista</th>
                <th className="py-6 px-4 text-xl font-bold text-white bg-gray-900 rounded-t-2xl w-1/4 text-center shadow-lg">SnapMacro</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {[
                { feature: "Personalização Diária", apps: false, nutri: true, snap: true },
                { feature: "Análise por Foto (IA)", apps: false, nutri: false, snap: true },
                { feature: "Feedback Imediato", apps: true, nutri: false, snap: true },
                { feature: "Esforço de Registro", apps: "Alto (Digitar)", nutri: "Médio (Diário)", snap: "Baixo (Foto)" },
                { feature: "Ajuste de Rota", apps: false, nutri: "Mensal", snap: "Semanal" },
                { feature: "Custo Mensal", apps: "R$ 29-49", nutri: "R$ 300+", snap: "R$ 73-97" },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                  <td className="py-6 px-4 font-medium text-gray-700 border-b border-gray-100">{row.feature}</td>
                  
                  <td className="py-6 px-4 text-center border-b border-gray-100 text-gray-500">
                    {typeof row.apps === 'boolean' ? (row.apps ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-red-300" />) : row.apps}
                  </td>
                  
                  <td className="py-6 px-4 text-center border-b border-gray-100 text-gray-500">
                     {typeof row.nutri === 'boolean' ? (row.nutri ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-red-300" />) : row.nutri}
                  </td>
                  
                  <td className={`py-6 px-4 text-center font-semibold ${idx === 5 ? 'rounded-b-2xl' : ''} bg-gray-900 text-white shadow-lg`}>
                     {typeof row.snap === 'boolean' ? (row.snap ? <Check className="mx-auto text-green-400" /> : <X className="mx-auto text-red-500" />) : row.snap}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};