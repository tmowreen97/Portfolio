import Image from "next/image";
import Link from "next/link";
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import {motion} from 'framer-motion';

function MainHome(){
  return(
    <div className="w-full h-full text-center justify-center">
      <div className="md:max-w-[1240px] w-full h-full flex mx-[10%] items-center justify-center text-center ">
        <div className="flex items-center justify-center w-screen h-screen bg-cover bg-center custom-img bg-fixed md:pt-[0%] pt-[25%]">
          <div className="md:pl-2 text-left items-center justify-center z-[90] max-w-[63%] tracking-wider">
            <h5>Hi, I'm</h5>
            <motion.h1 className="mr-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold md:text-7xl">Tasreen Mowreen.</motion.h1> <br/>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.4}}} className="md:pl-5 max-w-[80%] z-[99] justify-center tracking-wider">
              <h6>A full-stack engineer.</h6>
              <h6>I create engaging, efficient and user-friendly applications.</h6>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.9}}} className="flex items-center justify-between max-w-[100%] md:mx-[0px] mx-[-10px] pt-[20px] md:pt-[0px] z-[99] ">
                <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
                  <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillLinkedin/>
                    </a>
                  </Link>
                </div>
                <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
                  <Link href="https://github.com/tmowreen97" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillGithub/>
                    </a>
                  </Link>
                </div>
                <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
                  <Link href="/contact" legacyBehavior>
                    <a>
                      <AiOutlineMail/>
                    </a>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="pt-[5%] flex z-[99] opacity-90 pr-[10px] pb-[50px] md:pr-[15px] md:pl-[100px]">
            <Image src={'/assets/me_coding.png'} width='325' height='325' alt='/'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MainHome;