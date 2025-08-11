'use client'

import { BiCodeAlt, BiMessageDetail, BiUserCircle } from 'react-icons/bi'
import { AiFillHome, AiOutlineMail } from 'react-icons/ai'
import { FaUser, FaTools, FaFolderOpen } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoPersonCircleSharp } from 'react-icons/io5'
 
export const Menu = () => {

    const lista = ['Home', 'About','Skills', 'Projects', 'Contact'];

    return (
        <>
            <ul className='md:hidden lg:hidden py-2 px-8 rounded-full flex w-full gap-8 justify-evenly items-center text-primary'>
                
                {lista.map(item => (

                    <li key={item} className='flex items-center cursor-pointer font-light transition-all duration-200 group sm:text-sm md:text-base xl:text-base'>

                        <a
                            className='transition-all ease-in duration-200 hover:-translate-y-1'
                            href={`#${item}`}
                        >
                            {item === 'Home' && <AiFillHome className='w-6 h-6'/>}
                            {item === 'About' && <FaUser  className='w-5 h-5'/>}
                            {item === 'Skills' && <FaTools className='w-5 h-5'/>}
                            {item === 'Projects' && <FaFolderOpen className='w-6 h-6'/>}
                            {item === 'Contact' && <MdEmail className='w-6 h-6'/>}
                        </a>
                    </li>
                ))}

            </ul>  
            <ul className='hidden md:flex py-2 px-8 rounded-full w-full gap-8 justify-between items-center text-primary'>
                <BiCodeAlt className='text-sky-700 text-2xl' />
                {lista.map((item, index) => (

                    <li key={item} className='flex items-center cursor-pointer font-light transition-all duration-200 group sm:text-sm md:text-base xl:text-base'>

                        <a
                            className='transition-all ease-in duration-200 hover:-translate-y-1'
                            href={`#${item}`}
                        >
                            {item === 'Home' && 'Início'}
                            {item === 'About' && 'Sobre mim'}
                            {item === 'Skills' && 'Habilidades'}
                            {item === 'Projects' && 'Projetos'} 
                            {item === 'Contact' && 'Contato'}
                        </a>
                    </li>
                ))}

            </ul>
        </>

    )
}