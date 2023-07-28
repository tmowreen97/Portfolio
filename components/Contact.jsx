import {motion} from 'framer-motion';
import { useContext, useState } from 'react';
import Image from 'next/image';
// import {ThankYouContext} from '../pages/contact'


function Contact(){
  const [showThankYou, setShowThankYou] = useState(false)
  // let {isThankYou} = useContext(ThankYouContext)
  // console.log({isThankYou})
  // function handleSubmit(e){
  //   setShowThankYou(true)
  // }
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
          <div className="md:w-[45%] bg-cover bg-center custom-img bg-fixed ">
            <ContactForm setShowThankYou={setShowThankYou}/>
          </div>
          
        </motion.div>
  </div>
    </div>
    
    
)
}

export default Contact;


function ContactForm({setShowThankYou}){
  return(
    <form 
    action="https://formsubmit.co/tmowreen97@gmail.com" 
    method="POST" 
    className="bg-white/40 shadow-md rounded-xl px-10 pt-8 pb-8 mb-4"
    // onSubmit={(e)=> handleSubmit(e)}
    >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="name" 
      type="text" 
      name="name" 
      placeholder="Enter your name"
      required
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="email" 
      name="email" 
      type="email" 
      placeholder="Enter your email"
      required
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Message
      </label>
      <textarea className="max-h-[125px] min-h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="message" 
      type="text" 
      name="message" 
      placeholder="Enter your message"
      required
      />
    </div>
    <input type="hidden" name="_next" value="https://www.tasreen-mowreen.com/thank-you"/>
    <input type="hidden" name="_captcha" value="false"/>
    <div className="flex items-center justify-center">
      <button className="rounded-xl shadow text-[#696969] bg-white/70 shadow-gray-600/90  hover:bg-slate-600/50 hover:text-[#F9FBFD] ease-in-out duration-200 cursor-pointer p-[10px] focus:shadow-outline " 
      type="submit">
        Send
      </button>
    </div>
  </form>
  )
}