
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Link } from 'react-router-dom';

const AssistantPage: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de Tomauno Models. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "Eres un asistente virtual experto de Tomauno Models, una academia de modelaje profesional y agencia de representación. Tu tono es profesional, elegante, servicial y motivador. Responde dudas sobre cursos, inscripciones, castings y staff basándote en que somos líderes en la industria de la moda.",
          temperature: 0.7,
        },
      });

      const modelText = response.text || "Lo siento, tuve un pequeño problema técnico. ¿Podrías repetir tu pregunta?";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, mi conexión con la pasarela se ha interrumpido. Por favor intenta de nuevo en unos momentos." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-6 min-h-[80vh]">
      <div className="layout-content-container flex flex-col w-full max-w-[800px] gap-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <Link to="/faq" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline mb-2">
              <span className="material-symbols-outlined text-xs">arrow_back</span> Volver a Soporte
            </Link>
            <h1 className="text-white text-4xl font-black tracking-tight">Asistente Inteligente</h1>
          </div>
          <div className="size-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/30">
            <span className="material-symbols-outlined text-4xl">smart_toy</span>
          </div>
        </div>

        <div className="bg-card-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white font-medium rounded-tr-none' 
                      : 'bg-white/10 text-white/90 rounded-tl-none border border-white/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 rounded-2xl px-5 py-3 border border-white/10 flex gap-2 items-center">
                  <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-background-dark/50 border-t border-white/5">
            <div className="flex gap-2 items-center bg-white/5 rounded-2xl p-2 border border-white/10 focus-within:border-primary/50 transition-colors">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu duda aquí..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white px-3"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="size-10 rounded-xl bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantPage;
