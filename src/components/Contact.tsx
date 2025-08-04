'use client'

import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {Icons } from "@/components/icons"

const Contact = () => {

  const formSchema = z.object({
    name: z.string().min(2, "Preencha o nome corretamente"),
    textArea: z.string().min(8, "Preencha a mensagem"),
    email: z.email({message: 'E-mail invalido'}),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Dados enviados:", values);

  }

  return (
    <section id='Contact' className='min-h-screen w-full flex justify-center items-center'>
      <div className="w-full h-full max-w-6xl flex flex-col justify-center items-center p-4">
        <h1 className='bg-gradient-to-r from-sky-800 to-sky-200 bg-clip-text text-lg text-center md:text-2xl font-semibold text-transparent'>Procurando alguém para somar no seu time?</h1>

        <div className="w-full md:mt-12 gap-8 flex flex-col md:flex-row justify-between md:p-4">
          <div className="flex-1 flex flex-col items-center md:items-start justify-between p-4 md:p-8">
            <h3 className='text-sm md:text-md text-slate-400 text-center md:text-start md:leading-relaxed mb-8 md:mb-0'>Acredito que bons resultados vêm da combinação entre esforço, responsabilidade e trabalho em equipe. Estou pronto para contribuir em projetos desafiadores e crescer junto com profissionais que também buscam excelência.</h3>
            <Icons />
          </div>
          <div className="bg-[rgba(0,0,0,0.9)] rounded-3xl flex justify-center items-center p-8 md:px-8 md:py-12 ">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2 font-roboto100">
              <div className="w-full flex flex-row gap-4">
                <label className='w-full flex flex-col gap-2'>
                  <p className='text-sm text-slate-400 pl-4'>Nome</p>
                  <input {...register('name')} className='w-full flex rounded-full text-sm h-8 md:h-10 p-2 px-6 outline-none bg-zinc-950 shadow-sm shadow-slate-700 text-slate-500' />
                  <div className="h-4">
                    {errors.name?.message && <p className="text-sky-400 text-sm">{errors.name.message}</p>}
                  </div>
                </label>
                <label className='w-full flex flex-col gap-2'>
                  <p className="text-sm text-slate-400 pl-4">E-mail</p>
                  <input {...register('email')} className='w-full rounded-full h-8 md:h-10 text-sm p-2 px-6 outline-none bg-zinc-950 shadow-sm shadow-slate-700 text-slate-500' />
                  <div className="h-4">
                    {errors.email?.message && <p className="text-sky-400 text-sm">{errors.email.message}</p>}
                  </div>
                </label>
              </div>

              <label className='flex flex-col gap-2'>
                <p className='text-sm text-slate-400 pl-4'>Messagem</p>
                <textarea {...register('textArea')} className='rounded-3xl text-slate-500 p-2 px-6 outline-none bg-zinc-950 shadow-sm shadow-slate-700 w-full overflow-y-hidden h-8 text-sm md:h-20 md:max-h-32 resize-none' />
                <div className="h-4">
                  {errors.textArea?.message && <p className="text-sky-400 text-sm">{errors.textArea.message}</p>}
                </div>
              </label>
              <button type="submit" 
              className='bg-sky-700 rounded-full transition-all ease-in py-2 px-6 hover:-translate-y-2'
              >Próximo</button>
            </form>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact;