import Image from "next/image";
function Projects_Second(){
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
    <div className="w-full h-full text-center justify-center">
      <div className="md:max-w-[1240px] w-full h-full flex mx-[10%] items-center justify-center text-center ">
        <div className="items-center justify-center w-screen h-screen bg-cover bg-center custom-img bg-fixed md:pt-[0%] pt-[25%]">
            <div className="text-left">
            <h1 className="text-5xl md:text-7xl">Projects:</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 ">
            {projectImages.map((image)=> {
              return(
                <div>
                <Image src={image.url} width='80' height='80'/>
                </div>
              )
              
            })}
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Projects_Second;