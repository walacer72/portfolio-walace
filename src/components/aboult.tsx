import { Habilidades } from "@/data";

export const Aboult = () => {


    return (
        <div id='Aboult' className="min-h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col gap-4 md:gap-8 justify-center items-center w-full max-w-6xl p-4 md:p-8 mx-4">
                <h1 className="bg-gradient-to-r from-sky-800 to-sky-200 bg-clip-text text-4xl font-semibold text-transparent">Aboult</h1>
                <div className="flex flex-col md:gap-8 p-4 md:p-8 bg-[rgba(0,0,0,0.5)] rounded-3xl">
                    <p className="text-sm text-slate-500 md:leading-relaxed">Sou um profissional em transição de carreira para a área de tecnologia, atualmente cursando Análise e Desenvolvimento de Sistemas. Apesar de ainda não ter experiência formal na área de desenvolvimento, venho me preparando intensamente através de cursos práticos com foco em desenvolvimento web.

                        Tenho facilidade para aprender novas tecnologias e conceitos — ao longo da minha trajetória sempre me destaquei pela velocidade com que absorvo e aplico novos conhecimentos.

                        Atuo há mais de 12 anos na área de atendimento ao cliente, sendo os últimos 9 anos em posições de liderança. Essa experiência me proporcionou o desenvolvimento de diversas soft skills que considero fundamentais também na área de tecnologia.
                    </p>

                    <p className="text-sm text-slate-500 md:leading-relaxed">Hoje, busco uma oportunidade para aplicar minhas habilidades técnicas em projetos reais e contribuir com times de tecnologia, unindo minha experiência de gestão com a paixão por Ti.</p>

                    <div className="flex justify-between mt-4">
                        <div className="flex gap-4 items-center ">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <div className="text-slate-300 text-2xl md:text-4xl font-semibold">3</div>
                                    <span className="text-sky-500 text-2xl mb-1">+</span>
                                </div>
                                <p className="text-sm text-slate-500 opacity-50">Projectos pessoais</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <div className="text-slate-300 text-2xl md:text-4xl font-semibold">6</div>
                                    <span className="text-sky-500 text-2xl mb-1">+</span>
                                </div>
                                <p className="text-sm text-slate-500 opacity-50">Projectos academicos</p>
                            </div>
                        </div>
                        <button className="bg-sky-700 rounded-full inline-block transition-all ease-in px-6 hover:-translate-y-2">Curriculo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}