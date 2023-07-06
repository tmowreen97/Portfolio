import {React, useState} from "react";
import Link from "next/link";
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs";

function Projects(){

  const [projectSelect, setProjectSelect]= useState(0)
  function handleRight(){
    if(projectSelect<2){
      setProjectSelect(projectSelect+1)
    } else{
      setProjectSelect(projectSelect-2)
    }
  }

  function handleLeft(){
    if(projectSelect>0){
      setProjectSelect(projectSelect-1)
    } else{
      setProjectSelect(projectSelect+2)
    }
  }
  return(
    <div className="w-screen h-screen text-center bg-cover bg-center custom-img bg-fixed">
      <div className=" max-w-[1240px] justify-center items-center mx-auto bg-cover bg-center custom-img bg-fixed">
        <div className=" justify-between items-center p-[6.5%] pt-[100px] md:pt-[10%] max-w-[98%] bg-cover bg-center custom-img bg-fixed '">
        <div className="text-left pb-[5%]">
          <h1 className="text-5xl md:text-7xl">Projects:</h1>
        </div>
        <div className="flex justify-between items-center mx-auto ">
          <div className=
          {
            projectSelect===0? "rounded-full shadow-xl text-[#F9FBFD] bg-slate-600/50 shadow-gray-600/90 hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]" : 
            "rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]"
          }>
            <h5 onClick={()=> setProjectSelect(0)}>Self/Full</h5>
          </div>
          <div className={
            projectSelect===1? "rounded-full shadow-xl text-[#F9FBFD] bg-slate-600/50 shadow-gray-600/90 hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]" : 
            "rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]"
          }>
            <h5 onClick={()=> setProjectSelect(1)}>Critiquer</h5>
          </div>
          <div className={
            projectSelect===2? "rounded-full shadow-xl text-[#F9FBFD] bg-slate-600/50 shadow-gray-600/90 hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]" : 
            "rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]"
          }>
            <h5 onClick={()=> setProjectSelect(2)}>MovieZone</h5>
          </div>
          
          </div>
          <div className="w-full h-full text-center bg-cover bg-center custom-img bg-fixed justify-center items-center">
            <Carousel projectSelect={projectSelect} handleLeft={handleLeft} handleRight={handleRight}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;


function Carousel ({projectSelect, handleRight, handleLeft}){
  const projectImages = [{
    url: "/assets/self-full-categories.png",
    github: "https://github.com/tmowreen97/Phase-5-Project",
    demo: "https://youtu.be/r5Gfvc3t7EI"
    //0
  }, 
  {
    url: "/assets/critiquer.png",
    github: "https://github.com/tmowreen97/Phase-4-Project",
    demo: "https://youtu.be/A8pnMy8bvwE"
    //1
  }, 
  {
    url: "/assets/movie-zone.png",
    github: "https://github.com/tmowreen97/phase-3-frontend",
    demo: "https://youtu.be/kcz9E44IfzY"
    //2
  }]


  return(

    <div className="max-w-[800px] h-[600px]  m-auto py-16 px-4 relative group mb-[0%] bg-cover bg-center custom-img bg-fixed '">
      <div 
      style={{backgroundImage:`url(${projectImages[projectSelect].url})`}}
      className="w-full h-full rounded-2xl bg-center bg-cover duration-500 hover:scale-105 hover:opacity-90"
      >
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-40%] left-5 text-2xl p-2 text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] rounded-full">
        <BsArrowLeftCircle onClick={()=> handleLeft()} size={40}/>
      </div>
      <div className="items-center text-center flex justify-center">
        <div className="hidden group-hover:block  absolute md:top-[50%] top-[45%] translate-x-0 translate-y-[-40%] left-[40%] md:left-[35%] text-xl p-2 text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] rounded-full">
          <Link href={`${projectImages[projectSelect].github}`}legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">GitHub</a>
          </Link>
        </div>
        <div className="hidden group-hover:block absolute md:top-[50%] top-[55%] translate-x-0 translate-y-[-40%] md:right-[35%] right-[40%] text-xl p-2 text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] rounded-full">
        <Link  href={`${projectImages[projectSelect].demo}`} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">Demo</a>
          </Link>
        </div>
        
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-40%] right-5 text-2xl p-2 text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] rounded-full">
        <BsArrowRightCircle onClick={()=> handleRight()} size={40}/>
      </div>
      </div>
    </div>
  )
}

