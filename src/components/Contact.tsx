'use client'

import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Icons } from "./icons"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
    const [formShow, setFormShow] = useState(false);

    const formSchema = z.object({
        name: z.string().min(2, "Preencha o nome corretamente"),
        textArea: z.string().min(8, "Preencha a mensagem"),
        email: z.string().email({ message: 'E-mail inválido' }),
    })

    const { register, handleSubmit, reset, formState: { errors } } =
        useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
        })

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await fetch("https://formsubmit.co/234ced1bc48c004ae32c73ba38a9cb71", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },

                body: JSON.stringify({
                    ...values,
                    _subject: "Novo Contato!",
                    _captcha: "false",
                    _next: "https://portfolio-walace.vercel.app/#Contact",
                }),

            });

            if (response.ok) {
                setFormShow(true);
                reset();
            }

        } catch (error) {
            console.log("Erro ao enviar:", error);
        }
    };

    return (
        <section
            id='Contact'
            className='scroll-mb-28 md:scroll-mb-20 min-h-[calc(100vh-44px)] md:min-h-screen lg:min-h-screen mt-10 w-full flex justify-center items-center'
        >
            <div className="max-w-[350px] md:max-w-6xl flex flex-col justify-center items-center p-4 mx-4">

                <motion.h1
                    className='bg-gradient-to-r from-slate-950 to-sky-400 dark:from-sky-800 dark:to-sky-50 
          bg-clip-text py-4 text-lg text-center md:text-2xl font-semibold text-transparent'
                    ref={ref}
                    style={{ y, opacity }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Procurando alguém para somar no seu time?
                </motion.h1>

                <div className="w-full md:mt-12 gap-4 md:gap-8 flex flex-col md:flex-row justify-between md:p-4 items-center">

                    <div className="flex-1 flex flex-col sm:gap-28 lg:gap-32 md:items-start md:p-8 lg:h-80 items-center">

                        <h3 className='text-sm md:text-md text-primary-foreground text-center md:text-start md:leading-relaxed mb-8 md:mb-0'>
                            Acredito que bons resultados vêm da combinação entre esforço, responsabilidade e trabalho em equipe. Estou pronto para contribuir em projetos desafiadores e crescer junto com profissionais que também buscam excelência.
                        </h3>

                        <div className="mt-auto">
                            <Icons />
                        </div>



                    </div>

                    <div className={`bg-[rgba(0,0,0,0.1)] dark:bg-black rounded-3xl w-full flex flex-1 border md:border-transparent justify-center p-4 md:p-10`}>

                        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2 font-roboto100">

                            <div className="w-full flex flex-col md:flex-row gap-4">

                                <label className='w-full flex flex-col gap-2'>

                                    <p className='text-sm text-primary pl-4'>Nome</p>

                                    <input {...register('name')} className='w-full flex rounded-full text-sm h-8 md:h-10 p-2 px-6 outline-none bg-background shadow-sm shadow-slate-700 text-slate-500 border md:border-transparent' />

                                    <div className="h-4">
                                        {errors.name?.message && <p className="text-sky-400 text-sm">{errors.name.message}</p>}
                                    </div>

                                </label>

                                <label className='w-full flex flex-col gap-2'>

                                    <p className="text-sm text-primary pl-4">E-mail</p>

                                    <input {...register('email')} className='w-full flex rounded-full text-sm h-8 md:h-10 p-2 px-6 outline-none bg-background shadow-sm shadow-slate-700 text-slate-500 border md:border-transparent' />

                                    <div className="h-4">
                                        {errors.email?.message && <p className="text-sky-400 text-sm">{errors.email.message}</p>}
                                    </div>

                                </label>
                            </div>

                            <label className='flex flex-col gap-2'>
                                <p className='text-sm text-primary pl-4'>Mensagem</p>
                                <textarea {...register('textArea')} className='rounded-3xl text-slate-500 p-2 px-6 outline-none bg-background shadow-sm shadow-slate-700 w-full overflow-y-hidden h-8 text-sm md:h-16 md:max-h-32 resize-none border md:border-transparent' />

                                <div className="h-4">
                                    {errors.textArea?.message && <p className="text-sky-400 text-sm">{errors.textArea.message}</p>}
                                </div>

                            </label>

                            <button
                                type="submit"
                                className='bg-sky-700 rounded-full transition-all ease-in py-2 px-6 hover:-translate-y-2'
                            >
                                Enviar
                            </button>

                            {formShow && (
                                <div className="flex text-sm mt-2 text-center text-primary-foreground">
                                    🚀 Sua mensagem chegou até mim! Estou ansioso para conversarmos melhor... Obrigado pela oportunidade!
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
