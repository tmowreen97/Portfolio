import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainHome from '../components/MainHome';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TM Portfolio</title>
        <link className='width-5 height-5'rel="icon" href="/assets/tm-logo-icon.png"  />
      </Head>
      <Image
      src={'/assets/giphy.gif'}
      fill={true}
      quality={100}
      className=' opacity-80 z-[99]'
      />
      <NavBar/>
      <MainHome/>

      
    </div>
  )
}
