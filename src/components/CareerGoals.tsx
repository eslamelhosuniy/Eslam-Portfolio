import React from 'react';
import { Target, Calendar, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const CareerGoals: React.FC = () => {
  const { currentLanguage, isRTL } = useLanguage();
  const t = content[currentLanguage.code];

  return (
    <section id="goals" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.goals.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.goals.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {t.goals.targets.map((target: any, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-blue-600 rounded-lg mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {target.title}
                  </h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                    {target.timeline}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {target.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-yellow-300 mr-2 rtl:mr-0 rtl:ml-2" />
            <h3 className="text-2xl font-bold">
              {isRTL ? 'التزامي' : 'My Commitment'}
            </h3>
            <Star className="h-8 w-8 text-yellow-300 ml-2 rtl:ml-0 rtl:mr-2" />
          </div>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            {t.goals.commitment}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerGoals;