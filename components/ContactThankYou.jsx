import {motion} from 'framer-motion';
import Image from 'next/image';

function ContactThankYou(){
  return(
    <div className="min-w-screen h-screen text-center justify-center bg-cover bg-center custom-img bg-fixed ">
      <div className="pt-[12%] mx-[15%] max-w-[1240px] justify-center items-center text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 , transition:{delay:0.2}}}className="mb-[15px]">
          <h1 className="text-5xl md:text-7xl text-left">Contact Me:</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 , transition:{delay:0.6}}} className="md:flex justify-between">
          <div className="max-w-[40%] mx-5 text-left tracking-wider text-md mt-[50px]">
            <p>I would love to hear from you!</p>
            <p>Please feel free to contact me through this form with any questions or business inquiries.</p>
          </div>
          <div className="md:w-[40%] bg-cover bg-center custom-img bg-fixed pt-5 mr-10 ">
            <ThankYouDiv/>
          </div>
          
        </motion.div>
  </div>
    </div>
    
    
)
}
export default ContactThankYou;

function ThankYouDiv(){
  return(
    <div>
      <motion.div initial={{opacity:0, scale:.5}}  animate={{opacity:1, scale:1.2, transition:{duration:1, delay:1}}} className="bg-white/40 flex justify-evenly shadow-md rounded-xl  pt-8 pb-8 text-left">
        <div>
          <p className='text-xl'>Thank you for your message!</p>
          <p className='text-md'>I'll get back to you as soon as possible.</p>
        </div>
        <div className='pl-5 pt-2'>
          <Image src={'/assets/check.gif'} width={40} height={40}/>
        </div>
      </motion.div>
    </div>

  )
}