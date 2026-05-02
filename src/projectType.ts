import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import { IconName } from './components/icons';

type Tec = 'html'|'css'|'javascript'|'react'|'next'|'shadcnUi'|'tailwindCSS'|'typescript'|'firebase';

export type Project = {
  demo: string;
  github: string;
  pc: string | StaticImageData | null; 
  smart?: string | StaticImageData | null; 
  name: string;
  description: string;
  alt: string;
  tecnologias: string;
  tec: Tec[];
};

export type ProjectSkills = {
  tec: IconName;
  pct: number;
}