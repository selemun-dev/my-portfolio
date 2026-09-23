// src/types/index.ts

export interface WorkItem {
  id: number;
  title: string;
  description: string;
  metric?: string;        // ← optional (only some items have it)
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

export interface VolunteerItem {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  images?: string[];
}

export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  profileImage: string;
  cvLink: string;
  stats: StatItem[];
  about: string;
  work: WorkItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  volunteer: VolunteerItem[];
  certifications: CertificationItem[];
  gallery: GalleryImage[];
  contact: {
    email: string;
    institutionalEmail: string;
  };
}
