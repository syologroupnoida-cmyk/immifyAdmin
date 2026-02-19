import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Immify Assistant. How can I help you with your immigration today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    const setupBot = () => {
      // Check if botpress is loaded from the scripts
      if (window.botpress) {
        window.botpress.on('message', (message) => {
          // Listen for bot's incoming responses
          if (message.direction === 'incoming') {
            setMessages(prev => {
              // Duplicate message check
              if (prev.find(m => m.id === message.id)) return prev;
              return [...prev, {
                id: message.id || Date.now(),
                text: message.payload.text,
                sender: 'bot'
              }];
            });
          }
        });
      } else {
        // Retry if script is still loading
        setTimeout(setupBot, 500);
      }
    };

    setupBot();
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !window.botpress) return;

    const userText = inputValue;
    
    // 1. Update UI locally
    setMessages(prev => [...prev, { id: Date.now(), text: userText, sender: 'user' }]);
    
    // 2. Send to Botpress
    window.botpress.sendMessage(userText);
    
    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-gray-800' : 'bg-blue-600'
        } text-white`}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[330px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 transition-all duration-300 origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="p-4 bg-blue-600 text-white flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">I</div>
          <div>
            <h3 className="font-bold text-sm">Immify Assistant</h3>
            <p className="text-[10px] text-blue-100">Online | AI Powered</p>
          </div>
        </div>

        {/* Messages Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                msg.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about visas, PR, or work permits..."
            className="flex-1 py-2 px-3 bg-gray-100 rounded-xl text-sm outline-none focus:ring-1 focus:ring-blue-400 text-gray-700"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;