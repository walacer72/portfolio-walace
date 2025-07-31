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

        <li className={`relative w-full rounded-lg min-h-[250px] text-slate-400 shadow-[0_0_10px_rgba(255,255,255,0.1)] p-4 transition-all duration-300 border border-stone-950 hover:border-stone-800 md:hover:scale-105`}>

            <div className="flex flex-col h-full gap-4 justify-between">

                <div className="flex flex-col z-0">
                    <div className="flex justify-between items-center pb-4">
                        <h3 className='font-semibold text-lg'>{item.name}</h3>
                        <div className="flex justify-center items-center gap-2 md:gap-4 text-stone-800">
                            {item.tec.map((item, index) => (
                                <div key={index} className="">{item}</div>
                            ))}
                        </div>
                    </div>

                    {item.pc && 
                        <Image className='hidden mg:block lg:block rounded-lg object-cover w-full' src={item.pc} alt={item.name} />
                    }


                    {item.smart &&
                        <Image
                            className={`$md:hidden lg:hidden rounded-lg`}
                            src={item.smart} alt={item.name}
                        />
                    }


                </div>



                <div className="flex gap-5 text-xs mt-2 justify-between text-slate-400">
                    <button className='hover:bg-[rgba(100,100,100,0.1)] hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-200 py-2 px-4 rounded-full hover:opacity-80'>
                        <a href={item.demo} target='_blank'>Demo</a>
                    </button>
                    <button className='hover:bg-[rgba(0,0,0,0.9)] transition-all duration-200 py-2 px-4 rounded-full hover:opacity-80'>
                        <a href={item.github} target='_blank'>GitHub</a>
                    </button>
                    <button
                        onMouseEnter={() => setDescriptShow(true)}
                        onMouseLeave={() => setDescriptShow(false)}
                        className="transition-all duration-200 py-2 px-4 rounded-full hover:opacity-50 text-sky-800">
                        Ver mais
                    </button>
                </div>

            </div>

            <div className={`absolute rounded-lg bg-zinc-950 top-0 bottom-16 transition-all ease duration-200 right-0 left-0 z-40 border-none w-full flex flex-col gap-4 p-4
                ${descriptShow ? 'opacity-100' : 'opacity-0'}  
            `}>
                <h3 className='font-semibold text-lg text-slate-400'>{item.name}</h3>
                <p className='text-xs tracking-wider text-slate-500'>{item.description}</p>
                <p className="text-xs tracking-wider text-slate-400">{item.tecnologias}</p>
            </div>

        </li>

    )
}

export default ProjectItem;
