'use client'

import Image from "next/image";
import { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Project } from "@/projectType";
import { icons } from "./icons";


type Props = {
    item: Project;
    index: number;
}

const ProjectItem = ({ item, index }: Props) => {

    const [descriptShow, setDescriptShow] = useState(false);


    return (

        <motion.div
            key={index} // ✅ chave única
            className={`relative w-full rounded-lg min-h-[300px] md:min-h-[270px] text-primary-foreground shadow-[0_0_10px_rgba(100,100,100,0.5)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] bg-background p-4 transition-all duration-300 dark:border dark:border-stone-950 hover:border-stone-800 md:hover:scale-105`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
        >


            <div className="flex flex-col h-full gap-4 justify-between">

                <div className="flex flex-col z-0">
                    <div className="flex justify-between items-center pb-4">
                        <h3 className='font-semibold text-base md:text-lg'>{item.name}</h3>
                        <div className="flex justify-center items-center gap-2 md:gap-4 text-card">
                            {item.tec.map((tech) => (
                                <div
                                    aria-label={tech}
                                    key={tech}>
                                    {icons[tech]}
                                </div>
                            ))}
                        </div>
                    </div>

                    {item.pc && (
                        <Image
                            src={item.pc}
                            alt={item.alt}
                            width={400}
                            height={250}
                            className="hidden md:block w-full h-auto rounded-lg object-cover border-4 border-zinc-300 dark:border-none"
                        />
                    )}


                    {item.smart ? (
                        <Image
                            src={item.smart}
                            alt={item.alt}
                            width={300}
                            height={300}
                            className="md:hidden w-full h-auto rounded-lg border-4 border-zinc-300 dark:border-none"
                        />
                    ) : item.pc ? (
                        <Image
                            src={item.pc}
                            alt={item.alt}
                            width={400}
                            height={250}
                            className="md:hidden w-full h-auto rounded-lg object-cover border-4 border-zinc-300 dark:border-none"
                        />
                    ) : null}


                </div>


                <div className="flex gap-5 text-xs mt-2 justify-between text-primary-foreground font-medium">
                    <a
                        className="transition ease-in duration-200 py-2 px-4 inline-block cursor-pointer border border-transparent hover:opacity-80 [transform:translateZ(0)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2"
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir demo do projeto (abre em nova aba)"
                    >
                        Demo
                    </a>

                    <a
                        className="transition ease-in duration-200 py-2 px-4 inline-block cursor-pointer border border-transparent hover:opacity-80 [transform:translateZ(0)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2"
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir repositorio github (abre em nova aba)"
                    >
                        GitHub
                    </a>

                    <button
                        onMouseEnter={() => setDescriptShow(true)}
                        onMouseLeave={() => setDescriptShow(false)}
                        onFocus={() => setDescriptShow(true)}
                        onBlur={() => setDescriptShow(false)}
                        className="transition ease-in duration-200 py-2 px-4 inline-block cursor-pointer border border-transparent text-sky-800 hover:opacity-80 [transform:translateZ(0)]"
                    >
                        Explorar
                    </button>
                </div>



            </div>

            <div className={`absolute rounded-lg bg-background top-0 bottom-16 transition-all ease duration-200 right-0 left-0 z-40 border-none w-full flex flex-col gap-4 p-4
                ${descriptShow ? 'opacity-100' : 'opacity-0'}  
            `}>
                <h3 className='font-semibold text-lg text-primary-foreground/60'>{item.name}</h3>
                <p className='text-xs tracking-wider text-primary-foreground'>{item.description}</p>
                <p className="text-xs tracking-wider text-primary-foreground/60">{item.tecnologias}</p>
            </div>


        </motion.div>
    )
}

export default ProjectItem;
