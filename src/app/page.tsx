import Header from '@/components/Header';
import Home from '@/components/Home';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import { Aboult } from '@/components/about';
import { Footer } from '@/components/footer';


export default () => {
  return (

    <div className="flex flex-col min-h-screen w-full subpixel-antialiased overflow-x-hidden">

      <div className='fixed top-4 right-0 left-0 z-50'>
        <Header />
      </div>


      <main className="bg-background">
        <Home />
        <Aboult />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>


    </div>

  )
}

