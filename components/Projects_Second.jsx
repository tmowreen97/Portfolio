import Image from "next/image";
import Link from "next/link";
import ProjectList from "./ProjectList";
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
    <div className="w-screen min-h-screen text-center justify-center ">
      <div className=" w-screen min-h-[1240px] flex items-center justify-center text-center ">
        <div className="w-screen h-screen mb-[5%]">
          <div className="">
          <div className="text-left mx-[15%]">
            <h1 className="text-5xl md:text-7xl">Projects:</h1>
          </div>
          <div className="justify-center ">
            {
              projectImages.map((image)=>{
                return(
                  <ProjectList image={image}/>
                )
              })
            }

          </div>  
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects_Second;