import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da SnapMacro. Seu objetivo é tirar dúvidas sobre o sistema de dieta e organização alimentar.
Responda de forma curta, empática e direta.
O SnapMacro é um sistema que organiza refeições, analisa por foto e confronta o usuário quando necessário.
Ele não é apenas um app de contar calorias, é um sistema de accountability.
Preço: R$ 97/mês, ou Trimestral por R$ 247.
Garantia de 7 dias incondicional.
Se o usuário perguntar sobre login, diga que o botão está no canto superior direito.
`;

let aiClient: GoogleGenAI | null = null;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.error("API_KEY not found in environment variables");
      return "Desculpe, o serviço de chat está indisponível no momento (Chave de API ausente).";
    }

    if (!aiClient) {
        aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }

    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Desculpe, não entendi. Poderia reformular?";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde.";
  }
};