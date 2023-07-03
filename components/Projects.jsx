import {React, useState} from "react";
import ControlledCarousel from "./ControlledCarousel";
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs";

function Projects(){

  const [projectSelect, setProjectSelect]= useState(0)

  return(
    <div className="w-screen h-screen text-center bg-cover bg-center custom-img bg-fixed">
      <div className=" max-w-[1240px] justify-center items-center mx-auto bg-cover bg-center custom-img bg-fixed">
        <div className=" justify-between items-center p-[6.5%] pt-[600px] md:pt-[10%] max-w-[98%]">
        <div className="text-left pb-[5%]">
          <h1 className="text-5xl md:text-7xl">Projects I've Created:</h1>
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
            <Carousel projectSelect={projectSelect}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;


function Carousel ({projectSelect}){
  console.log(projectSelect)
  const projectImages = [{
    url: "/assets/self-full-categories.png",
    title: "Self/Full"
    //0
  }, 
  {
    url: "/assets/critiquer.png",
    title: "Critiquer"
    //1
  }, 
  {
    url: "/assets/movie-zone.png",
    title: "MovieZone"
    //2
  }]


  return(

    <div className="max-w-[800px] h-[600px]  m-auto py-16 px-4 relative group">
      <div 
      style={{backgroundImage:`url(${projectImages[projectSelect].url})`}}
      className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-40%] left-5 text-2xl p-2 text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] rounded-full">
        <BsArrowLeftCircle size={40}/>
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-40%] right-5 text-2xl p-2 text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] rounded-full">
        <BsArrowRightCircle size={40}/>
      </div>

      </div>
    </div>
  )
}

