import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  name: 'Selemun Abrha Teklu',
  title: 'AI/ML Researcher & Full-Stack Developer',
  subtitle: 'Building domain-adapted NLP systems for low-resource languages and production web applications',
  profileImage: '/Solomon.jpg',
  cvLink: '/cv.pdf',

  stats: [
    { label: 'Current CGPA', value: '3.87/4.00' },
    { label: 'Credits Completed', value: '190' },
    { label: 'MT BLEU Improvement', value: '+1835%' },
    { label: 'Certifications', value: '10+' },
  ],

  about: `I'm a Computer Science and Engineering (BSc.) Graduate at Mekelle Institute of Technology, with a strong focus on Artificial Intelligence, Machine Learning, and Natural Language Processing. My work centers on applying ML and deep learning to real-world problems, particularly in data analytics and NLP for low-resource languages.

I have experience as a Machine Learning Researcher at Lesan AI, where I conducted systematic error analysis of English-Tigrina machine translation systems in high-impact domains. I also worked as a Web Developer at MeMi Trading PLC, contributing to a referral microservice for an e-commerce platform, and completed a Telecom Network internship at Huawei.

Beyond research, I'm actively involved in community service as the General Secretary of Araya Zerihun Charity Club, a volunteer teacher for summer coding camps, and a Digital Signal Processing lab tutor. I'm proficient in Python, PyTorch, and full-stack web development, with strengths in both technical research and collaborative teamwork.`,

  work: [
    {
      id: 1,
      title: 'NLLB Healthcare MT (Thesis)',
      description: 'Fine-tuned NLLB-200-distilled-600M using LoRA with 1,837 clinical sentence pairs + 3,000 back-translated pairs. English→Tigrigna BLEU improved from 1.64 to 31.75 (+1835%); Tigrigna→English BLEU from 10.33 to 18.19 (+76%). Deployed on Hugging Face Spaces.',
      tags: ['NLLB', 'LoRA', 'Machine Translation', 'Healthcare'],
      link: ' https://huggingface.co/spaces/Mulata12/domain-adaptive-finetuned-eng-tig-medlingua-ai',
    },
    {
      id: 2,
      title: 'NLP Geez Chatbot',
      description: 'Developed a Geez-language conversational chatbot by curating and annotating ~5,000 QA pairs. Fine-tuned a multilingual mT5 transformer using LoRA/PEFT for efficient training under limited resources.',
      tags: ['NLP', 'mT5', 'LoRA', 'Python'],
      link: 'https://github.com/selemun-dev/geez-chatbot',
    },
    {
      id: 3,
      title: 'Whisper ASR for Tigrinya (QLoRA)',
      description: 'Curated a 10,000+ sample multilingual speech dataset with a Ge\'ez-aware normalization pipeline. Fine-tuned Whisper ASR using QLoRA, reducing WER from 1.133 to 0.375 while updating only a small fraction of parameters.',
      tags: ['Whisper', 'QLoRA', 'ASR', 'PEFT'],
    },
    {
      id: 4,
      title: 'Systematic MT Error Analysis Research (Lesan AI)',
      description: 'Comparative error analysis of Google, Microsoft, Meta NLLB, and Lesan for English-Tigrina MT. Identified mistranslation (44.79%) and untranslated content (34.38%) as dominant errors using BLEU, chrF++, TER, COMET, and MQM-DQF.',
      tags: ['Machine Translation', 'Evaluation', 'Low-Resource NLP'],
    },
    {
      id: 5,
      title: 'Zemen Bazaar Referral Microservice',
      description: 'Contributed to the design, development, and testing of a Referral Microservice integrated into Zemen Bazaar e-commerce platform. Built responsive frontend components with Next.js and Tailwind CSS.',
      tags: ['Next.js', 'Tailwind CSS', 'REST APIs'],
      link: 'https://www.zemenbazaar.com',
    },
  ],

  experience: [
    {
      id: 1,
      role: 'Machine Learning Researcher (Remote)',
      company: 'Lesan AI — Berlin, Germany',
      period: 'Oct 2025 – Jan 2026',
      description: 'Conducted comparative error analysis of Google, Microsoft, Meta NLLB, and Lesan for English-Tigrina MT across healthcare and legal domains. Combined BLEU, chrF++, TER, COMET, and MQM-DQF human evaluation. Identified critical medical and legal terminology errors, highlighting limitations of general-purpose MT.',
    },
    {
      id: 2,
      role: 'Telecom Network & Base Station Maintenance Intern',
      company: 'Huawei — Alkan CIT (Sub-con) — Mekelle',
      period: 'Jan 2025 – Apr 2026',
      description: 'Performed hands-on inspection, operation, and maintenance of mobile base station components at Safaricom sites. Collaborated with the Alkan Tigray maintenance team on end-to-end site workflows and observed remote network monitoring via the NOC.',
    },
    {
      id: 3,
      role: 'Web Developer',
      company: 'MeMi Trading PLC — Mekelle',
      period: 'Jul 2025 – Nov 2025',
      description: 'Coordinated the referral project team and contributed to the design, development, and testing of a Frontend Referral Microservice integrated into Zemen Bazaar. Built responsive frontend components using Next.js and Tailwind CSS.',
    },
    {
      id: 4,
      role: 'BSc, Computer Science & Engineering',
      company: 'Mekelle University – Mekelle Institute of Technology',
      period: 'Graduating June 2026',
      description: 'Final grade: 3.87/4.00. 190 credits. Thesis: Parameter Efficient Fine-Tuning of NLLB for Bidirectional Tigrigna-English Healthcare Machine Translation with Back Translation and RAG.',
    },
  ],

  skills: [
    { name: 'AI/ML & NLP', skills: ['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'Scikit-learn', 'LoRA/PEFT', 'Model Fine-Tuning', 'NumPy', 'Pandas'] },
    { name: 'Web Development', skills: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'REST APIs', 'PostgreSQL', 'JavaScript'] },
    { name: 'Programming Languages', skills: ['Python', 'C', 'C++', 'JavaScript', 'Verilog', 'VHDL'] },
    { name: 'Tools & Systems', skills: ['Git/GitHub', 'Docker', 'VS Code', 'Jupyter', 'Google Colab', 'MATLAB', 'Cisco Packet Tracer'] },
  ],

  volunteer: [
    {
    id: 1,
    role: 'Co-Founder',
    organization: 'MIT AI Club — Mekelle Institute of Technology',
    period: 'Sep 2025 – Present',
    description:
      'Co-founded a 73-member, cross-department AI/ML club spanning Computer Science, Electrical Engineering, Material Science, and Chemical Engineering. Mentored interdisciplinary project teams; 5+ AI/ML projects completed to date.',
    images: ['/volunteer/mit-AI-club.jpg'],
  },
    {
      id: 2,
      role: 'General Secretary & Volunteer',
      organization: 'Araya Zerihun Charity Club',
      period: 'Oct 2024 – Jun 2026',
      description: 'Led and contributed to community service initiatives by coordinating aid distribution,education, organizing fundraising efforts, and promoting volunteer engagement to support vulnerable groups due to war.',
      images: ['/volunteer/charity-1.jpg'],
    },
    {
      id: 3,
      role: 'Volunteer Teacher',
      organization: 'U.S. Embassy Mekelle American Corner Summer Coding Camp 2025',
      period: 'Jul – Aug 2025',
      description: 'Mentored and taught students aged 14–18 in coding, mathematics, and gaming.',
      images: ['/volunteer/coding-camp-1.jpg'],
    },
    {
      id: 4,
      role: 'Digital Signal Processing (DSP) Lab Tutor',
      organization: 'Mekelle University – MIT',
      period: 'Sep 2025 – Jan 2026',
      description: 'Assisted and guided 3rd-year Computer Science and Engineering students during DSP laboratory sessions, providing technical support in MATLAB-based practical exercises.',
      images: ['/volunteer/dsp-lab-1.jpg'],
    },
    {
      id: 5,
      role: 'Volunteer',
      organization: 'SNV Netherlands development organization – Mekelle regional office Office',
      period: 'May 2024 – Apr 2025',
      description: 'Supported digital data collection, analysis, monitoring, reporting, documentation, and community outreach. Facilitated digital skills training and community sessions.',
      images: ['/volunteer/snv-1.jpg'],
    },
    {
      id: 6,
      role: 'Summer Tutorial Program Teacher',
      organization: 'Tigray Development Association (TDA)',
      period: 'Jul – Aug 2025',
      description: 'Taught Mathematics and Introduction to Computer Science to Grade 8–12 students for post war recovery.',
      images: ['/volunteer/tda-1.jpg'],
    },
  ],

  certifications: [
    { id: 1, title: 'Machine Learning Specialization', issuer: 'Coursera – Stanford University', date: '2025', link: 'https://www.coursera.org/account/accomplishments/specialization/MELPE1CMPAPR' },
    { id: 2, title: 'Deep Learning Specialization', issuer: 'Coursera – DeepLearning.AI', date: '2026', link: 'https://www.coursera.org/account/accomplishments/specialization/RHQ1HDTT2ZTZ' },
    { id: 3, title: 'Natural Language Processing Specialization', issuer: 'Coursera – DeepLearning.AI', date: '2026', link: 'https://www.coursera.org/account/accomplishments/specialization/P9AJQ904P5YE' },
    { id: 4, title: 'Data Analytics Professional Certificate', issuer: 'Coursera – DeepLearning.AI', date: '2026', link: 'https://www.coursera.org/account/accomplishments/professional-cert/VQ5NWELRTI1F' },
    { id: 5, title: 'PyTorch for Deep Learning Specialization', issuer: 'Coursera – DeepLearning.AI', date: '2026', link: 'https://www.coursera.org/account/accomplishments/professional-cert/K6E0I5H8EVJL' },
    { id: 6, title: 'Generative AI with LLMs', issuer: 'Coursera – AWS', date: '2025', link: 'https://www.coursera.org/account/accomplishments/verify/ATN4QNF94UOT' },
    { id: 7, title: 'Google Project Management Specialization', issuer: 'Coursera – Google', date: '2026', link: 'https://www.coursera.org/account/accomplishments/professional-cert/6P2QM1I6TE9P' },
    { id: 8, title: 'CCNA: Introduction to Networks', issuer: 'Cisco Netacad', date: '2025', link: 'https://www.credly.com/earner/earned/badge/dbf2e4f9-4637-4c05-92d9-5ef149c5a8c5' },
    { id: 9, title: 'CCNA: Switching, Routing & Wireless Essentials', issuer: 'Cisco Netacad', date: '2025', link: 'https://www.credly.com/earner/earned/badge/e6ff2081-5d41-42de-9829-e16be3e9fb0e' },
    { id: 10, title: 'CCNA: Enterprise Networking, Security, and Automation', issuer: 'Cisco Netacad', date: '2026', link: 'https://www.credly.com/earner/earned/badge/10b62a42-a317-4592-9364-901abd1e5b20' },
    { id: 11, title: 'Udacity: Programming Fundamentals', issuer: 'Udacity', date: '2024', link: 'https://www.udacity.com/certificate/e/20a0c3d0-a320-11ef-b5eb-dbfdae44595b' },
    { id: 12, title: 'Udacity: AI Fundamentals', issuer: 'Udacity', date: '2024', link: 'https://www.udacity.com/certificate/e/bbb085d0-9f93-11ef-ba86-934edbe38984' },
    
  ],

  gallery: [
    { id: 1, src: '/volunteer/charity-1.jpg', alt: 'Charity club aid distribution', category: 'Volunteering' },
    { id: 2, src: '/volunteer/coding-camp-1.jpg', alt: 'Summer coding camp teaching', category: 'Teaching' },
    { id: 3, src: '/volunteer/dsp-lab-1.jpg', alt: 'DSP lab tutoring session', category: 'Tutoring' },
    { id: 4, src: '/volunteer/huawei-site.jpg', alt: 'Huawei base station maintenance', category: 'Internship' },
    { id: 5, src: '/volunteer/snv-1.jpg', alt: 'SNV community outreach', category: 'Volunteering' },
    { id: 6, src: '/volunteer/tda-1.jpg', alt: 'TDA summer tutorial program', category: 'Teaching' },
    { id: 7, src: '/volunteer/coding-camp-2.jpg', alt: '', category: 'Teaching' }
  ],

  contact: {
    email: 'selemun.abrha.teklu@gmail.com',
    institutionalEmail: 'mitur12212@mu.edu.et',
  },
};
