import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainHome from '../components/MainHome';
import Image from 'next/image';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className='w-screen h-screen bg-cover bg-center custom-img bg-fixed bg-repeat'>
      <Head>
        <title>TM Portfolio</title>
        <link className='width-5 height-5'rel="icon" href="/assets/tm-logo-icon.png"  />
      </Head>
      {/* <div className='w-screen h-screen bg-cover bg-center custom-img bg-fixed '> */}
       <NavBar/>
        <MainHome/>
         <About/>
      
      {/* <Projects/>  */}
      {/* </div> */}
      
    </div>
  )
}
