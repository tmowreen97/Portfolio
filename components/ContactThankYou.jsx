import {motion} from 'framer-motion';
import Image from 'next/image';

function ContactThankYou(){
  return(
    <div className="min-w-screen h-screen text-center justify-center bg-cover bg-center custom-img bg-fixed ">
      <div className="pt-[12%] mx-[15%] max-w-[1240px] justify-center items-center text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 , transition:{delay:0.2}}}className="mb-[15px] mt-[30%] md:mt-0">
          <h1 className="text-5xl md:text-7xl text-left">Contact Me:</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 , transition:{delay:0.6}}} className="md:flex justify-between">
        <div className="md:max-w-[40%] md:mx-5 mx-2 text-left tracking-wider text-md mt-[50px] mb-10">
            <p>I would love to hear from you!</p>
            <p>Please feel free to contact me through this form with any questions or business inquiries.</p>
          </div>
          <div className="md:w-[40%] w-[90%] items-center pt-5 mx-5 ">
            <ThankYouDiv/>
          </div>
          
        </motion.div>
  </div>
  <div className='bg-cover bg-center custom-img bg-fixed text-center justify-center items-center text-xs md:pt-[25%] pt-[70%] flex'>
            <p>© Tasreen Mowreen 2023 |</p>
            <p></p>
            <a className="text-xs pl-1" target="_blank" href="https://media.giphy.com/media/Skv6LLzPcpxv3uEaCn/giphy.gif" rel="noopener noreferrer">
              background img source
            </a>
          </div>

    </div>
    
    
    
)
}
export default ContactThankYou;

function ThankYouDiv(){
  return(
    <div>
      <motion.div initial={{opacity:0, scale:.5}}  animate={{opacity:1, scale:1.2, transition:{duration:1, delay:1}}} className="bg-white/40 flex justify-evenly shadow-md rounded-xl pt-8 pb-8 text-left md:px-0 px-5">
        <div>
          <p className='md:text-xl text-lg'>Thank you for your message!</p>
          <p className='md:text-md text-sm'>I'll get back to you as soon as possible.</p>
        </div>
        <div className='pl-5 pt-2 md:w-auto md:h-auto w-20'>
          <Image src={'/assets/check.gif'} width={40} height={40}/>
        </div>
      </motion.div>
    </div>

  )
}