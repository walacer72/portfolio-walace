'use client'

import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const Contact = () => {

  const formSchema = z.object({
    name: z.string().min(2, "Prencha o nome corretamente"),
    textArea: z.string(),
    email: z.string().email('E-mailk invalido'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Dados enviados:", values);

  }

  return (
    <section id='Contact' className='min-h-screen w-full flex justify-center items-center'>
      <div className="w-full h-full max-w-6xl flex justify-between p-4">
        <div className="">111

        </div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 font-roboto100">
             <label className='flex flex-col gap-2'>
                <p></p>
                <input {...register('name')} />
                <div className="h-6">
                    {errors.name?.message && <p className="text-red-500">{errors.name.message}</p>}
                </div>
            </label>
            <label className='flex flex-col gap-2'>
                <p></p>
                <input {...register('name')} />
                <div className="h-6">
                    {errors.email?.message && <p className="text-red-500">{errors.email.message}</p>}
                </div>
            </label>
            <label className='flex flex-col gap-2'>
                <p></p>
                <textarea {...register('textArea')} />
                <div className="h-6">
                    {errors.textArea?.message && <p className="text-red-500">{errors.textArea.message}</p>}
                </div>
            </label>
            <button type="submit" >Próximo</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;