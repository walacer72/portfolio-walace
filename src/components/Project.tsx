'use client'

import { personalProjects, academicProjects } from '../data/dataProject';
import React, { useState } from 'react'
import ProjectItem from './projectItem';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

type Tab = 'tab1' | 'tab2';

const Project = () => {

  // FRAMER MOTION
  const [tab, setTab] = useState<Tab>('tab1');

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (

    <section id='Projects' className='min-h-[calc(100vh-44px)] md:min-h-screen lg:min-h-screen w-full flex justify-center items-center'>
      <div className="h-full max-w-6xl flex flex-col items-center justify-center gap-2 p-4 mt-28 md:p-0">

        <motion.h1
          className='bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text font-semibold text-transparent text-4xl'
          ref={ref}
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projetos
        </motion.h1>

        <div className="flex justify-center gap-4 items-center text-slate-400 mt-4">
          <div
            onClick={() => setTab('tab1')}
            className={`py-2 px-6 rounded-full cursor-pointer text-primary transition-colors ease-in-out duration-300
            ${tab === 'tab1' ? 'bg-zinc-200 dark:bg-[rgba(0,0,0,0.9)]' : 'bg-transparent'}
            `}>Pessoal
          </div>

          <div
            onClick={() => setTab('tab2')}
            className={`py-2 px-6 rounded-full cursor-pointer text-primary transition-colors ease-in-out duration-300
            ${tab === 'tab2' ? 'bg-zinc-200 dark:bg-[rgba(0,0,0,0.9)] ' : 'bg-transparent'}
            `}>Acadêmico
          </div>
        </div>

        <div className="w-full min-h-[500px] overflow-hidden mt-8 flex-grow">
          {/* TAB 1 */}
          <div
            className={`transition-all duration-500 ease-in-out w-full
            ${tab === 'tab1' ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 -translate-y-4 h-0 overflow-hidden'}
            `}>

            <p className='text-sm text-primary-foreground max-w-[350px] md:max-w-4xl text-center mx-auto px-2'>
              Conheça alguns dos meus projetos pessoais desenvolvidos fora do ambiente acadêmico, aplicando tecnologias como React, Next.js, Tailwind CSS, HTML, CSS, JavaScript, shadcn-ui e consumo de APIs.
            </p>

            <ul className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mb-4 px-8 md:px-4 '>
              {personalProjects.map((item, index) => (
                <ProjectItem item={item} key={index} index={index} />
              ))}
            </ul>
          </div>

          {/* TAB 2 */}
          <div
            className={`transition-all duration-500 ease-in-out w-full
            ${tab === 'tab2' ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 -translate-y-4 h-0 overflow-hidden'}
            `}>

            <p className='text-sm text-primary-foreground max-w-[350px] md:max-w-4xl text-center mx-auto px-2'>
              Confira alguns dos projetos que desenvolvi ao longo da minha jornada como estudante de desenvolvimento web — cada um foi passo importante na construção do meu conhecimento!
            </p>

            <ul className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mb-4 px-8 md:px-4'>
              {academicProjects.map((item, index) => (
                <ProjectItem item={item} key={index} index={index} />
              ))}
            </ul>
          </div>
        </div>


      </div>
    </section>







  )
}

export default Project;