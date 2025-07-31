import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export type Project = {
  demo: string;
  github: string;
  pc: string | StaticImageData | null; 
  smart?: string | StaticImageData | null; 
  name: string;
  description: string;
  tecnologias: string;
  tec: ReactElement[];
};