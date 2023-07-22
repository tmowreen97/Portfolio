import Image from "next/image";
import Link from "next/link";
function Projects_Second(){
  const projectImages = [{
    url: "/assets/self-full-categories.png",
    description: ["A full-stack application that promotes self care to live a fuller life style.",  "Self/Full is the one stop place for all your self-care needs. Self-care has been clinically proven to help alleviate depression and anxiety. At Self/Full you can learn more about what self-care is, how you can incorporate it in your daily life, the benefits you gain from it and learn from others also working on their self-care."],
    github: "https://github.com/tmowreen97/Phase-5-Project",
    demo: "https://youtu.be/r5Gfvc3t7EI",
    stack: "React, JavaScript, HTML, CSS, Ruby, Ruby on Rails, PostgreSQL"
    //0
  }, 
  {
    url: "/assets/critiquer.png",
    description: ["View and critique movies with other users.", "As a movie lover (primarily horror) I created this application where users can view a list of movies, review them and see what other users think about them as well. The list of movies is populated by the movies manually added to the database by the users. This is a great place for people to find new movies to watch and share their opinion on their favorites."],
    github: "https://github.com/tmowreen97/Phase-4-Project",
    demo: "https://youtu.be/A8pnMy8bvwE",
    stack: "React, JavaScript, HTML, CSS, Ruby, Ruby on Rails, PostgreSQL"
    //1
  }, 
  {
    url: "/assets/movie-zone.png",
    description: ["Are you a movie buff? Enter the MovieZone!",  "Doubling down on my love for movies, in this application any user can view a list of movies that are part of the database, check out movies based on genres and finally add new movies and genres to the collection."],
    github: "https://github.com/tmowreen97/phase-3-frontend",
    demo: "https://youtu.be/kcz9E44IfzY",
    stack: "React, JavaScript, HTML, CSS, Ruby, Ruby on Rails"
    //2
  }]
  return(
    <div className="w-full h-full text-center justify-center ">
      <div className="md:max-w-[1240px] w-full h-full flex mx-[10%] items-center justify-center text-center  ">
        <div className="w-screen h-screen md:pt-[10%] pt-[25%]">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl">Projects:</h1>
          </div>
          <div className="grid grid-cols-1 text-center max-w-[1240px] pt-5 justify-center pb-[20%]">
            {projectImages.map((image)=> {
              return(
                <div className=" p-2 " key={image.url}>
                  <div className="bg-white/30 md:flex items-center justify-center ">
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
                    <div className="text-left md:max-w-[40%] ">
                      {image.description.map((sentence)=>{
                        return(
                          <p className="text-sm tracking-wider" key={sentence}>{sentence}</p>
                        )
                      })}
                    </div>
                  </div>
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