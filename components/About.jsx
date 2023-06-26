import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsMedium} from 'react-icons/bs';
import {GrDocumentUser} from 'react-icons/gr'


function About(){
  return(
    <div className="w-screen h-screen text-center bg-cover bg-center custom-img bg-fixed">
      <div className=" max-w-[1240px] justify-center items-center mx-auto">
        <div className=" justify-between items-center p-[6.5%]">
        <div className="text-left items-center justify-center max-w-[100%] pt-20 z-[90]">
          <div >
            <h1 className="text-7xl">Who am I?</h1>
          </div>
        <div className=" pl-5 max-w-[97%] py-10 z-[99] tracking-wider">
          <p>Born and raised in Brooklyn, New York, I grew up with an unexpected love for math. Most people dread Algebra and Calculus, but those were actually my favorite subjects growing up. I could work long hours solving a problem, just for that feeling of accomplishment for when I do solve it. This drove my passion for problem solving, and soon after my college career, I found a love for programming and became a full stack developer. </p> <br/>
          <p>Programming, to me, is creative problem-solving and it gives me the same feeling of accomplishment I sought growing up. With my customer experience background and my passion for developing and creative expression, I strive to create user-friendly, efficient yet engaging applications. I hope to continue to develop my skillset, and contribute to technology that improves our way of life. </p>
        </div>
        <div className=" pl-5 max-w-[100%] z-[99] tracking-wider">
          <h5>Learn more about me:</h5>
        </div>
        <div className="flex items-center text-center justify-center px-[45%] md:px-[30%] pt-[5%] z-[99]">
          <div className=" text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <AiFillLinkedin/>
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <AiFillGithub/>
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <BsMedium/>
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <GrDocumentUser/>
          </div>
        </div>
        </div>
        </div>
        </div>
        
      
    </div>
    
  )
}

export default About;