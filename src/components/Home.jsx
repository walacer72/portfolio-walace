import React from 'react'
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { Menu } from './menu';

const Home = () => {
    return (
        <section id='Home'
            style={{ backgroundImage: "url('bgAuroraBlack.jpg')" }}
            className='flex min-h-screen w-full items-center justify-center bg-cover bg-center'
        >
            <div className="flex flex-col items-center md:flex-row justify-center gap-8 p-5 text-center z-10">

                <img src="/InShot_20250702_225115347.png" alt="" className='w-[180px] h-[180px] sm:w-[300px]
                 sm:h-[300px] object-cover rounded-full  bg-gradient-to-r from-black to-stone-800 shadow-2xl shadow-stone-950' />

                <aside className='flex flex-col items-center gap-4'>
                    <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-3">
                        <p className='text-slate-300 text-sm'>Ola, Eu sou o</p>
                        <h1 className='text-slate-100 text-2xl font-semibold md:text-3xl lg:text-4xl'>Walace Oliveira</h1>
                        <h3 className='flex justify-center items-center gap-3 bg-gradient-to-r from-sky-800 to-sky-50 bg-clip-text text-4xl font-semibold text-transparent md:text-xl lg:text-4xl'>
                            <p>Front end Developer</p>

                        </h3>
                        <p className='max-w-[300px] text-sm text-gray-400'>Construindo experiências web modernas e acessíveis com foco em performance e usabilidade</p>
                    </div>

                    <div className="flex gap-3">
                        <a
                            rel="noopener noreferrer"
                            target='_blank'
                            href="https://github.com/walacer72">
                            <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
                        </a>

                        <a
                            rel="noopener noreferrer"
                            target='_blank'
                            href="https://www.linkedin.com/in/walace-oliveira-dev/">
                            <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
                        </a>

                        <a
                            rel="noopener noreferrer"
                            target='_blank'
                            href="">
                            <BiLogoInstagram className='h-10 w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
                        </a>

                    </div>
                </aside>

                <div className="py-3 flex md:hidden lg:hidden fixed bottom-0 left-0 right-0 justify-center items-center border-t border-stone-900 bg-black">
                    <Menu />
                </div>

            </div>
        </section>
    )
}

export default Home;