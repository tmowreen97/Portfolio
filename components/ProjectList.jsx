import Link from "next/link";
import Image from "next/image";
import {delay, motion} from "framer-motion";
import {BsArrowReturnRight} from 'react-icons/bs';
import { useState } from "react";

function ProjectList({image}){
  const [showGif, setShowGif] = useState(false)
  console.log(showGif)
  return(
    <div className="bg-cover bg-center custom-img bg-fixed bg-repeat z-95">
    <div className="grid grid-cols-1 text-center pt-5 justify-center items-center p-2 mx-[15%]">
    <div className="hover:bg-slate-500/30 bg-[#ECE4CC]/20 shadow-xl md:flex items-center justify-evenly hover:scale-[1.1] rounded-xl p-2 ease-in-out duration-200">
      <div className="pr-5 group ">
        <motion.div whileHover={[{ scale: 1.25 }, {rotate:-3}]} onMouseEnter={()=>setShowGif(true)} onMouseLeave={()=>setShowGif(false)} transition={{delay:.1}} className="z-99 rounded-xl overflow-hidden opacity-100">
          {showGif ? <Image src={image.gif} width='450' height='450'/> :<Image src={image.url} width='450' height='450'/>}
        </motion.div>
        <div className="flex relative">
        <div className="hidden group-hover:block absolute bottom-[100%] right-[50%] justify-center items-center text-xl p-2 text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] rounded-full m-2">
          <Link href={`${image.github}`}legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">GitHub</a>
          </Link>
        </div>
        <div className="hidden group-hover:block absolute bottom-[100%] left-[50%] items-center text-xl p-2 text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] rounded-full m-2">
        <Link  href={`${image.demo}`} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">Demo</a>
          </Link>
        </div>
      </div>
      </div>
      <div className="text-left md:max-w-[45%] mx-5 tracking-wide">
        <h5 className="font-extrabold">{image.title}</h5>
        <h6 className="italic text-sm">{image.tag}</h6>
        {image.description.map((sentence)=>{
          return(
            <p className="text-base/5 hover:text-shadow-lg" key={sentence}>{sentence}</p>
          )
        })}
        <div className="flex">
          <BsArrowReturnRight/>
          <p className="text-sm ml-2">{image.stack}</p>
        </div>
        
      </div>
    </div>
  </div>
    </div>
    
  )
}
export default ProjectList;