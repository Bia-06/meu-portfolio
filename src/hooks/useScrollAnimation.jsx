import { useState, useEffect } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight - 100 && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add('animate-fade-in-up');
          
          // Anima as barras de progresso
          const progressBars = element.querySelectorAll('[data-width]');
          progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
              bar.style.width = width;
            }, 200);
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica na carga inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
};