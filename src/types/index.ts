export interface Language {
  code: 'en' | 'ar';
  name: string;
  direction: 'ltr' | 'rtl';
}

export interface Theme {
  mode: 'light' | 'dark';
}

export interface Content {
  en: {
    [key: string]: any;
  };
  ar: {
    [key: string]: any;
  };
}

export interface Skill {
  name: string;
  category: string;
  level?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features?: string[];
  status: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}