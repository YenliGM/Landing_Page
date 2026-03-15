import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Loader2, Send, Sparkles, X } from 'lucide-react';

const AIAgentConsultant = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Paleta de cores para combinar com seu App.jsx
  const colors = {
    primaryRed: '#c91010',
    darkBg: '#0a0c14',
    innerBg: '#03050b',
    textWhite: '#fdfffc',
    skyBlue: '#acd4f8'
  };

  const handleAskAI = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setError(null);
    setResponse('');

const apiKey = import.meta.env.VITE_GROQ_API_KEY;
console.log("Chave encontrada:", apiKey ? "Sim" : "Não");

  if (!apiKey) {
    setError("Erro: VITE_GROQ_API_KEY não detectada pelo Vite.");
    return;
  }
  
    try {
      // IMPORTANTE VITE_GROQ_API_KEY está no arquivo .env
      
      if (!apiKey) throw new Error("API Key não configurada.");

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: "Você é o Assistente da Yenli Machado. Ajude os recrutadores com informações sobre a trajetória dela em IA e automação. Seja profissional e direto."
            },
            { role: "user", content: input }
          ],
          temperature: 0.7
        })
      });

      if (!res.ok) throw new Error("Erro na conexão.");
      
      const data = await res.json();
      setResponse(data.choices[0].message.content);
      setInput(''); 
    } catch (err) {
      console.error(err);
      setError("IA Brain is disconnected. Verify your API Key!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 10000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              marginBottom: '15px',
              width: '320px',
              backgroundColor: colors.darkBg,
              border: '1px solid rgba(255, 0, 0, 0.3)',
              borderRadius: '20px',
              boxShadow: '0px 10px 30px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '450px'
            }}
          >
            {/* Header */}
            <div style={{ padding: '15px', backgroundColor: colors.primaryRed, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '1px' }}>
                <Bot size={18} /> YENLI IA STRATEGY ASSISTANT
              </span>
              <button onClick={() => setIsChatOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            {/* Corpo */}
            <div style={{ padding: '20px', flex: 1, overflowY: 'auto', backgroundColor: colors.innerBg, color: colors.textWhite, fontSize: '14px', minHeight: '200px' }}>
              {response ? (
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', lineHeight: '1.5' }}>
                  {response}
                </div>
              ) : (
                <p style={{ opacity: 0.5, textAlign: 'center', marginTop: '40px', fontStyle: 'italic' }}>
                  Como posso ajudar na sua estratégia de IA hoje?
                </p>
              )}
              
              {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: colors.primaryRed, marginTop: '10px' }}>
                  <Loader2 className="animate-spin" size={16} /> 
                  <span style={{ fontSize: '12px' }}>Connecting to the brain...</span>
                </div>
              )}
              
              {error && (
                <div style={{ marginTop: '10px', padding: '10px', backgroundColor: 'rgba(255,0,0,0.1)', border: '1px solid #ff0000', borderRadius: '8px', color: '#ff4444', fontSize: '11px', textAlign: 'center' }}>
                  {error}
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAskAI()}
                placeholder="Pergunte sobre meus projetos..."
                style={{ flex: 1, backgroundColor: '#1a1d29', border: '1px solid #333', borderRadius: '8px', padding: '8px 12px', color: 'white', outline: 'none', fontSize: '13px' }}
              />
              <button 
                onClick={handleAskAI}
                disabled={isLoading}
                style={{ backgroundColor: colors.primaryRed, border: 'none', borderRadius: '8px', padding: '8px', color: 'white', cursor: 'pointer', opacity: isLoading ? 0.5 : 1 }}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Gatilho */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{
          backgroundColor: colors.primaryRed,
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 15px rgba(255, 0, 0, 0.3)',
          cursor: 'pointer'
        }}
      >
        <Sparkles size={28} style={{ transform: isChatOpen ? 'rotate(45deg)' : 'none', transition: '0.3s' }} />
      </motion.button>
    </div>
  );
};

export default AIAgentConsultant;