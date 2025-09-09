import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const About: React.FC = () => {
  const { currentLanguage, isRTL } = useLanguage();
  const t = content[currentLanguage.code];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image Section */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  {isRTL ? 'إ.ح' : 'I.E'}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 blur-xl -z-10 transform scale-110"></div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-2 space-y-6">
              {t.about.story.map((paragraph: string, index: number) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
                    {paragraph}
                  </p>
                </div>
              ))}

              {/* Highlight Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2026</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {isRTL ? 'سنة التخرج' : 'Graduation Year'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {isRTL ? 'لغات برمجة' : 'Programming Languages'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {isRTL ? 'مشاريع مكتملة' : 'Completed Projects'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;