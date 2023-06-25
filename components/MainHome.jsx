import Image from "next/image";
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';

function MainHome(){
  return(
    <div className="w-screen h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full flex justify-center items-center mx-auto">
        <div className="flex items-center m-20">
          <div className="text-left mx-15 items-center max-w-[70%] z-[99]">
            <h6>Hi, I'm</h6>
            <h1 className="text-7xl">Tasreen Mowreen.</h1> <br/>
            <div className=" pl-5 max-w-[70%] z-[99]">
              <p>A full-stack engineer.</p>
              <p>My goal is to continue showcasing my creativity, utilize my analytical skills and contribute to the future of technology by creating efficient and user friendly applications.</p>
              <div className="flex items-center justify-center p-5 z-[99]">
              <div className="rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-400 p-5 mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] cursor-pointer">
              <AiFillLinkedin/>
            </div>
            <div className="rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-400 p-5 mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] cursor-pointer">
              <AiFillGithub/>
            </div>
            <div className="rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-400 p-5 mx-5 mt-10 hover:bg-slate-600/50 hover:text-[#F9FBFD] cursor-pointer">
              <AiOutlineMail/>
            </div>
            </div>
            </div>

            
            
          </div>
          <div className="pt-10 md:flex z-[99] opacity-90">
          <Image src={'/assets/me_coding.png'} width='350' height='350'alt='/'/>
          </div>
        </div>
        <div className="text-center items-center">

        </div>
      </div>
     
      
    </div>
  )
}

export default MainHome;