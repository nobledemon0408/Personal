
export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  tags: string[];
  impact?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface Project {
  title: string;
  description: string;
  bullets: string[];
}
