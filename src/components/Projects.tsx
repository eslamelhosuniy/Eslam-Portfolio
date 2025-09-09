import React from 'react';
import { ExternalLink, Github, Folder, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Projects: React.FC = () => {
  const { currentLanguage, isRTL } = useLanguage();
  const t = content[currentLanguage.code];

  const getStatusColor = (status: string) => {
    if (status === 'Completed' || status === 'مكتمل') {
      return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
    } else if (status === 'Ongoing' || status === 'قيد التطوير') {
      return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
    }
    return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project: any, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3 rtl:mr-0 rtl:ml-3">
                      <Folder className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 rtl:mr-0 rtl:ml-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="p-4">
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <button className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200">
                    <ExternalLink className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                    {isRTL ? 'عرض' : 'View'}
                  </button>
                  <button className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm rounded-lg transition-colors duration-200">
                    <Github className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                    {isRTL ? 'الكود' : 'Code'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;