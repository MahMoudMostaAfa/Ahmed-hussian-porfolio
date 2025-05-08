export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export interface ExperienceItem {
  title: string;
  company: string;
  description: string;
  period?: string;
}

export interface EducationItem {
  institution: string;
  faculty: string;
  section: string;
  year: string;
  period: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  dateOfBirth: string;
  nationality: string;
  location: string;
  phone: string;
  email: string;
}