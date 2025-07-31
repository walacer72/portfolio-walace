// ICONS SKILLS

import React from 'react'
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiGithub,
    SiShadcnui 
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

// IMAGES PROJECTS

import jogoDaMemoria from '../public/pc/jogoDaMemoria.jpg'
import mariaDocesPc from '../public/pc/mariaDoces.jpg'
import mariaDocesSmart from "../public/smartphone/mariaDoces.jpeg"
import planAheadPc from "../public/pc/planAhead.jpg"
import planAheadSmart from "../public/smartphone/planAhead.jpeg"
import tmakiZapPc from "../public/pc/tmakiZap.jpg"
import tmakiZapSmart from "../public/smartphone/tmakiZap.jpeg"
import whatsAppClone from "../public/pc/whatsAppClone.jpg"
import calculadoraIMC from "../public/pc/calculadoraIMC.jpg"
import { Project } from './projectType';

export const personalProjects: Project[] = [
    {
        demo: 'https://walacer72.github.io/Maria-Doces/#Produtos',
        github: 'https://github.com/walacer72/Maria-Doces',
        pc: mariaDocesPc,
        smart: mariaDocesSmart,
        name: 'Maria doces',
        description: 'Criação própria, do design ao código. Desenvolvi um site responsivo e moderno para a confeitaria Maria Doces, com foco na divulgação dos produtos artesanais e no contato fácil via WhatsApp para pedidos e orçamentos. O site apresenta bolos, doces, tortas e lembrancinhas com imagens e descrições, pensado especialmente para encomendas personalizadas.',
        tecnologias: 'Html5, Css3, Javascript, Api formsubmit e biblioteca AOS pra animação de scroll',
        tec: [
            <SiHtml5 />,
            <SiCss3 />,
            <SiJavascript />
        ]

    },

    {
        demo: 'https://plan-ahead-o5ha.vercel.app/',
        github: 'https://github.com/walacer72/Plan-Ahead',
        pc: planAheadPc,
        smart: planAheadSmart,
        name: 'Plan Ahead',
        description: 'Desenvolvimento próprio com foco em aprendizado, criatividade e usabilidade. Um aplicativo para organizar e gerenciar atividades do dia a dia de forma prática e eficiente. Ele ajuda as pessoas a não esquecerem compromissos, tarefas ou itens que precisam comprar.',
        tecnologias: 'Reactjs, Nextjs, Typescript, Shadcn-ui e Tailwindcss',
        tec: [ 
            <SiReact size={19}/>,
            <RiNextjsFill size={22}/>,
            <SiShadcnui />,
            <SiTailwindcss />,
            <SiTypescript />
        ]
    
    },

    {
        demo: 'https://tmakiclub-zap.vercel.app/',
        github: 'https://github.com/walacer72/TmakiClub-Zap',
        pc: tmakiZapPc,
        smart: tmakiZapSmart,
        name: 'Tmakiclub Zap',
        description: 'Desenvolvi um sistema de pedidos online integrado ao WhatsApp, voltado para pequenos comércios como docerias, lanchonetes e restaurantes. O cliente acessa um catálogo digital com produtos, imagens, preços e descrições, seleciona os itens desejados e, ao final, o sistema gera automaticamente uma mensagem com os detalhes do pedido, pronta para ser enviada ao WhatsApp da loja com um clique.',
        tecnologias: 'Reactjs, Nextjs, Typescript, Shadcn-ui, Tailwindcss e Apis: zustand, zod, i18n e viacep',
        tec: [ 
            <SiReact size={19}/>,
            <RiNextjsFill size={22}/>,
            <SiShadcnui />,
            <SiTailwindcss />,
            <SiTypescript />
        ]
        
        
    }
]

export const academicProjects: Project[] = [
    
    {
        demo: 'https://whats-app-clone-chi.vercel.app/',
        github: 'https://github.com/walacer72/WhatsApp-Clone',
        pc: whatsAppClone,
        smart: '',
        name: 'WhatsApp-Clone',
        description: 'Projeto em aula, tecnolocias utilizadas Reactjs, css, firebase',
        tecnologias: '',
        tec: []
    },
    {
        demo: 'https://calculadora-imc-gilt-phi.vercel.app/',
        github: 'https://github.com/walacer72/calculadora-IMC',
        pc: calculadoraIMC,
        smart: '',
        name: 'Calculadora de IMC',
        description: 'Projeto em aula',
        tecnologias: '',
        tec: []
    },
    {
        demo: 'https://jogo-da-memoria-rose-three.vercel.app/',
        github: 'https://github.com/walacer72/Jogo-da-Memoria',
        pc: jogoDaMemoria,
        smart: '',
        name: 'Jogo da Memoria',
        description: 'Projeto em aula',
        tecnologias: '',
        tec: []
    },
    {
        demo: '',
        github: '',
        pc: '',
        smart: '',
        name: 'Pizza',
        description: 'Projeto em aula',
        tecnologias: '',
        tec: []
    },
    {
        demo: '',
        github: '',
        pc: '',
        smart: '',
        name: 'Urna Eletronica',
        description: 'Projeto em aula',
        tecnologias: '',
        tec: []
    },
    {
        demo: '',
        github: '',
        pc: '',
        smart: '',
        name: 'QuizDev',
        description: 'Projeto em aula',
        tecnologias: '',
        tec: []
    }

]

export const Tecnologias = [
    { image: <SiHtml5 />, tec: 'Html5', pct: 100 },
    { image: <SiCss3 />, tec: 'Css3', pct: 100 },
    { image: <SiJavascript />, tec: 'Javascript', pct: 100 },
    { image: <SiReact />, tec: 'ReactJS', pct: 70 },
    { image: <SiTypescript />, tec: 'Typescript', pct: 100 },
    { image: <SiTailwindcss />, tec: 'TailwindCSS', pct: 100 },
    { image: <SiMysql />, tec: 'MySQL', pct: 70 },
    { image: <SiGithub />, tec: 'Github', pct: 50 }
]


export const Habilidades = ['Comunicação', 'Trabalho em equipe', 'Proatividade', 'Organização e gestão', 'Resolução de problemas', 'Aprendizado contínuo', 'Adaptabilidade', 'Empatia']