export interface WorkItem {
  id: number;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}


export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  about: string;
  work: WorkItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  contact: {
    email: string;
    institutionalEmail: string;
  };
}

