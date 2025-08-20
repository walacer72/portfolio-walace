import { Habilidades, Tecnologias } from "@/data";


const Skills = () => {

  const tecnologias = Tecnologias;
  const habilidades = Habilidades;

  return (
    <div id='Skills' className='w-screen flex items-center justify-center min-h-[calc(100vh-44px)] md:min-h-screen lg:min-h-screen md:mt-0 lg:mt-0 py-28 px-4 md:p-6 lg:p-10 '>

      <div className="h-full w-full max-w-6xl text-slate-400 flex flex-col items-center mt-8 justify-center gap-44 md:gap-20 p-4 md:p-6 lg:p-10">

        <div className="flex flex-col justify-center items-center gap-4 md:mt-0">
          <h1 className='bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text text-4xl font-semibold text-transparent'>Hard Skills</h1>
          <h3 className='text-sm text-primary-foreground text-center'>Possuo conhecimentos em desenvolvimento front-end, com experiência no uso de HTML, CSS, JavaScript e frameworks modernos como React e Tailwind CSS, aplicando boas práticas de codificação, performance e usabilidade.</h3>

          <ul className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-4">
            {tecnologias.map((item, index) => (

              <li
                key={index}
                className="relative text-primary group px-4 py-1 transition-all duration-300 ease-in font-medium shadow-sm shadow-stone-700 rounded-full overflow-hidden border border-transparent hover:border-primary-foreground"
              >
                {/* Conteúdo do botão */}
                <div className="relative z-0 flex justify-between items-center">
                  
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 flex justify-center items-center text-2xl text-sky-800">{item.image}</div>
                    <div>{item.tec}</div>
                  </div>

                  <span className="hidden md:block text-transparent font-bold transition-all transform group-hover:text-stone-800">
                    {`${item.pct} %`}
                  </span>
                </div>

                {item.pct === 100 &&
                  <span className={`absolute bottom-0 left-0 h-[8px] w-12 bg-sky-700 transition-all duration-300 group-hover:w-full z-0`} />
                }

                {item.pct === 70 &&
                  <span className={`absolute bottom-0 left-0 h-[8px] w-12 bg-sky-700 transition-all duration-300 group-hover:w-4/6 z-0`} />
                }

                {item.pct === 50 &&
                  <span className={`absolute bottom-0 left-0 h-[8px] w-12 bg-sky-700 transition-all  duration-300 group-hover:w-3/6 z-0`} />
                }
                
              </li>

            ))}
          </ul>

        </div>


        <div className="w-full flex flex-col justify-center items-center gap-4 mt-16 md:mt-0 lg:mt-0">
          <h1 className='bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text text-4xl font-semibold text-transparent md:text-xl lg:text-4xl'>Soft Skills</h1>
          <h3 className='text-sm text-primary-foreground text-center'>Tenho facilidade para trabalhar em equipe, sou proativo e estou sempre disposto a aprender e me adaptar às necessidades do time e do projeto.</h3>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {habilidades.map((item, index) => (

              <div key={index} className="flex justify-center items-center text-primary p-2 px-4 py-2 h-16 md:h-auto text-center cursor-pointer shadow-sm shadow-stone-700 rounded-full
               transition-all  hover:opacity-80">
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills;