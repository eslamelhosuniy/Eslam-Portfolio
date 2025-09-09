import React from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Hero: React.FC = () => {
  const { currentLanguage, isRTL } = useLanguage();
  const t = content[currentLanguage.code];

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-300/20 dark:bg-blue-600/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-300/20 dark:bg-indigo-600/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              {isRTL ? 'إ.ح' : 'I.E'}
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            {t.hero.name}
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-delay">
            {t.hero.title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-6 max-w-3xl mx-auto animate-fade-in-delay-2">
            {t.hero.subtitle}
          </p>

          {/* University */}
          <p className="text-base text-blue-600 dark:text-blue-400 mb-8 font-medium animate-fade-in-delay-3">
            {t.hero.university}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-4">
          <a
  href="https://drive.google.com/file/d/1aCsVKW8UKAPnvbM-GR3dMGl7G-vU1BY9/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
>
  <Download className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
  {t.hero.cta}
</a>

            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-medium rounded-lg transition-all duration-300"
            >
              {t.hero.viewWork}
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;