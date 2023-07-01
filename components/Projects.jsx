import {React, useState} from "react";

function Projects(){

  const [projectSelect, setProjectSelect]= useState('')
  // function handleProject(e){
  //   console.log(e.target.text)
  //   setProjectSelect(e.target.value)
  // }
  console.log(projectSelect)

  return(
    <div className="w-screen h-screen text-center bg-cover bg-center custom-img bg-fixed">
      <div className=" max-w-[1240px] justify-center items-center mx-auto">
        <div className=" justify-between items-center p-[6.5%] pt-[600px] md:pt-[10%] max-w-[98%]">
        <div className="text-left pb-[10%]">
          <h1 className="text-5xl md:text-7xl">Projects I've Created:</h1>
        </div>
        <div className="flex justify-between items-center mx-auto ">
          <div className="rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]">
            <h5 onClick={()=> setProjectSelect('Self/Full')}>Self/Full</h5>
          </div>
          <div className="rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]">
            <h5 onClick={()=> setProjectSelect('Critiquer')}>Critiquer</h5>
          </div>
          <div className="rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer p-[20px]">
            <h5 onClick={()=> setProjectSelect('MovieZone')}>MovieZone</h5>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;