'use client'

import React from 'react'
import { Menu } from './menu';
import { ThemeToggle } from './toogleTheme';
import { motion } from "framer-motion";

const Header = () => {

    return (
        <header className='flex items-center font-extralight justify-between px-8'>

            <motion.div
                className='w-full flex justify-between'
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                viewport={{ once: true }}
            >

                <a href="#Home">
                    <button className='text-stone-800 font-semibold text-xl md:text-2xl lg:text-3xl hover:text-stone-700 transition-all duration-200 ease-in cursor-pointer md:w-56'>Walace.</button>
                </a>
                

                <div className='hidden md:block lg:block bg-zinc-200 dark:bg-[rgba(0,0,0,0.9)] dark:border text-slate-400 border-stone-950 rounded-full'>
                    <Menu />
                </div>

                <div className="flex justify-end items-center gap-4 md:w-56">
                    <a
                        href="https://wa.me/5521995311763"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='cursor-pointer flex gap-4 items-center transition-all ease-in hover:-translate-y-1 bg-zinc-200 dark:bg-[rgba(0,0,0,0.9)] dark:border border-stone-950 rounded-full'
                    >
                        <button className='bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text text-transparent text-center py-2 px-4 shadow-2xl dark:shadow-md text-xs font-semibold md:text-sm shadow-stone-800 rounded-full'>Entre em contato</button>
                    </a>

                    <ThemeToggle />
                </div>
            </motion.div>


        </header>
    )
}

export default Header;