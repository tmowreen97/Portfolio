import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainHome from '../components/MainHome';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TM Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <MainHome/>

      
    </div>
  )
}
