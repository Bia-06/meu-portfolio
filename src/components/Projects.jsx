import React, { useEffect, useState } from 'react';
import { useSettings } from '../App';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const { t, language } = useSettings();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Dados dos projetos com tecnologias e imagens específicas
  const projectsData = [
    {
      ...t.projects.p1,
      technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
      projectLink: 'https://mypersonal-library.vercel.app/',
      codeLink: 'https://github.com/Bia-06/my-library-fixed',
      image: '/libraryfinal.jpg'
    },
    {
      ...t.projects.p2,
      technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
      projectLink: 'https://bardoamorim.com.br/',
      codeLink: 'https://github.com/Bia-06/bar-do-amorim',
      image: '/bardoamorimfinal.jpg'
    },
    {
      ...t.projects.p3,
      technologies: ['Python'],
      projectLink: 'https://github.com/UNIVEM-BCC-BSI/CPLP',
      codeLink: 'https://github.com/UNIVEM-BCC-BSI/CPLP/blob/main/C%C3%B3digoFinal.py',
      image: '/cplpfinal.jpg'
    },
  ];

  // Configuração do carrossel
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projectsData.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Partículas flutuantes
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 overflow-hidden">
      {/* Background Animado */}
      <FloatingParticles />
      
      {/* Gradiente animado no fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent dark:via-purple-900/5 animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 animate-fade-in-down">
            {t.projects.title}
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 animate-fade-in-down">
            {t.projects.subtitle}
          </p>

          {/* Container do Carrossel - Só mostra navegação se tiver mais de 3 projetos */}
          <div className="relative">
            {/* Botões de Navegação - Só aparecem se tiver mais de 3 projetos */}
            {projectsData.length > projectsPerSlide && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-600"
                  aria-label="Projetos anteriores"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-600"
                  aria-label="Próximos projetos"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </>
            )}

            {/* Container dos Cards - ADICIONADO PADDING VERTICAL PARA EVITAR CORTE */}
            <div className="overflow-hidden py-6"> {/* ← Adicionei py-6 aqui */}
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / projectsPerSlide)}%)`,
                  width: `${totalSlides * 100}%`
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div 
                    key={slideIndex}
                    className="w-full flex-shrink-0"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    {/* ADICIONADO MAIS ESPAÇO ENTRE OS CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                      {projectsData
                        .slice(
                          slideIndex * projectsPerSlide, 
                          (slideIndex + 1) * projectsPerSlide
                        )
                        .map((project, index) => (
                          <div 
                            key={index}
                            className="animate-fade-in-up transform-gpu"
                            style={{ animationDelay: `${index * 200}ms` }}
                          >
                            <ProjectCard project={project} />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores (Bolinhas) - Só aparecem se tiver mais de 3 projetos */}
            {projectsData.length > projectsPerSlide && (
              <div className="flex justify-center mt-8 space-x-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-purple-600 scale-125'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Contador de projetos */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {projectsData.length} {language === 'pt' ? 'projetos' : 'projects'} 
                {projectsData.length > projectsPerSlide && ` • ${currentSlide + 1}/${totalSlides}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}