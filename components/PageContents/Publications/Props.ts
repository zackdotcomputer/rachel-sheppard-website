export interface Publication {
  title: string;
  authors?: string;
  description?: string;
  fileCopy?: string;
}

export interface PublicationProps {
  title: string;
  scholarLink?: string;
  publicationsProjects: Publication[];
}
