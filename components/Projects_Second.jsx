import Image from "next/image";
import Link from "next/link";
import ProjectList from "./ProjectList";
import {motion} from 'framer-motion';
import { useState } from "react";

function Projects_Second(){
  let timeDelay = 0.6
  const projectImages = [{
    title: "Self/Full",
    gif: "/assets/self-full-gif-2.gif",
    tag: "Live a Full Life with Self-Care",
    url: "/assets/selffull-pic.png",
    description: ["Self/Full is the one stop place for all your self-care needs.", "Self-care has been clinically proven to help alleviate depression and anxiety. At Self/Full you can learn about the different types of self-care, their benefits and how you can incorporate them in your life. You can also learn from others who have started their self-care journey."],
    github: "https://github.com/tmowreen97/Phase-5-Project",
    demo: "https://youtu.be/r5Gfvc3t7EI",
    stack: "React, JavaScript, HTML, CSS, Ruby, Ruby on Rails, PostgreSQL"
    //0
  }, 
  {
    title: "Critiquer",
    gif: "/assets/critiquer-gif.gif",
    tag: "Where Everyone's a Critic",
    url: "/assets/critiquer.png",
    description: ["View and critique movies with other users.", "As a movie lover I created this application where users can see and review a list of movies, and see other user reviews as well. The list of movies is populated by those manually added to the collection by the users, in addition to the ones already in the database. Critiquer is a great place for people to find new movies to watch and share their opinion on their favorites."],
    github: "https://github.com/tmowreen97/Phase-4-Project",
    demo: "https://youtu.be/A8pnMy8bvwE",
    stack: "React, JavaScript, HTML, CSS, Ruby, Ruby on Rails, PostgreSQL"
    //1
  }, 
  {
    title: "MovieZone",
    gif: "/assets/moviezone-gif.gif",
    tag: "Your Ultimate Movie Destination",
    url: "/assets/movie-zone.png",
    description: ["Are you a movie buff? Enter the MovieZone!",  "Doubling down on my love for movies, in this application any user can view a list of movies that are part of the database, check out movies based on genres and finally add new movies and genres to the collection."],
    github: "https://github.com/tmowreen97/phase-3-frontend",
    demo: "https://youtu.be/kcz9E44IfzY",
    stack: "React, JavaScript, HTML, CSS, Ruby, Ruby on Rails"
    //2
  }]
  // 45 initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:0.2}}}
  // 54 animate={{opacity:1, transition:{delay:timeDelay}}}
  return(
    <div className="w-screen min-h-screen text-center justify-center pb-20 pt-4">
      <div className=" w-screen min-h-[1240px] flex items-center justify-center text-center ">
        <div className="w-screen h-screen mb-[5%]">
          {/* <div className=""> */}
          <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:0.2}}} className="text-left mx-[15%] mb-2">
            <h1 className="text-5xl md:text-7xl">Projects:</h1>
          </motion.div>
          <motion.div className="justify-center ">
            {
              projectImages.map((image)=>{
                timeDelay+=0.4
                return(
                  <motion.div initial={{ opacity: 0 }} animate={{opacity:1, transition:{delay:timeDelay}}}  key={image} className="" >
                    <ProjectList image={image}/>
                  </motion.div>
                  
                )
              })
            }

          </motion.div>  
        {/* </div> */}
        </div>
      </div>
      <div className='bg-cover bg-center custom-img bg-fixed text-center justify-center items-center text-xs md:pt-[10%] pt-[200%] flex'>
            <p>© Tasreen Mowreen 2023 |</p>
            <p></p>
            <a className="text-xs pl-1" target="_blank" href="https://media.giphy.com/media/Skv6LLzPcpxv3uEaCn/giphy.gif" rel="noopener noreferrer">
              background img source
            </a>
          </div>
    </div>
  )
}

export default Projects_Second;