export enum IconType {
  diploma = "diploma",
  trophy = "trophy",
  magnifier = "magnifier",
  mountain = "mountain",
  microphone = "microphone",
  handshake = "handshake",
  teacher = "teacher",
  leaf = "leaf",
  lovehand = "lovehand"
}

export interface CVBlock {
  icon: IconType;
  title: string;
  caveat?: string;
  text?: string;
}

export interface CVProps {
  title: string;
  cvPDF?: string;
  cvBlocks: CVBlock[];
}
