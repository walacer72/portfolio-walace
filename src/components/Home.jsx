'use client'

import { Menu } from './menu';
import { Icons } from './icons';
import { motion } from "framer-motion";

const Home = () => {

    const text = 'Desenvolvedor Fullstack focado em construir aplicações completas, conectando frontend, backend e banco de dados com tecnologias modernas como React, Node.js e TypeScript.';

    return (
        <section
            style={{ marginBottom: "100px" }}
            id='Home'
            className="flex min-h-[calc(100vh-44px)] md:min-h-screen lg:min-h-screen w-full items-center justify-center bg-cover bg-center 
             bg-[url('/images/bgAuroraLight.jpg')] dark:bg-[url('/images/bgAuroraBlack.jpg')]"
        >
            <div className="flex max-w-[350px] md:max-w-4xl flex-col items-center md:flex-row justify-center gap-8 p-5 text-center z-10">

                <motion.img
                    src="/images/InShot_20250702_225115347.png" alt="" className='w-[180px] h-[180px] sm:w-[300px]
                 sm:h-[300px] object-cover rounded-full bg-gradient-to-r from-black to-stone-800 shadow-2xl shadow-stone-700 dark:shadow-stone-950'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    width={400}
                    height={400}

                />

                <aside className=' flex flex-col items-center gap-4'>
                    <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-3">


                        <motion.p
                            className='text-primary text-sm'
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Ola, Eu sou o
                        </motion.p>

                        <motion.h1

                            className='text-primary text-2xl font-semibold md:text-3xl lg:text-4xl'
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Walace Oliveira
                        </motion.h1>

                        <motion.h3
                            className='flex justify-center items-center gap-3 bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text text-4xl font-semibold text-transparent md:text-xl lg:text-4xl'
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Full stack Developer
                        </motion.h3>



                        <motion.p
                            className='max-w-[300px] text-sm text-primary-foreground pt-2 md:pt-0'
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: 1 }}
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                    },
                                },
                            }}
                        >
                            {text.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.p>

                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Icons />
                    </motion.div>

                </aside>

                <div className="flex md:hidden lg:hidden fixed bottom-0 left-0 right-0 h-11 justify-center items-center border-t bg-zinc-200 dark:bg-black z-40">
                    <Menu />
                </div>

            </div>
        </section>
    )
}

export default Home;