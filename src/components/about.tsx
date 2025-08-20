import { Habilidades } from "@/data";
import { Download } from "lucide-react";

export const Aboult = () => {


    return (
        <div id='About' className="min-h-[calc(100vh-44px)] md:min-h-screen lg:min-h-screen w-screen flex justify-center items-center">
            
            <div className="flex flex-col gap-4 md:gap-8 justify-center items-center w-full max-w-6xl p-4 md:p-8 mx-4">
                <h1 className="bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 bg-clip-text text-4xl font-semibold text-transparent">Sobre mim</h1>
                <div className="flex flex-col md:gap-8 p-4 md:p-8 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(0,0,0,0.5)] rounded-3xl">
                    <p className="text-sm text-primary md:leading-relaxed">Sou um profissional em transição de carreira para a área de tecnologia, atualmente cursando Análise e Desenvolvimento de Sistemas. Apesar de ainda não ter experiência formal na área de desenvolvimento, venho me preparando intensamente através de cursos práticos com foco em desenvolvimento web.

                        Tenho facilidade para aprender novas tecnologias e conceitos — ao longo da minha trajetória sempre me destaquei pela velocidade com que absorvo e aplico novos conhecimentos.

                        Atuo há mais de 12 anos na área de atendimento ao cliente, sendo os últimos 9 anos em posições de liderança. Essa experiência me proporcionou o desenvolvimento de diversas soft skills que considero fundamentais também na área de tecnologia.
                    </p>

                    <p className="text-sm text-primary md:leading-relaxed">Hoje, busco uma oportunidade para aplicar minhas habilidades técnicas em projetos reais e contribuir com times de tecnologia, unindo minha experiência de gestão com a paixão por Ti.</p>

                    <div className="flex justify-between mt-4">
                        <div className="flex gap-2 md:gap-4 lg:gap-4 items-center ">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <div className="text-primary text-2xl md:text-4xl font-semibold">3</div>
                                    <span className="text-sky-500 text-xl md:text-2xl mb-1">+</span>
                                </div>
                                <p className="text-sm text-primary-foreground opacity-50">Projetos pessoais</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <div className="text-primary text-2xl md:text-4xl font-semibold">6</div>
                                    <span className="text-sky-500 text-xl md:text-2xl mb-1">+</span>
                                </div>
                                <p className="text-sm text-primary-foreground opacity-50">Projetos acadêmicos</p>
                            </div>
                        </div>
                        <button className="bg-sky-700 rounded-full flex items-center gap-2 transition-all ease-in px-4 hover:-translate-y-2">
                            <a 
                            download
                            href="/WALACE_DEOLIVEIRA_currículo.pdf">
                                Curriculo
                            </a>
                            <Download size={15} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}