'use client'

import { personalProjects, academicProjects } from '@/data';
import React, { useState } from 'react'
import ProjectItem from '@/components/projectItem';

type Tab = 'tab1' | 'tab2';

const Project = () => {


  const [tab, setTab] = useState<Tab>('tab1');

  return (

    <section id='Project' className='min-h-screen w-full flex justify-center items-center'>
      <div className="w-full h-full max-w-6xl flex flex-col items-center justify-center gap-2 p-4 mt-28 md:p-0">

        <h1 className='bg-gradient-to-r from-sky-800 to-sky-200 bg-clip-text font-semibold text-transparent text-4xl'>
          Projects
        </h1>

        <div className="flex justify-center gap-4 items-center text-slate-400 mt-4">
          <div
            onClick={() => setTab('tab1')}
            className={`py-2 px-6 rounded-full cursor-pointer transition-colors ease-in-out duration-300
            ${tab === 'tab1' ? 'bg-[rgba(0,0,0,0.9)]' : 'bg-transparent'}
            `}>Pessoal
          </div>

          <div
            onClick={() => setTab('tab2')}
            className={`py-2 px-6 rounded-full cursor-pointer transition-colors ease-in-out duration-300
            ${tab === 'tab2' ? 'bg-[rgba(0,0,0,0.9)]' : 'bg-transparent'}
            `}>Acadêmico
          </div>
        </div>

        <div className="w-full min-h-[500px] overflow-hidden mt-8 flex-grow">
          {/* TAB 1 */}
          <div
            className={`transition-all duration-500 ease-in-out w-full
            ${tab === 'tab1' ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 -translate-y-4 h-0 overflow-hidden'}
            `}>

            <p className='text-sm text-slate-500 max-w-5xl text-center mx-auto px-2'>
              Conheça alguns dos meus projetos pessoais desenvolvidos fora do ambiente acadêmico, aplicando tecnologias como React, Next.js, Tailwind CSS, HTML, CSS, JavaScript, shadcn-ui e consumo de APIs.
            </p>

            <ul className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 px-12 md:px-4 '>
              {personalProjects.map((item, index) => (
                <ProjectItem item={item} key={index} />
              ))}
            </ul>
          </div>

          {/* TAB 2 */}
          <div
            className={`transition-all duration-500 ease-in-out w-full
            ${tab === 'tab2' ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 -translate-y-4 h-0 overflow-hidden'}
            `}>

            <p className='text-sm text-slate-500 max-w-4xl text-center mx-auto px-2'>
              Confira alguns dos projetos que desenvolvi ao longo da minha jornada como estudante de desenvolvimento web — cada um foi passo importante na construção do meu conhecimento!
            </p>

            <ul className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 px-12 md:px-4'>
              {academicProjects.map((item, index) => (
                <ProjectItem item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>


      </div>
    </section>







  )
}

export default Project;