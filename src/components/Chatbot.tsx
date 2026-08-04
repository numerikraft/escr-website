import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SendHorizontal, Bot, Sparkles, MessageSquare, Maximize2, Minimize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  CHATBOT_WELCOME_MESSAGE, 
  CHATBOT_FALLBACK_MESSAGE,
  CHATBOT_INITIAL_OPTIONS,
  getResponseById,
  matchKeyword
} from '../data/chatbotFaq';
import { CHATBOT_WELCOME_MESSAGE_FR, CHATBOT_FALLBACK_MESSAGE_FR } from '../data/chatbotFaqFr';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[]; // Array of option IDs
}

const STORAGE_KEY = 'escr_chatbot_history';

export default function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Hide FAB when user reaches the footer (bottom of page)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Consider "at bottom" when within 120px of the page end
      setIsAtBottom(scrollTop + windowHeight >= docHeight - 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load chat history", e);
      }
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Initial greeting if no history
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: language === 'fr' ? CHATBOT_WELCOME_MESSAGE_FR : CHATBOT_WELCOME_MESSAGE,
            options: CHATBOT_INITIAL_OPTIONS
          }
        ]);
        setIsTyping(false);
      }, 1200);
    }
  }, [isOpen, messages.length, language]);

  // Shake + tooltip effect
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShouldShake(true);
        setShowTooltip(true);
        setTimeout(() => {
          setShouldShake(false);
        }, 2000);
        setTimeout(() => {
          setShowTooltip(false);
        }, 8000);
      }, 10000);
      return () => clearTimeout(timer);
    } else {
      setShowTooltip(false);
    }
  }, [isOpen]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleResponse = (optionId: string | null, textInput?: string) => {
    let responseId = optionId;
    
    if (textInput) {
      responseId = matchKeyword(textInput);
    }

    setIsTyping(true);
    
    const baseDelay = 600;
    
    setTimeout(() => {
      if (responseId) {
        const option = getResponseById(responseId, language);
        if (option) {
          const messageLengthDelay = Math.min((option.response as string).length * 8, 1500);
          
          setTimeout(() => {
            setMessages(prev => [
              ...prev,
              {
                id: (Date.now() + 1).toString(),
                sender: 'bot',
                text: option.response as string,
                options: option.followUpIds
              }
            ]);
            setIsTyping(false);
          }, messageLengthDelay);
          return;
        }
      }

      // Fallback
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: language === 'fr' ? CHATBOT_FALLBACK_MESSAGE_FR : CHATBOT_FALLBACK_MESSAGE,
            options: ['services', 'contact', 'faq']
          }
        ]);
        setIsTyping(false);
      }, 1000);
    }, baseDelay);
  };

  const handleOptionClick = (optionId: string) => {
    const option = getResponseById(optionId, language);
    if (!option) return;

    // Handle special routing commands
    if (typeof option.response === 'string' && option.response.startsWith('nav:')) {
      const path = option.response.replace('nav:', '');
      navigate(path);
      setIsOpen(false);
      return;
    }

    // Handle mailto
    if (option.type === 'mailto' && typeof option.response === 'string') {
      window.location.href = option.response;
      return;
    }

    // Add user message
    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), sender: 'user', text: option.label }
    ]);

    handleResponse(optionId);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userInput = inputValue.trim();
    setInputValue('');

    // Add user text
    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), sender: 'user', text: userInput }
    ]);

    handleResponse(null, userInput);
  };

  // Format message text to handle newlines and basic formatting
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      const boldParts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <React.Fragment key={i}>
          {boldParts.map((boldPart, j) => {
            if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
              return <strong key={j} className="font-bold text-[#6f1888]">{boldPart.slice(2, -2)}</strong>;
            }
            const italicParts = boldPart.split(/(\*.*?\*)/g);
            return italicParts.map((italicPart, k) => {
              if (italicPart.startsWith('*') && italicPart.endsWith('*') && italicPart.length > 2) {
                return <em key={k} className="text-[#6f1888]">{italicPart.slice(1, -1)}</em>;
              }
              return italicPart;
            });
          })}
          {i < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* ═══════════ Floating Action Button ═══════════ */}
      <AnimatePresence>
        {!isOpen && !isAtBottom && (
          <div className="fixed bottom-8 right-8 z-[9999] pointer-events-auto">
            {/* Tooltip bubble */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.85 }}
                  className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-[#392874] text-[13px] font-medium px-4 py-3 rounded-lg shadow-[0_0_25px_rgba(80,41,142,0.18)] flex items-center gap-2"
                >
                  <Bot size={16} className="text-[#7f2191]" />
                  <span>{language === 'fr' ? 'Comment puis-je vous aider ?' : 'How can I help you?'}</span>
                  {/* Arrow */}
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-[-45deg]" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              aria-label="Open AI Assistant"
              initial={{ scale: 0, opacity: 0 }}
              animate={shouldShake ? {
                scale: 1,
                opacity: 1,
                rotate: [0, -8, 8, -8, 8, 0],
                transition: { duration: 0.6 }
              } : { scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative w-14 h-14 bg-[#7f2191] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(80,41,142,0.18)] transition-colors cursor-pointer text-white hover:bg-[#5e186b] border-2 border-white"
            >
              <Bot size={28} />
              {/* Notification dot */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* ═══════════ Chat Window ═══════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed bottom-8 right-8 h-[460px] max-h-[85vh] bg-white rounded-xl shadow-[0_0_25px_rgba(80,41,142,0.18)] z-[10000] flex flex-col overflow-hidden border-2 border-white transition-all duration-300 ${
              isMaximized ? 'w-[min(92vw,650px)]' : 'w-[min(92vw,400px)]'
            }`}
          >
            {/* ── Header ── */}
            <div 
              className="p-4 flex justify-between items-center text-white shrink-0 border-b border-white"
              style={{ background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-[42px] h-[42px] bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={24} className="text-white" />
                  </div>
                  {/* Online indicator Badge - Positioned to match image */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-[13px] h-[13px] bg-[#84f089] border-2 border-[#6f1888] rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] tracking-tight leading-tight">
                    {language === 'fr' ? 'Assistant ES-CR' : 'ES-CR Assistant'}
                  </h3>
                  <p className="text-[12.5px] text-white/80 font-normal mt-0.5">{language === 'fr' ? 'En ligne' : 'Online'}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label={isMaximized ? "Minimize chat" : "Maximize chat"}
                >
                  {isMaximized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label="Close chat"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* ── Messages Area ── */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-5">
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col">
                  {/* Bot message */}
                  {msg.sender === 'bot' && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7f2191] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <Bot size={16} className="text-white" />
                      </div>
                      <div className="max-w-[85%] bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 text-[14px] text-[#392874] shadow-sm leading-relaxed">
                        {formatMessage(msg.text)}
                      </div>
                    </div>
                  )}

                  {/* User message */}
                  {msg.sender === 'user' && (
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm px-4 py-3 text-[14px] leading-relaxed self-end bg-[#50298e] text-white shadow-sm">
                      {msg.text}
                    </div>
                  )}

                  {/* Options */}
                  {msg.sender === 'bot' && msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-11">
                      {msg.options.map(optId => {
                        const opt = getResponseById(optId, language);
                        if (!opt) return null;
                        return (
                          <button
                            key={optId}
                            onClick={() => handleOptionClick(optId)}
                            className="text-[13px] font-medium px-4 py-2 rounded-full text-[#7f2191] bg-white border border-[#7f2191] hover:bg-[#fcf5ff] hover:border-[#392874] transition-colors cursor-pointer"
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#7f2191] flex items-center justify-center shrink-0 shadow-sm">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5 py-1">
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                          className="w-2 h-2 bg-[#7f2191]/60 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* ── Input + Footer ── */}
            <div className="shrink-0 border-t border-gray-200 bg-white p-4">
              <form onSubmit={handleTextSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
                  className="flex-1 bg-white rounded-full px-5 py-3 text-[14px] outline-none border border-gray-200 focus:border-[#7f2191] transition-all text-[#392874] placeholder-[#392874]/60"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="group relative w-[46.33px] h-[46.33px] rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden disabled:bg-gray-300 disabled:opacity-50 transition-colors duration-500 cursor-pointer ml-1 bg-[#50298e]"
                >
                  {/* Gradient Layer */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 group-disabled:hidden"
                    style={{ background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)' }}
                  />
                  {/* Icon Layer (Always on top) */}
                  <SendHorizontal size={18} strokeWidth={2.5} className="-rotate-45 -mt-0.5 ml-1 relative z-10" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
