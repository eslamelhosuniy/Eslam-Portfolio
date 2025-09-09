export const content = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      goals: 'Career Goals',
      contact: 'Contact'
    },
    hero: {
      name: 'Islam Elhosiny Mostafa Gaber',
      title: 'Computer Science Student & Software Engineer',
      subtitle: 'a passionate Software Engineer with a strong focus on Quality',
      university: 'Matrouh University • Expected Graduation 2026',
      cta: 'Download CV',
      viewWork: 'View My Work'
    },
    about: {
      title: 'About Me',
      story: [
        "I'm Islam Elhosiny, a Computer Science student at Matrouh University with a strong passion for software engineering, quality assurance, and full-stack development. What began as curiosity has grown into a career path focused on building reliable, efficient, and user-centered software.",
        "My experience combines academic learning with real-world practice. gaining a solid foundation in solving problems under pressure.",
        "I specialize in software testing, full-stack development, and modern web technologies. I bring a detail-oriented mindset to every project, ensuring both functionality and quality are achieved.",
        "Alongside my technical expertise, I also have experience with ERP systems, social media management, and customer engagement, giving me a broader perspective on how technology impacts businesses and users alike."
      ]
    },
    skills: {
      title: 'Technical Skills',
      categories: {
        programming: {
          title: 'Programming Languages',
          skills: [
            { name: 'C++', level: 'Advanced' },
            { name: 'C#', level: 'Advanced' },
            { name: 'Java', level: 'Intermediate' },
            { name: 'Python', level: 'Intermediate' },
            { name: 'Kotlin', level: 'Basic' }
          ]
        },
        web: {
          title: 'Web Development',
          skills: [
            { name: 'HTML5', level: 'Advanced' },
            { name: 'CSS3', level: 'Advanced' },
            { name: 'JavaScript', level: 'Advanced' },
            { name: 'React JS', level: 'Advanced' },
            { name: '.NET', level: 'Intermediate' }
          ]
        },
        testing: {
          title: 'Software Testing',
          skills: [
            { name: 'Manual Testing', level: 'Advanced' },
            { name: 'Test Automation Basics', level: 'Basic' },
            { name: 'Test Reporting', level: 'Advanced' },
            { name: 'Bug Tracking', level: 'Advanced' }
          ]
        },
        additional: {
          title: 'Additional Skills',
          skills: [
            { name: 'Critical Thinking', level: 'Advanced' },
            { name: 'Problem Solving', level: 'Intermediate' },
          ]
        }
      }
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          title: 'Software Testing Engineer',
          company: 'Fatoorah.sa',
          duration: '2024 - Present',
          description: [
            'Executed detailed manual testing for ERP systems with a focus on quality and performance.',
            'Produced structured bug reports and test documentation aligned with industry standards.',
            'Explored test automation by applying basic scripts and frameworks.',
            'Collaborated with developers to ensure delivery of high-quality, stable releases.'
          ],
          technologies: ['Manual Testing', 'Bug Reporting', 'QA Processes', 'Documentation']
        },
    {
  title: 'IT Member',
  company: 'GDG Damanhour',
  duration: '2022 - Present',
  description: [
    'Collaborated with team members to organize technical events and workshops.',
    'Provided technical support and setup for events including hardware and software configurations.',
    'Contributed to delivering technical training sessions on emerging technologies and tools.',
    'Assisted in managing and maintaining community platforms and communication tools.'
  ],
  technologies: ['Technical Training', 'Event Support', 'Community Engagement']
}

        
      ]
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          title: 'ERP System (Enterprise Resource Planning)',
          description: 'Developed a full ERP solution with React frontend and PHP backend, including billing, file uploads, and user management.',
          technologies: ['React JS', 'PHP', 'MySQL', 'Bootstrap', 'File Management'],
          features: [
            'User authentication & authorization',
            'Billing system with secure file uploads',
            'Inventory management dashboard',
            'Reporting & analytics module',
            'Fully responsive design'
          ],
          status: 'Completed'
        },
        {
  title: 'Legal AI Agent',
  description: 'An AI-powered tool designed to analyze legal documents, extract key information, and support legal decision-making through automation and data insights.',
  technologies: ['Python', 'NLP', 'ٌRAG', 'LangChan'],
  features: [
    'Automated legal document parsing',
    'Named Entity Recognition for legal terms (e.g., parties, dates, clauses)',
    'Case outcome prediction using historical data',
    'Interactive dashboards for legal trend analysis'
  ],
  status: 'Ongoing'
}
,
        {
          title: 'Academic Management System',
          description: 'University project for managing student records, course enrollment, and performance tracking.',
          technologies: ['.Net', 'MySQL', 'MVC', 'Database Design'],
          features: [
            'Student information management',
            'Course registration',
            'Grade tracking & reporting',
            'Admin dashboard'
          ],
          status: 'Completed'
        }
      ]
    },
    goals: {
      title: 'Career Goals & Aspirations',
      intro: 'My professional journey is driven by a vision to join global technology companies and contribute to software that impacts millions worldwide.',
      targets: [
        {
          title: 'Join a FANG Company',
          description: 'Actively preparing for interviews and sharpening my skills to join Meta, Amazon, Netflix, or Google after graduation.',
          timeline: '2026-2027'
        },
        {
          title: 'Remote Software Engineer',
          description: 'Work with international teams on global projects, embracing the flexibility and diversity of remote work.',
          timeline: '2025-2026'
        },
        {
          title: 'Full Stack .NET Developer',
          description: 'Expand expertise in Microsoft’s .NET framework to build enterprise-grade applications and cloud solutions.',
          timeline: '2025-2026'
        },
       {
  title: 'QC Automation Engineer',
  description: 'Focused on developing and maintaining automated test scripts to ensure software reliability, performance, and scalability. Worked closely with development teams to integrate testing into CI/CD pipelines and improve overall product quality.',
  timeline: '2025'
}

      ],
      commitment: 'I am committed to continuous learning, adapting to industry trends, and building solutions that combine technical excellence with real-world value.'
    },
    contact: {
      title: 'Let\'s Connect',
      subtitle: 'Open to opportunities, collaborations, and knowledge sharing in software engineering and testing.',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send. Please try again.'
      },
      info: {
        email: 'elsamelhosiny6@gmail.com',
        location: 'Alexandria, Egypt',
        availability: 'Available for new opportunities'
      }
    },
    footer: {
      rights: '2025 Eslam Elhosiny. All rights reserved.',
      built: 'Built with React & Tailwind CSS'
    }
  },
  ar: {
    navigation: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      skills: 'المهارات',
      experience: 'الخبرات',
      projects: 'المشاريع',
      goals: 'الأهداف المهنية',
      contact: 'التواصل'
    },
    hero: {
      name: 'إسلام الحسيني مصطفى جابر',
      title: 'طالب علوم حاسوب ومهندس برمجيات',
      subtitle: 'شغوف بهندسة البرمجيات واختبار وتطوير البرامج',
      university: 'جامعة مطروح • التخرج 2026',
      cta: 'تحميل السيرة الذاتية',
      viewWork: 'استعرض أعمالي'
    },
    about: {
      title: 'نبذة عني',
      story: [
        'أنا إسلام الحسيني، طالب علوم حاسوب متخصص في جامعة مطروح مع شغف لا يتزعزع بهندسة البرمجيات والابتكار التقني. بدأت رحلتي في التكنولوجيا بالفضول وتطورت إلى التزام بالتميز في تطوير واختبار البرمجيات.',
        'خلال مسيرتي الأكاديمية، اكتسبت خبرة عملية واسعة في صيانة المختبرات والدعم الفني واستكشاف أخطاء الأجهزة. أفتخر بتدريب زملائي الطلاب ومشاركة المعرفة، إيماناً مني بأن التعلم التعاوني ينتج مطورين أقوى.',
        'تمتد خبرتي عبر عدة لغات برمجة وإطارات عمل، مع تركيز خاص على منهجيات اختبار البرمجيات وتطوير التطبيقات الشاملة والتقنيات الحديثة للويب. أتعامل مع كل مشروع بدقة في التفاصيل وعقلية حل المشكلات.',
        'بعيداً عن البرمجة، أحمل خبرة قيمة في أنظمة تخطيط موارد المؤسسات وإدارة وسائل التواصل الاجتماعي والمبيعات - مهارات تمنحني منظوراً فريداً حول كيفية خدمة التكنولوجيا لاحتياجات الأعمال وتجربة المستخدم.'
      ]
    },
    skills: {
      title: 'المهارات التقنية',
      categories: {
        programming: {
          title: 'لغات البرمجة',
          skills: [
            { name: 'C++', level: 'متقدم' },
            { name: 'C#', level: 'متوسط' },
            { name: 'Java', level: 'متوسط' },
            { name: 'Python', level: 'متوسط' },
            { name: 'Kotlin', level: 'مبتدئ' }
          ]
        },
        web: {
          title: 'تطوير الويب',
          skills: [
            { name: 'HTML5', level: 'متقدم' },
            { name: 'CSS3', level: 'متقدم' },
            { name: 'JavaScript', level: 'متوسط' },
            { name: 'React JS', level: 'متوسط' },
            { name: 'Bootstrap', level: 'متوسط' }
          ]
        },
        testing: {
          title: 'اختبار البرمجيات',
          skills: [
            { name: 'الاختبار اليدوي', level: 'متوسط' },
            { name: 'أساسيات الاختبار الآلي', level: 'مبتدئ' },
            { name: 'التعبيرات النمطية', level: 'متوسط' },
            { name: 'تقارير الاختبار', level: 'متوسط' },
            { name: 'تتبع الأخطاء', level: 'متوسط' }
          ]
        },
        additional: {
          title: 'مهارات إضافية',
          skills: [
            { name: 'أنظمة تخطيط الموارد', level: 'متوسط' },
            { name: 'PHP Backend', level: 'مبتدئ' },
            { name: 'إدارة وسائل التواصل', level: 'متقدم' },
            { name: 'المبيعات وعلاقات العملاء', level: 'متوسط' },
            { name: 'الدعم الفني', level: 'متقدم' }
          ]
        }
      }
    },
    experience: {
      title: 'الخبرة المهنية',
      items: [
        {
          title: 'أخصائي اختبار البرمجيات',
          company: 'مشاريع أكاديمية وعمل حر',
          duration: '2023 - حاضر',
          description: [
            'إجراء اختبارات يدوية شاملة لأنظمة تخطيط الموارد مع التركيز على مراقبة الجودة',
            'تطوير تقارير مفصلة للأخطاء ووثائق الاختبار وفقاً لمعايير الصناعة',
            'تنفيذ بروتوكولات أساسية للاختبار الآلي باستخدام إطارات اختبار حديثة',
            'التعاون مع فرق التطوير لضمان جودة وموثوقية البرمجيات'
          ],
          technologies: ['الاختبار اليدوي', 'تقارير الأخطاء', 'عمليات ضمان الجودة', 'توثيق الاختبار']
        },
        {
          title: 'فني مختبر ومدرب',
          company: 'المراكز التعليمية والتدريبية',
          duration: '2022 - حاضر',
          description: [
            'صيانة واستكشاف أخطاء معدات مختبر الحاسوب وتثبيت البرامج',
            'تقديم الدعم الفني للطلاب وأعضاء هيئة التدريس',
            'تدريب الطلاب على أدوات تطوير البرمجيات ومفاهيم البرمجة',
            'إدارة مخزون الأجهزة وتنفيذ ترقيات النظام'
          ],
          technologies: ['استكشاف أخطاء الأجهزة', 'إدارة النظم', 'التدريب التقني', 'صيانة المعدات']
        },
        {
          title: 'مشاريع التطوير الجماعي',
          company: 'العمل التعاوني الجامعي',
          duration: '2023 - 2024',
          description: [
            'المشاركة في مشاريع تطوير مكثفة بواقع 120 ساعة مع فرق من 5 أعضاء',
            'تطوير تطبيقات شاملة باستخدام تقنيات الويب الحديثة',
            'تطبيق منهجيات التطوير السريع وأفضل ممارسات التحكم في النسخ',
            'تسليم حلول برمجية جاهزة للإنتاج في مواعيد نهائية ضيقة'
          ],
          technologies: ['التعاون الجماعي', 'التطوير السريع', 'التطوير الشامل', 'إدارة المشاريع']
        }
      ]
    },
    projects: {
      title: 'المشاريع المميزة',
      items: [
        {
          title: 'نظام تخطيط موارد المؤسسة (ERP)',
          description: 'حل شامل لتخطيط موارد المؤسسة يتميز بواجهة React مع خلفية PHP، يتضمن وحدة فوترة متقدمة مع إمكانيات رفع الملفات ونظام إدارة المستخدمين.',
          technologies: ['React JS', 'PHP', 'MySQL', 'Bootstrap', 'إدارة الملفات'],
          features: [
            'مصادقة المستخدمين والتفويض',
            'نظام فوترة مع وظيفة رفع الملفات',
            'لوحة تحكم إدارة المخزون',
            'وحدة التقارير والتحليلات',
            'تصميم متجاوب لجميع الأجهزة'
          ],
          status: 'مكتمل'
        },
        {
          title: 'مجموعة تحليل البيانات',
          description: 'مجموعة من مشاريع تحليل البيانات تُظهر الكفاءة في التحليل الإحصائي وتصور البيانات وتوليد الرؤى باستخدام أدوات حديثة.',
          technologies: ['Python', 'Pandas', 'NumPy', 'تصور البيانات', 'التحليل الإحصائي'],
          features: [
            'معالجة البيانات الإحصائية',
            'تصورات تفاعلية',
            'تحليل الاتجاهات والتنبؤ',
            'إنتاج تقارير آلية'
          ],
          status: 'قيد التطوير'
        },
        {
          title: 'نظام إدارة أكاديمي',
          description: 'مشروع جامعي تم تطويره بشكل تعاوني لإدارة سجلات الطلاب وتسجيل المقررات وتتبع الأداء الأكاديمي.',
          technologies: ['Java', 'MySQL', 'JavaFX', 'تصميم قواعد البيانات'],
          features: [
            'إدارة معلومات الطلاب',
            'نظام تسجيل المقررات',
            'تتبع وتقرير الدرجات',
            'لوحة تحكم المسؤول'
          ],
          status: 'مكتمل'
        }
      ]
    },
    goals: {
      title: 'الأهداف والتطلعات المهنية',
      intro: 'رحلتي المهنية مدفوعة برؤية واضحة للانضمام إلى شركات التكنولوجيا عالمية المستوى والمساهمة في حلول برمجية مبتكرة تؤثر على ملايين المستخدمين حول العالم.',
      targets: [
        {
          title: 'تطلع للانضمام لشركات FANG',
          description: 'هدفي النهائي هو الانضمام إلى شركة تقنية رائدة مثل فيسبوك (ميتا) أو أمازون أو نتفليكس أو جوجل. أستعد بنشاط للمقابلات التقنية وأبني المهارات اللازمة للتفوق في هذه البيئات التنافسية.',
          timeline: '2026-2027'
        },
        {
          title: 'مهندس برمجيات عن بُعد',
          description: 'أنا شغوف بالعمل مع فرق دولية عن بُعد، والمساهمة في مشاريع برمجية عالمية، واحتضان المرونة والتنوع الذي يوفره العمل عن بُعد في المشهد التقني الحديث.',
          timeline: '2025-2026'
        },
        {
          title: 'مطور Full Stack .NET',
          description: 'توسيع خبرتي في تقنيات مايكروسوفت، خاصة إطار عمل .NET، لأصبح مطوراً شاملاً متعدد الاستخدامات قادراً على بناء تطبيقات مستوى المؤسسات والحلول السحابية.',
          timeline: '2025-2026'
        },
        {
          title: 'متخصص Frontend React',
          description: 'تعميق خبرتي في نظام React البيئي، بما في ذلك الأنماط المتقدمة وإدارة الحالة والمعماريات الحديثة للواجهة الأمامية لإنشاء تجارب مستخدم استثنائية.',
          timeline: '2025'
        }
      ],
      commitment: 'أنا ملتزم بالتعلم المستمر ومواكبة اتجاهات الصناعة وبناء محفظة تُظهر التميز التقني وقدرات حل المشكلات في العالم الحقيقي.'
    },
    contact: {
      title: 'دعنا نتواصل',
      subtitle: 'مستعد لمناقشة الفرص، التعاون في المشاريع، أو مشاركة الرؤى حول التكنولوجيا وتطوير البرمجيات.',
      form: {
        name: 'اسمك',
        email: 'عنوان البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'تم إرسال الرسالة بنجاح!',
        error: 'فشل في إرسال الرسالة. حاول مرة أخرى.'
      },
      info: {
        email: 'islam.elhosiny@email.com',
        location: 'مطروح، مصر',
        availability: 'متاح للفرص'
      }
    },
    footer: {
      rights: '2024 إسلام الحسيني. جميع الحقوق محفوظة.',
      built: 'بُني باستخدام React و Tailwind CSS'
    }
  }
};