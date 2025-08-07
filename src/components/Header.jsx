import React from 'react'
import { Menu } from './menu';
import { ModeToggle } from './toogleTheme';

const Header = () => {

    return (
        <header className='z-50'>

            <nav className='flex items-center font-extralight justify-between px-8'>

                <div className="text-stone-800 font-semibold text-xl md:text-2xl lg:text-3xl hover:text-stone-700 transition-all duration-200 ease-in cursor-pointer">Walace.</div>

                <div className='hidden md:block lg:block bg-[rgba(0,0,0,0.9)] border text-slate-400 border-stone-900 rounded-full'>
                    <Menu />
                </div>

                <div className="flex justify-between items-center gap-4">
                    <a
                        href="https://wa.me/5521995311763"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='cursor-pointer flex gap-4 items-center transition-all ease-in hover:-translate-y-1'
                    >
                        <button className='py-2 px-4 shadow-md text-slate-400 text-sm md:text-base shadow-stone-800 rounded-full bg-[rgba(0,0,0,0.9)]'>Entre em contato</button>
                    </a>

                     <ModeToggle />
                </div>

               

            </nav>

        </header>
    )
}

export default Header;