'use client'


import { Download } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { personalProjects as personal, academicProjects as academic } from '../data'
import { Counter } from "./ui/Counter";


export const Aboult = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


    return (
        <div id='About' className="min-h-[calc(100vh-44px)] md:min-h-screen lg:min-h-screen w-screen flex justify-center items-center">


            <div className="flex flex-col gap-8 justify-center items-center w-full max-w-6xl p-4 md:p-8 mx-4">
                <motion.h1
                    className="bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text text-lg md:text-2xl font-semibold text-transparent"
                    ref={ref}
                    style={{ y, opacity }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Minha evolução como desenvolvedor
                </motion.h1>

                <div className="flex flex-col gap-4 p-4 md:p-8 bg-[rgba(0,0,0,0.1)] dark:bg-black rounded-3xl border md:border-transparent">
                    <p className="text-sm text-primary md:leading-relaxed">Desenvolvedor em transição de carreira com foco em desenvolvimento web, atualmente cursando Análise e Desenvolvimento de Sistemas.
                        Possuo experiência em frontend, desenvolvendo interfaces responsivas com abordagem mobile first utilizando React, TypeScript, JavaScript, HTML e CSS, além de integração com APIs REST.

                    </p>

                    <p className="text-sm text-primary md:leading-relaxed">Também tenho conhecimentos em backend com Node.js, Express, Prisma e bancos de dados como MySQL e MongoDB, incluindo manipulação de arquivos e processamento de imagens com Multer e Sharp.</p>
                    <p className="text-sm text-primary md:leading-relaxed">Atuo há mais de 15 anos na área de atendimento ao cliente, sendo 12 anos em posições de liderança, o que me proporcionou habilidades sólidas em comunicação, resolução de problemas e trabalho em equipe — competências que aplico diretamente no desenvolvimento de software.</p>
                    <p className="text-sm text-primary md:leading-relaxed">Busco minha primeira oportunidade na área de tecnologia para atuar em projetos reais, evoluir tecnicamente e contribuir com o time, unindo minha experiência profissional com o desenvolvimento de soluções web.</p>

                    <div className="flex justify-between mt-2">
                        <div className="flex gap-2 md:gap-4 lg:gap-4 items-center ">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <div className="text-primary text-2xl md:text-4xl font-semibold">
                                        <Counter value={personal.length} />
                                    </div>
                                    <span className="text-sky-500 text-xl md:text-2xl mb-1">+</span>
                                </div>
                                <p className="text-sm text-primary-foreground opacity-50">Projetos pessoais</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <div className="text-primary text-2xl md:text-4xl font-semibold">
                                        <Counter value={academic.length} />
                                    </div>
                                    <span className="text-sky-500 text-xl md:text-2xl mb-1">+</span>
                                </div>
                                <p className="text-sm text-primary-foreground opacity-50">Projetos acadêmicos</p>
                            </div>
                        </div>
                        <button className="bg-sky-700 rounded-full flex items-center gap-2 transition-all ease-in px-4 hover:-translate-y-2">
                            <a
                                download
                                href="/FULLSTACK_JUNIOR_WALACE_DEOLIVEIRA_currículo.pdf">
                                Curriculo
                            </a>
                            <Download size={15} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}