'use client'

import { Project } from "@/projectType";
import Image from "next/image";
import { useState } from "react";

type Props = {
    item: Project;
}

const ProjectItem = ({ item }: Props) => {

    const [descriptShow, setDescriptShow] = useState(false);

    return (

        <li className={`relative w-full rounded-lg min-h-[300px] md:min-h-[270px] text-primary-foreground shadow-[0_0_10px_rgba(100,100,100,0.5)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] bg-background p-4 transition-all duration-300 dark:border dark:border-stone-950 hover:border-stone-800 md:hover:scale-105`}>

            <div className="flex flex-col h-full gap-4 justify-between">

                <div className="flex flex-col z-0">
                    <div className="flex justify-between items-center pb-4">
                        <h3 className='font-semibold text-base md:text-lg'>{item.name}</h3>
                        <div className="flex justify-center items-center gap-2 md:gap-4 text-card">
                            {item.tec.map((item, index) => (
                                <div key={index} className="">{item}</div>
                            ))}
                        </div>
                    </div>

                    {item.pc &&
                        <Image className='hidden md:block lg:block rounded-lg object-cover w-full border-4 border-zinc-300 dark:border-none' src={item.pc} alt={item.name} />
                    }


                    {item.smart ? (
                        <Image
                            className={`$md:hidden lg:hidden rounded-lg border-4 border-zinc-300 dark:border-none`}
                            src={item.smart} alt={item.name}
                        />
                    ) : item.pc ? (
                        <Image
                            className='md:hidden lg:hidden rounded-lg object-cover w-full border-4 border-zinc-300 dark:border-none'
                            src={item.pc} alt={item.name} />
                    ) : null}


                </div>


                <div className="flex gap-5 text-xs mt-2 justify-between text-primary-foreground font-medium">
                    <a
                        className="transition ease-in duration-200 py-2 px-4 inline-block cursor-pointer border border-transparent hover:opacity-80 [transform:translateZ(0)]"
                        href={item.demo}
                        target="_blank"
                    >
                        Demo
                    </a>

                    <a
                        className="transition ease-in duration-200 py-2 px-4 inline-block cursor-pointer border border-transparent hover:opacity-80 [transform:translateZ(0)]"
                        href={item.github}
                        target="_blank"
                    >
                        GitHub
                    </a>

                    <a
                        onMouseEnter={() => setDescriptShow(true)}
                        onMouseLeave={() => setDescriptShow(false)}
                        className="transition ease-in duration-200 py-2 px-4 inline-block cursor-pointer border border-transparent text-sky-800 hover:opacity-80 [transform:translateZ(0)]"
                    >
                        Explorar
                    </a>
                </div>



            </div>

            <div className={`absolute rounded-lg bg-background top-0 bottom-16 transition-all ease duration-200 right-0 left-0 z-40 border-none w-full flex flex-col gap-4 p-4
                ${descriptShow ? 'opacity-100' : 'opacity-0'}  
            `}>
                <h3 className='font-semibold text-lg text-primary-foreground/60'>{item.name}</h3>
                <p className='text-xs tracking-wider text-primary-foreground'>{item.description}</p>
                <p className="text-xs tracking-wider text-primary-foreground/60">{item.tecnologias}</p>
            </div>

        </li>

    )
}

export default ProjectItem;
