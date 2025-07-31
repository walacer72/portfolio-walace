import { BiCodeAlt } from 'react-icons/bi'


export const Menu = () => {

    const lista = ['Home', 'Skills', 'Project', 'Contact'];

    return (
        <ul className='py-2 px-8 rounded-full flex w-full gap-8 justify-between items-center text-slate-400'>
            <BiCodeAlt className='text-sky-700 text-3xl w-[30px] h-[30px] md:text-2xl flex justify-center items-center' />
            {lista.map((item, index) => (

                <li key={item} className='flex items-center cursor-pointer font-light transition-all duration-200 group sm:text-sm md:text-base xl:text-lg'>

                    <a
                        className='transition-all ease-in duration-200 hover:-translate-y-1'
                        href={`#${item}`}
                    >
                        {item}
                    </a>
                </li>
            ))}

        </ul>
    )
}