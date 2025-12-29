import React from 'react';
import { useSettings } from '../App';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { t, language } = useSettings();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      <div className="w-full h-48 relative overflow-hidden flex-shrink-0">
        {project.image ? (
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <span className="text-white font-semibold text-lg bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm">
              {project.tag}
            </span>
          </div>
        )}
        
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
            {project.tag}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {language === 'pt' ? 'Tecnologias:' : 'Technologies:'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              tech && tech !== 'Em breve' && tech !== '' && (
                <span 
                  key={index}
                  className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full border border-purple-200 dark:border-purple-800"
                >
                  {tech}
                </span>
              )
            ))}
          </div>
        </div>

        <div className="flex space-x-4 mt-auto">
          {project.projectLink !== '#' && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 group"
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              {language === 'pt' ? 'Ver Projeto' : 'View Project'}
            </a>
          )}

          {project.codeLink !== '#' && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 group border border-gray-200 dark:border-gray-600 ${
                project.projectLink === '#' ? 'flex-1' : ''
              }`}
            >
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              {t.projects.viewCode}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}