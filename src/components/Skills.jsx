'use client'

import { Habilidades, Tecnologias, Stacks } from "../data";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


const Skills = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref1, ref2,
    offset: ["start end", "end start"],
  });


  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <div id='Skills' className='w-screen flex items-center justify-center min-h-[calc(100vh-44px)] md:min-h-screen lg:min-h-screen md:mt-0 lg:mt-0 py-28 px-4 md:p-6 lg:p-10 '>

      <div className="h-full w-full max-w-7xl text-slate-400 flex flex-col items-center mt-8 justify-center md:gap-12 p-4 md:p-6 lg:p-10">

        <div className="flex flex-col justify-center items-center gap-8 md:mt-0">

          <motion.h1
            className='bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text text-4xl font-semibold text-transparent'
            ref={ref1}
            style={{ y, opacity }}
          >
            Hard Skills
          </motion.h1>

          <h3 className='md:hidden text-sm text-primary-foreground text-center'>Desenvolvo aplicações web full stack, com experiência em front-end utilizando HTML, CSS, JavaScript, React, TypeScript e Tailwind. No back-end, trabalho com Node.js e Express na criação de APIs, integração com bancos de dados (PostgreSQL e MongoDB) e uso de Prisma. Também utilizo GitHub, Zustand e faço manipulação de imagens com Multer e Sharp.</h3>


          <h3 className='hidden md:flex text-sm text-primary-foreground text-center'>Possuo conhecimentos em desenvolvimento front-end, com experiência no uso de HTML, CSS, JavaScript e frameworks modernos como React e Tailwind CSS, aplicando boas práticas de codificação, performance e usabilidade.</h3>

          <ul className="w-full grid md:hidden grid-cols-3 lg:grid-cols-4 gap-4 md:mt-4">

            {Stacks.map((item, index) => (
              <motion.li
                key={item.tec} // ✅ chave única
                className="relative text-primary group px-2 transition-all duration-300 ease-in font-medium shadow-sm shadow-stone-700 rounded-full overflow-hidden border border-transparent hover:border-primary-foreground"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >

                <div className="relative z-0 flex justify-between items-center">

                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 flex justify-center items-center text-2xl text-sky-800">
                      {item.image}
                    </div>
                    <div className="text-sm">{item.tec}</div>
                  </div>

                  <span className="hidden md:block text-transparent font-bold transition-all transform group-hover:text-stone-800">
                    {`${item.pct} %`}
                  </span>
                </div>

                {item.pct === 100 && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-12 bg-sky-700 transition-all duration-300 group-hover:w-full z-0" />
                )}

                {item.pct === 70 && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-12 bg-sky-700 transition-all duration-300 group-hover:w-4/6 z-0" />
                )}

                {item.pct === 50 && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-12 bg-sky-700 transition-all duration-300 group-hover:w-3/6 z-0" />
                )}

              </motion.li>
            ))}
          </ul>  

          <ul className="hidden w-full md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:mt-4">

            {Tecnologias.map((item, index) => (
              <motion.li
                key={item.tec} // ✅ chave única
                className="relative text-primary group px-4 py-1 transition-all duration-300 ease-in font-medium shadow-sm shadow-stone-700 rounded-full overflow-hidden border border-transparent hover:border-primary-foreground"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >



                <div className="relative z-0 flex justify-between items-center">

                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 flex justify-center items-center text-2xl text-sky-800">
                      {item.image}
                    </div>
                    <div>{item.tec}</div>
                  </div>

                  <span className="hidden md:block text-transparent font-bold transition-all transform group-hover:text-stone-800">
                    {`${item.pct} %`}
                  </span>
                </div>

                {item.pct === 100 && (
                  <span className="absolute bottom-0 left-0 h-[8px] w-12 bg-sky-700 transition-all duration-300 group-hover:w-full z-0" />
                )}

                {item.pct === 70 && (
                  <span className="absolute bottom-0 left-0 h-[8px] w-12 bg-sky-700 transition-all duration-300 group-hover:w-4/6 z-0" />
                )}

                {item.pct === 50 && (
                  <span className="absolute bottom-0 left-0 h-[8px] w-12 bg-sky-700 transition-all duration-300 group-hover:w-3/6 z-0" />
                )}

              </motion.li>
            ))}


          </ul>

        </div>


        <div className="hidden md:flex w-full flex-col justify-center items-center gap-8">

          <motion.h1
            className='bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text text-4xl font-semibold text-transparent'
            ref={ref2}
            style={{ y, opacity }}
          >
            Back End
          </motion.h1>

          <h3 className='text-sm text-primary-foreground text-center'>Experiência em desenvolvimento back-end com Node.js e Express, criando APIs RESTful integradas a bancos de dados MySQL e MongoDB utilizando Prisma ORM. Implementação de upload e processamento de imagens com Multer e Sharp.</h3>

          <ul className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Habilidades.map((item, index) => (

              <motion.li
                key={item} // ✅ chave única
                className="flex justify-center items-center text-primary p-2 px-4 py-2 h-16 md:h-auto text-center cursor-pointer shadow-sm shadow-stone-700 rounded-full
               transition-all hover:shadow-stone-600"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >{item}</motion.li>




            ))}
          </ul>
        </div>

      </div>

    </div >
  )
}

export default Skills;