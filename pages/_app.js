import '../styles/globals.css'
import {Urbanist} from "@next/font/google";
import Image from 'next/image';
import Home from '.';

const urbanist = Urbanist({
  subsets:['latin'],
  className: ['400', '900']
}
)
function MyApp({Component, pageProps}){
  return (
    <main className={urbanist.className}>
     <Component {...pageProps}/>
    </main>
  )
  
}

export default MyApp;