import React from 'react';
import { Code, Globe, TestTube, Plus } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Skills: React.FC = () => {
  const { currentLanguage, isRTL } = useLanguage();
  const t = content[currentLanguage.code];

  const skillIcons = {
    programming: Code,
    web: Globe,
    testing: TestTube,
    additional: Plus
  };

  const getLevelColor = (level: string) => {
    const levelMap = {
      'Advanced': 'bg-green-500',
      'Intermediate': 'bg-yellow-500',
      'Basic': 'bg-blue-500',
      'متقدم': 'bg-green-500',
      'متوسط': 'bg-yellow-500',
      'مبتدئ': 'bg-blue-500'
    };
    return levelMap[level as keyof typeof levelMap] || 'bg-gray-500';
  };

  const getLevelWidth = (level: string) => {
    const widthMap = {
      'Advanced': 'w-5/6',
      'Intermediate': 'w-3/5',
      'Basic': 'w-2/5',
      'متقدم': 'w-5/6',
      'متوسط': 'w-3/5',
      'مبتدئ': 'w-2/5'
    };
    return widthMap[level as keyof typeof widthMap] || 'w-1/2';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(t.skills.categories).map(([categoryKey, category], index) => {
            const Icon = skillIcons[categoryKey as keyof typeof skillIcons];
            
            return (
              <div
                key={categoryKey}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4 rtl:mr-0 rtl:ml-4">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill: any, skillIndex: number) => (
                    <div
                      key={skillIndex}
                      className="animate-fade-in-right"
                      style={{ animationDelay: `${index * 150 + skillIndex * 50}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full text-white ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getLevelColor(skill.level)} transition-all duration-700 ${getLevelWidth(skill.level)}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;