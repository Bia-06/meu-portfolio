import React, { useEffect, useState } from 'react';
import { useSettings } from '../App';

export default function Hero() {
  const { t } = useSettings();
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefixText = `<Olá, eu sou a `; // Texto antes do nome (incluindo o "a")
  const nameText = `${t.hero.name}`; // Apenas o nome
  const suffixText = `>`; // O ">" final
  const fullText = prefixText + nameText + suffixText;

  useEffect(() => {
    setIsVisible(true);
    
    // Efeito de digitação
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Partículas flutuantes
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      {/* Background Animado */}
      <FloatingParticles />
      
      {/* Gradiente animado no fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/30 to-transparent dark:via-purple-900/10 animate-pulse-slow" />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className={`space-y-8 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Texto Principal com efeito de digitação */}
          <div className="space-y-6">
            {/* Saudação com efeito de digitação */}
            <div className="animate-fade-in-down">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="inline-block">
                  {/* Texto antes do nome (incluindo o "a") - sempre branco */}
                  <span className="text-gray-900 dark:text-white">
                    {displayText.slice(0, prefixText.length)}
                  </span>
                  
                  {/* Nome com gradiente */}
                  {currentIndex > prefixText.length && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-size-200 animate-gradient-x">
                      {displayText.slice(prefixText.length, prefixText.length + nameText.length)}
                    </span>
                  )}
                  
                  {/* ">" final - sempre branco */}
                  {currentIndex >= prefixText.length + nameText.length && (
                    <span className="text-gray-900 dark:text-white">
                      {displayText.slice(prefixText.length + nameText.length)}
                    </span>
                  )}
                </span>
                
                {/* Cursor piscando */}
                {currentIndex < fullText.length && (
                  <span className="ml-1 animate-pulse">|</span>
                )}
              </h1>
            </div>

            {/* Título */}
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <p className="text-xl md:text-3xl font-medium text-purple-600 dark:text-purple-400">
                {t.hero.title}
              </p>
            </div>

            {/* Descrição */}
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {t.hero.description}
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <div className="space-x-4 pt-8">
              <a
                href="#projects"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {t.nav.projects}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-purple-200 dark:border-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <span className="relative z-10 flex items-center">
                  {t.nav.contact}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            <div className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500 pt-12">
              <span className="text-sm">Scroll para explorar</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}