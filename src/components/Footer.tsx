import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Footer: React.FC = () => {
  const { currentLanguage, isRTL } = useLanguage();
  const t = content[currentLanguage.code];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300 mb-2">
            {t.footer.rights}
          </p>
          <div className="flex items-center justify-center text-gray-400 text-sm">
            <span>{t.footer.built}</span>
            <Heart className="h-4 w-4 text-red-500 mx-2" />
            <span>
              {isRTL ? 'بواسطة إسلام الحسيني' : 'by Islam Elhosiny'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;