import '../styles/globals.css'
import {Urbanist} from "@next/font/google";
import Image from 'next/image';

const urbanist = Urbanist({
  subsets:['latin'],
  className: ['400', '900']
}
)
function MyApp({Component, pageProps}){
  return (
    <main className={urbanist.className}>
      <Image
      src={'/assets/giphy.gif'}
      fill={true}
      quality={100}
      className=' opacity-80 z-[99]'
      />
     <Component {...pageProps}/> 
    </main>
  )
  
}

export default MyApp;