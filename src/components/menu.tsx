'use client'

import { BiCodeAlt } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { FaUser, FaTools, FaFolderOpen } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'

export const Menu = () => {

    const lista = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
    const [key, setKey] = useState(0);

    const handleButtonShow = (index: number) => {
        setKey(index);
        
    }

    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = lista.findIndex((id) => id === entry.target.id)
            if (index !== -1) {
              setKey(index)
            }
          }
        })
      },
      { threshold: 0.6 } // só ativa se 60% da seção estiver visível
    )

    lista.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

    return (
        <>
            <ul className='md:hidden lg:hidden py-2 px-8 rounded-full flex w-full gap-8 justify-evenly items-center text-primary'>

                {lista.map((item, index) => (

                    <li key={index} className='flex items-center cursor-pointer font-light transition-all duration-200 group sm:text-sm md:text-base xl:text-base'>

                        <a
                            
                            onClick={() => handleButtonShow(index)}
                            className={`transition-all ease-in duration-200 hover:-translate-y-1 ${key === index ? 'text-sky-700': ''}`}
                            href={`#${item}`}
                        >
                            {item === 'Home' && <AiFillHome className='w-6 h-6' />}
                            {item === 'About' && <FaUser className='w-5 h-5' />}
                            {item === 'Skills' && <FaTools className='w-5 h-5' />}
                            {item === 'Projects' && <FaFolderOpen className='w-6 h-6' />}
                            {item === 'Contact' && <MdEmail className='w-6 h-6' />}
                        </a>
                    </li>
                ))}

            </ul>
            <ul className='hidden md:flex py-2 px-8 rounded-full w-full gap-8 justify-between items-center text-primary'>
                <BiCodeAlt className='text-sky-700 text-2xl' />
                {lista.map((item, index) => (

                    <li key={index} className='flex items-center cursor-pointer font-light transition-all duration-200 group sm:text-sm md:text-base xl:text-base'>

                        <a
                            
                            onClick={() => handleButtonShow(index)}
                            className={`transition-all ease-in duration-200 hover:-translate-y-1 ${key === index ? 'text-sky-700': ''}`}
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