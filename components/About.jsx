import Image from 'next/image';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsMedium, BsPersonLinesFill} from 'react-icons/bs';
import {GrDocumentUser} from 'react-icons/gr'
import Link from 'next/link';
import {motion} from 'framer-motion';


function About(){
  const skills_array = [
    {
      img:'/assets/JS.png',
      name: 'JavaScript'
    }, 
    {
      img: '/assets/html-logo.png',
      name: 'HTML5'
    }, 
    {
      img: '/assets/css-logo.png',
      name: 'CSS3'
    }, 
    {
      img: '/assets/react-logo.png',
      name: 'React'
    }, 
    {
      img: '/assets/next-js-logo.png',
      name: 'NextJS'
    }, 
    {
      img: '/assets/tailwind-logo.png',
      name: 'Tailwind CSS'
    }, 
    {
      img: '/assets/ruby-logo.png',
      name: 'Ruby'
    }, 
    {
      img: '/assets/ruby-on-rails-logo.png',
      name: "Rails"
    },
    {
      img: '/assets/python-logo.png',
      name: 'Python'
    },
    {
      img: '/assets/framer-motion-logo-.png',
      name: 'Framer Motion'
    }
    // {
    //   img: '/assets/sql-logo.png',
    //   name: "SQL"
    // }, 
    // {
    //   img: '/assets/postgresql-logo.png',
    //   name: "PostgreSQL"
    // }, 
    // {
    //   img: '/assets/sinatra-logo.png',
    //   name: "Sinatra"
    // }
  ]

  return(
    <div id='about' className="w-full min-h-full text-center justify-center bg-cover bg-center custom-img bg-fixed z-[90] pb-2">
      <div className="max-w-[1240px] w-full h-full flex md:mx-[10%] mx-[15%] items-center justify-center text-center">
        <div className="flex items-center justify-center w-full h-full bg-cover bg-center custom-img bg-fixed md:pt-5 ">
        <div className="text-left items-center justify-center md:pt-[8%]  md:max-w-[82%] w-full h-screen pb-5 mt-[40%] md:mt-[0%] ">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.2}}} className='bg-cover bg-center custom-img bg-fixed'>
            <h1 className="text-4xl md:text-7xl ">Who am I?</h1>
          </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.6}}} className=" font-medium md:text-sm md:pl-5 pt-10 pb-8 z-[99] tracking-wider bg-cover bg-center custom-img bg-fixed items-center justify-between mr-10 md:mr-0">
          <p className='pb-3'>After serving as an Associate Banker at Chase Bank for approximately five years, I made the exciting decision to venture into the technology industry. My unwavering passion for creative problem-solving has been the driving force behind my journey. With a Bachelor's degree in Mathematics and Graphic Design, I gained a valuable combination of skills that laid the foundation for my future pursuits.</p>
          <p className='pb-3'>During my quest for a new challenge, I came across web development and immediately fell in love with it. Through an immersive Software Engineering Bootcamp, I acquired the necessary expertise to become a proficient Full Stack Developer. Since then, my focus has been on crafting captivating and user-friendly applications, always with a commitment to delivering an exceptional user experience. As I actively seek out professional opportunities, my goal is to continuously develop my skills and demonstrate my creativity within the technology domain, aiming to make a meaningful impact in this ever-evolving field.</p>
          <p className='font-style: italic pb-3 '>My hobbies include gaming, watching scary movies, doing nails and spending time with my friends and family.</p>
        </motion.div>
        <div className='ml-[-60px] md:ml-[0px] custom-img bg-fixed w-[420px] md:w-auto bg-cover flex md:bg-none text-center items-center justify-center'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:1}}} className="text-left md:pl-5 md:ml-[0%]  z-[99] tracking-wider pt-0 md:w-auto ml-10 ">
          <h5 className='w-[300px] md:w-auto'>My skills include:</h5>
          <div className='flex flex-wrap min-w-full mx-[-8%] md:mx-[0] justify-center text-center pt-[2%] bg-cover custom-img bg-fixed md:bg-none'>
           {skills_array.map((skill)=> {
            return(
              <motion.div whileHover={[{scale:1.35},{rotate:-5}]}   key={skill} className=' px-[15px] py-[10px] md:mx-2 rounded-full bg-white/70 object-cover shadow-xl cursor-pointer'> 
                <div className=' '>
                  <Image src={skill.img} alt="/" width={35} height={35}/>
                </div>
                <div className="opacity-0 bg-slate-600/50 rounded-full hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-center text-sm text-white font-semibold">{skill.name}</div>
              </motion.div>
            )
          })} 
          </div>
        </motion.div>
        </div>
        
        <div className='ml-[-60px] md:ml-[0px]'>
         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:1.4}}} className="md:pl-5 min-w-full z-[99] tracking-wider pt-[2%] pb-2 bg-cover bg-center custom-img bg-fixed">
          <h5 className='ml-5 md:ml-[0]'>Learn more about me:</h5>
        {/* </motion.div> */}
        <div className="flex min-w-screen md:mx-[0] justify-center bg-cover bg-center custom-img bg-fixed  px-[40%] md:px-[30%] pt-[2%] z-[99] ">
          <div className=" text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 md:p-8 p-5 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <Link href="http://linkedin.com/in/tasreenmowreen" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin/>
              </a>
            </Link>
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 md:p-8 p-5 mx-[12%]  hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <Link href="https://github.com/tmowreen97" legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <AiFillGithub/>
            </a>
            </Link>
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 md:p-8 p-5 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <Link href="https://medium.com/@tmowreen97" legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <BsMedium/>
            </a>
            </Link>
            
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 md:p-8 mx-[12%] p-5 hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <Link href="/assets/Tasreen Mowreen Resume_PDF.pdf" legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <BsPersonLinesFill/>
            </a>
            </Link>
            
          </div>

        </div>
        </motion.div> 
        </div>
        
        <div className='ml-[-60px] md:ml-[0px] md:pt-10 pt-4 text-center justify-center flex md:bg-none custom-img bg-fixed'>
            <div className='flex '>
              <p>© Tasreen Mowreen 2023 |</p>
              <p></p>
            <a className="text-xs pt-1 pl-1 " target="_blank" href="https://media.giphy.com/media/Skv6LLzPcpxv3uEaCn/giphy.gif" rel="noopener noreferrer">
              background img source
            </a>
            </div>
            
          </div>
        </div>
        </div>
    </div>
    </div>
    
    
  )
}

export default About;