import Link from "next/link";
import Image from "next/image";

function ProjectList({image}){
  return(
    <div className="bg-cover bg-center custom-img bg-fixed bg-repeat">
    <div className="grid grid-cols-1 text-center pt-5 justify-center items-center p-2 mx-[15%]">
    <div className="bg-white/20 md:flex items-center justify-evenly hover:scale-[1.05] rounded-xl p-2 ease-in-out duration-200">
      <div className="pr-5 group">
        <Image src={image.url} width='450' height='450'/>
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
      <div className="text-left md:max-w-[40%] mx-5">
        {image.description.map((sentence)=>{
          return(
            <p className="text-sm tracking-wider" key={sentence}>{sentence}</p>
          )
        })}
      </div>
    </div>
  </div>
    </div>
    
  )
}
export default ProjectList;