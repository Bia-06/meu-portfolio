import React, { useState, useEffect, createContext, useContext } from 'react';

// Importe seus componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// --- DADOS DE CONTEÚDO (PARA TRADUÇÃO) ---
const content = {
  pt: {
    nav: {
      home: 'Ínicio',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: '<Olá, eu sou a',
      name: 'Beatriz',
      title: 'Desenvolvedora Web Full Stack',
      description: 'Apaixonada por criar soluções modernas e impactantes usando a tecnologia.',
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Me chamo Beatriz Pires, tenho 20 anos, busco constantemente aprender e aplicar novos conceitos. Tenho um forte interesse em desenvolvimento web, inteligência artificial e design de UI/UX.',
      p2: 'Meu objetivo é usar minhas habilidades para construir aplicações que sejam não apenas funcionais, mas também intuitivas e bonitas. Estou sempre aberta a novos desafios e oportunidades de colaboração.',
    },
    skills: {
      title: 'Minhas Habilidades',
      subtitle: 'Tecnologias e ferramentas que utilizo para criar soluções incríveis',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Uma seleção dos meus trabalhos recentes.',
      p1: {
        title: 'MyPersonal Library',
        description: 'Uma aplicação web moderna com interface intuitiva para gerenciar acervo bibliográfico, empréstimos e devoluções de forma eficiente.',
        tag: 'Website',
      },
      p2: {
        title: 'Bar do Amorim',
        description: 'Site completo e responsivo para um bar local, focado em modernizar a interação com o cliente e otimizar a gestão interna.',
        tag: 'Website',
      },
      p3: {
        title: 'Comparador de Preços (CPLP)',
        description: 'Um aplicativo que compara preços de restaurantes e lanchonetes para você fazer a melhor escolha.',
        tag: 'App',
      },
      viewCode: 'Ver Código',
      viewProject: 'Ver Projeto'
    },
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Estou disponível para novas oportunidades e conexões. Sinta-se à vontade para me enviar uma mensagem!',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
    },
    footer: 'Desenvolvido com Tailwind, React, HTML, JavaScript e muito ☕ por Beatriz Pires. 2025.',
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Beatriz',
      title: 'Full Stack Web Developer',
      description: 'Passionate about creating modern and impactful solutions using technology.',
    },
    about: {
      title: 'About Me',
      p1: 'My name is Beatriz Pires, I am 20 years old, and I constantly seek to learn and apply new concepts. I have a strong interest in web development, artificial intelligence, and UI/UX design.',
      p2: 'My goal is to use my skills to build applications that are not only functional but also intuitive and beautiful. I am always open to new challenges and collaboration opportunities.',
    },
    skills: {
      title: 'My Skills',
      subtitle: 'Technologies and tools I use to create amazing solutions',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of my recent work.',
      p1: {
        title: 'MyPersonal Library',
        description: 'A modern web application with an intuitive interface to efficiently manage library collections, loans, and returns.',
        tag: 'Website',
      },
      p2: {
        title: 'Bar do Amorim',
        description: 'Complete and responsive website for a local bar, focused on modernizing customer interaction and optimizing internal management.',
        tag: 'Website',
      },
      p3: {
        title: 'Price Comparator (CPLP)',
        description: 'An application that compares restaurant and snack bar prices to help you make the best choice.',
        tag: 'App',
      },
      viewCode: 'View Code',
      viewProject: 'View Project'
    },
    contact: {
      title: "Let's Talk",
      subtitle: "I'm available for new opportunities and connections. Feel free to send me a message!",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
    },
    footer: 'Built with Tailwind, React, HTML, JavaScript and lots of ☕ by Beatriz Pires. 2025.',
  },
};

// --- CONTEXTO GLOBAL (PARA TEMA E IDIOMA) ---
const SettingsContext = createContext();

function SettingsProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove ambas as classes primeiro
    root.classList.remove('light', 'dark');
    
    // Adiciona a classe correta
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');
  const t = content[language];

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme, language, toggleLanguage, t }}>
      {children}
    </SettingsContext.Provider>
  );
}

// Exporte o hook para os componentes usarem
export const useSettings = () => useContext(SettingsContext);

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  return (
    <SettingsProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </SettingsProvider>
  );
}