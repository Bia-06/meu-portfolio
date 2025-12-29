import React from 'react';
import { useSettings } from '../App';

export default function Footer() {
  const { t } = useSettings();

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <footer className="relative py-10 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 overflow-hidden">
      <FloatingParticles />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-gray-600 dark:text-gray-400">
          {t.footer}
        </p>
      </div>
    </footer>
  );
}