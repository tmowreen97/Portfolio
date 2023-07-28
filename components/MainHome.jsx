import Image from "next/image";
import Link from "next/link";
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import {motion, useInView} from 'framer-motion';
import { useState, useRef } from "react";

function MainHome(){
  const [view, setView]= useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  
// removed from 15 min-w-screen min-h-screen
//  might need to add div to line 19
  return(
    <div className="w-full h-full text-center justify-center">
      <div className="md:max-w-[1240px] w-full h-full md:flex mx-[15%] items-center justify-center text-center  ">
        <div className="flex items-center justify-center w-screen h-screen md:pt-[0%] pt-[25%] bg-cover bg-center custom-img bg-fixed ">
          <div className="md:pl-2 text-left items-center justify-center z-[99] md:max-w-[63%] tracking-wider">
             <h5>Hi, I'm</h5>
            <motion.h1  ref={ref} className={isInView ? "mr-2 pr-5 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-4xl text-white font-bold md:text-7xl md:mb-0 mb-10" : "mr-2 pr-5 overflow-hidden whitespace-nowrap border-r-4 border-r-white text-4xl text-white font-bold md:mb-0 mb-10 md:text-7xl"}>
              Tasreen Mowreen.
            </motion.h1> <br/>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.4}}} className="md:pl-5 md:max-w-[80%] max-w-[70%] z-[99] justify-center tracking-wider">
              <h6>A full-stack engineer.</h6>
              <h6>I create engaging, efficient and user-friendly applications.</h6>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.9}}} className="flex items-center justify-between max-w-[100%] md:mx-[0px] mx-[-10px] pt-[20px] md:pt-[0px] z-[99] ">
                <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 md:p-8 p-5 mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
                  <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillLinkedin/>
                    </a>
                  </Link>
                </div>
                <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 md:p-8 p-5 mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
                  <Link href="https://github.com/tmowreen97" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillGithub/>
                    </a>
                  </Link>
                </div>
                <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 md:p-8 p-5  mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
                  <Link href="/contact" legacyBehavior>
                    <a>
                      <AiOutlineMail/>
                    </a>
                  </Link>
                </div>
              </motion.div>
            </motion.div> 
            </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.9}}} className="pt-[5%] flex z-[99] opacity-90 md:pb-[50px] md:pr-[15px] md:pl-[100px] md:h-[60%] md:w-[100%] h-[20%] w-[30%] md:ml-[0%] ml-[-20%] pr-[20px]">
            <Image src={'/assets/me_coding.png'} width='325' height='325' alt='/'/>
          </motion.div>
          

        </div>
      </div>
    </div>
  )
}

export default MainHome;