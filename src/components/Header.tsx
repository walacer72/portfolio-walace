'use client'

import React from 'react'
import { Menu } from './menu';
import { ThemeToggle } from './ui/toogleTheme';
import { motion } from "framer-motion";

const Header = () => {

    return (
        <header className='flex items-center font-extralight px-8'>

            <motion.div
                className='w-full flex justify-between items-center'
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                viewport={{ once: true }}
            >

                <a
                    href="#Home"
                    className='text-stone-700 dark:text-stone-400 font-semibold text-xl md:text-2xl lg:text-3xl hover:opacity-70 transition-all duration-200 ease-in cursor-pointer md:w-56'
                    aria-label="Volte home"
                >
                    Walace.
                </a>


                <nav
                    className='hidden lg:block bg-bg-[rgba(255,255,255,255.2)] backdrop-blur-sm dark:bg-[rgba(0,0,0,0.7)] rounded-full'
                    aria-label="Menu principal"
                >
                    <Menu />
                </nav>

                <div className="flex justify-end items-center gap-4 md:w-56">
                    <a
                        href="https://wa.me/5521995311763"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Entrar em contato pelo WhatsApp (abre em nova aba)"
                        className='cursor-pointer flex gap-4 items-center transition-all ease-in hover:-translate-y-1 bg-zinc-200 dark:bg-[rgba(0,0,0,0.9)] dark:border-stone-800 border border-stone-200 text-center py-2 px-4 shadow-2xl dark:shadow-md text-xs font-semibold dark:font-normal text-primary md:text-sm shadow-stone-800 rounded-full'
                    >
                        Entre em contato
                    </a>

                    <ThemeToggle/>
                </div>
            </motion.div>


        </header>
    )
}

export default Header;