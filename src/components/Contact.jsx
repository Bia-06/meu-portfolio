import React, { useState, useEffect } from 'react';
import { useSettings } from '../App';
import { Send, Github, Linkedin, Instagram, Mail, Copy, Check } from 'lucide-react';

// Partículas flutuantes para o Contact
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full opacity-20 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${12 + Math.random() * 8}s`,
        }}
      />
    ))}
  </div>
);

export default function Contact() {
  const { t, language } = useSettings();
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const email = "piresbeatriz067@hotmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 
          dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 overflow-hidden"
    >
      <FloatingParticles />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/10 
          to-transparent dark:via-purple-900/5 animate-pulse-slow" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Título */}
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 animate-fade-in-down">
            {t.contact.title}
          </h2>

          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-16 animate-fade-in-down">
            {t.contact.subtitle}
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Redes sociais */}
            <div className="space-y-6 animate-fade-in-left w-full">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
                {language === 'pt' ? 'Minhas Redes' : 'My Networks'}
              </h3>

              {/* CARD MODEL */}
              <div className="space-y-4">

                {/* LINKEDIN - Roxo */}
                <a
                  href="https://www.linkedin.com/in/beatriz-pires-ab9564337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/40 
                    backdrop-blur-md border border-purple-200/40 dark:border-purple-900/20 
                    shadow-lg hover:shadow-purple-300/30 dark:hover:shadow-purple-900/40 
                    transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-3 text-gray-800 dark:text-gray-200 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    LinkedIn
                  </span>
                </a>

                {/* INSTAGRAM - Rosa */}
                <a
                  href="https://www.instagram.com/biaapires.bp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/40 
                    backdrop-blur-md border border-pink-200/40 dark:border-pink-900/20 
                    shadow-lg hover:shadow-pink-300/30 dark:hover:shadow-pink-900/40 
                    transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-3 text-gray-800 dark:text-gray-200 font-medium group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    Instagram
                  </span>
                </a>

                {/* GITHUB - Verde/Laranja */}
                <a
                  href="https://github.com/Bia-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/40 
                    backdrop-blur-md border border-green-200/40 dark:border-green-900/20 
                    shadow-lg hover:shadow-green-300/30 dark:hover:shadow-green-900/40 
                    transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-3 text-gray-800 dark:text-gray-200 font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    GitHub
                  </span>
                </a>

                {/* EMAIL - Azul */}
                <div
                  className="flex items-center justify-between p-4 rounded-xl bg-white/60 dark:bg-gray-800/40 
                    backdrop-blur-md border border-blue-200/40 dark:border-blue-900/20 
                    shadow-lg hover:shadow-blue-300/30 dark:hover:shadow-blue-900/40 
                    transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                >
                  <div
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={handleCopy}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {email}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-blue-500 group-hover:text-blue-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6 animate-fade-in-right">
              {/* INPUT */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-700/60 
                    border border-gray-300 dark:border-gray-600 
                    focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                    shadow-inner transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600"
                  placeholder={t.contact.name}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-700/60 
                    border border-gray-300 dark:border-gray-600 
                    focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                    shadow-inner transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600"
                  placeholder={t.contact.email}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-700/60 
                    border border-gray-300 dark:border-gray-600 
                    focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                    shadow-inner transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 resize-none"
                  placeholder={t.contact.message}
                ></textarea>
              </div>

              {/* Botão */}
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 
                    text-white font-semibold rounded-xl shadow-xl 
                    hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 
                    flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {t.contact.send}
                    <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}