import '../styles/globals.css'
import {Urbanist} from "@next/font/google";

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