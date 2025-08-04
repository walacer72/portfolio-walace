import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

export const Icons = () => {
    return (
        <div className="flex gap-3">
            <a
                rel="noopener noreferrer"
                target='_blank'
                href="https://github.com/walacer72">
                <BiLogoGithub className='w-8 h-8 md:h-10 md:w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-1 md:p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
            </a>

            <a
                rel="noopener noreferrer"
                target='_blank'
                href="https://www.linkedin.com/in/walace-oliveira-dev/">
                <BiLogoLinkedin className='w-8 h-8 md:h-10 md:w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-1 md:p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
            </a>

            <a
                rel="noopener noreferrer"
                target='_blank'
                href="">
                <BiLogoInstagram className='w-8 h-8 md:h-10 md:w-10 cursor-pointer rounded-full border-transparent bg-sky-700 p-1 md:p-2 text-white transition-all duration-200 hover:scale-110 hover:border-sky-800 hover:bg-slate-300 hover:text-sky-700' />
            </a>

        </div>
    )
}