import React, { useEffect, useState } from 'react';
import { useSettings } from '../App';
import { 
  SiReact, SiJavascript, SiNodedotjs, SiPython, SiMongodb,
  SiGithub, SiCplusplus, SiFigma, SiMysql, SiHtml5,
  SiCss3, SiTailwindcss, SiTypescript, SiSupabase, SiVite 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export default function Skills() {
  const { t } = useSettings();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );

  const skills = [
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> }, 
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Vite', icon: <SiVite className="text-violet-500" /> }, 
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-emerald-500" /> }, 
    { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-400" /> },
    { name: 'GitHub', icon: <SiGithub className="text-gray-800 dark:text-white" /> },
    { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
  ];

  return (
    <section 
      id="skills" 
      className="relative py-16 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 scroll-mt-16 overflow-hidden"
    >
      <FloatingParticles />
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent dark:via-purple-900/5 animate-pulse-slow" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2 animate-fade-in-down">
            {t.skills?.title || 'Minhas Habilidades'}
          </h2>

          <p className="text-base text-center text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto animate-fade-in-down">
            {t.skills?.subtitle || 'Tecnologias e ferramentas que utilizo para criar soluções incríveis'}
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-[15px] justify-items-center">
            {skills.map((skill, i) => {

              const isSecondRow = i >= 7;

              return (
                <div
                  key={skill.name}
                  className="group relative flex flex-col items-center animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className="
                      w-20 h-20 rounded-xl 
                      backdrop-blur-lg bg-white/10 dark:bg-gray-700/20
                      shadow-[0_0_12px_-2px_rgba(0,0,0,0.35)]
                      border border-white/20 dark:border-gray-600/40
                      flex items-center justify-center
                      transition-all duration-300 
                      group-hover:scale-110
                      group-hover:shadow-[0_0_18px_rgba(0,200,255,0.8)]
                    "
                  >
                    <div className="text-5xl drop-shadow-md">{skill.icon}</div>
                  </div>

                  <div
                    className={`
                      absolute 
                      ${isSecondRow ? "top-[90px]" : "-top-9"} 
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-300 
                      pointer-events-none z-20
                    `}
                  >
                    <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap animate-fadeIn relative">
                      {skill.name}

                      {isSecondRow ? (
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                      ) : (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}