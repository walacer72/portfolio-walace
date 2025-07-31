import React from 'react'
import { Menu } from './menu';

const Header = () => {

    return (
        <header className='z-50'>

            <nav className="top-0 left-0 right-0 flex items-center font-extralight justify-between px-8">

                <div className="text-stone-800 font-semibold text-xl lg:text-4xl">Walace.</div>

                <div className='hidden md:block lg:block bg-[rgba(0,0,0,0.9)] border text-slate-400 border-stone-900 rounded-full'>
                    <Menu />
                </div>
                
                <div className="flex gap-4 items-center transition-all ease-in hover:-translate-y-1">
                    <a
                        href="https://wa.me/5521995311763"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className='py-3 px-6 shadow-md text-slate-400 shadow-stone-800 rounded-full bg-[rgba(0,0,0,0.9)]'>Connect with me</button>
                    </a>

                </div>
            </nav>

        </header>
    )
}

export default Header;