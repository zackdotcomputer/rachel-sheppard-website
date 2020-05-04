export interface ResearchProject {
  title: string;
  dates?: string;
  description?: string;
  image: string;
}

export interface ResearchProps {
  title: string;
  researchProjects: ResearchProject[];
}
