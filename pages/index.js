import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainHome from '../components/MainHome';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TM Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
      src={'/assets/giphy.gif'}
      fill
      className=' opacity-80 z-[99]'
      />
      <NavBar/>
      <MainHome/>

      
    </div>
  )
}
