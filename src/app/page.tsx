import Header from '@/components/Header';
import Home from '@/components/Home';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import { Aboult } from '@/components/about';


export default () => {
  return (

    <div className="flex flex-col min-h-screen w-full subpixel-antialiased">

      <nav className='sticky top-4 right-0 left-0 z-50'>
        <Header />
      </nav>


      <main className="bg-zinc-950">
        <Home />
        <Aboult />
        <Skills />
        <Project />
        <Contact />
      </main>


    </div>

  )
}

