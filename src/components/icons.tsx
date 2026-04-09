import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'
export type IconName = keyof typeof icons;

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiGithub,
    SiFramer,
    SiExpress,
    SiPrisma,
    SiMongodb,
    SiPostgresql,
    SiRadixui,
    SiFirebase 
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const icons = {
    react: <SiReact />,
    next: <RiNextjsFill />,
    shadcnUi: <SiRadixui />,
    tailwindCSS: < SiTailwindcss />,
    typescript: <SiTypescript />,
    html: <SiHtml5 />,
    css: < SiCss3 />,
    javascript: <SiJavascript />,
    firebase: < SiFirebase />,
    framerMotion: <SiFramer />,
    github: <SiGithub />,
    node: <FaNodeJs />,
    express: <SiExpress />,
    prisma: <SiPrisma />,
    mongoDB: <SiMongodb />,
    postgreSQL: <SiPostgresql />,
}

export const Icons = () => {

    return (
        <div className="flex gap-3">
            <a
                rel="noopener noreferrer"
                target='_blank'
                href="https://github.com/walacer72?tab=repositories">
                <BiLogoGithub className='w-8 h-8 md:h-10 md:w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-1 md:p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
            </a>

            <a
                rel="noopener noreferrer"
                target='_blank'
                href="https://www.linkedin.com/in/walace-oliveira-dev/">
                <BiLogoLinkedin className='w-8 h-8 md:h-10 md:w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-1 md:p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
            </a>

            <a
                rel="noopener noreferrer"
                target='_blank'
                href="https://www.instagram.com/walace_dev/?utm_source=qr&igsh=d3J0NXc0MzMxajA%3D#">
                <BiLogoInstagram className='w-8 h-8 md:h-10 md:w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-1 md:p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
            </a>

        </div>
    )
}