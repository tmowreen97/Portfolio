import React, {useState} from "react";
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs";

function Carousel (){
  const projectImages = [{
    url: "/assets/self-full-categories.png",
    title: "Self/Full"
  }, 
  {
    url: "/assets/critiquer.png",
    title: "Critiquer"
  }, 
  {
    url: "/assets/movie-zone.png",
    title: "MovieZone"
  }]


  return(

    <div className="max-w-[800px] h-[600px]  m-auto py-16 px-4 relative group">
      <div 
      style={{backgroundImage:`url(${projectImages[0].url})`}}
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

export default Carousel;