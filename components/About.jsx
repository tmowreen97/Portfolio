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
    <div id='about' className="w-full h-full justify-center items-center text-center bg-cover bg-center custom-img bg-fixed z-[90] pb-5">
      <div className="md:max-w-[1240px] w-full h-full flex  text-center mx-[8%] justify-center items-center">
        <div className="flex items-center justify-center w-screen h-screen bg-cover bg-center custom-img bg-fixed md:pt-[0%] ">
        <div className="text-left items-center justify-center md:pt-[8%] max-w-[82%] pb-5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.2}}} className='bg-cover bg-center custom-img bg-fixed'>
            <h1 className="text-5xl md:text-7xl">Who am I?</h1>
          </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.6}}} className=" pl-5 py-10 z-[99] tracking-wider bg-cover bg-center custom-img bg-fixed  items-center justify-between">
          <p className=''>Through earning my bachelor's degree in mathematics and graphic design I learned excellent creative problem solving skills. I've also gained strong customer experience, team-working and time management skills through my 5 years working in retail banking. I'm passionate in creating both visually appealing, and efficient user-friendly applications to further improve the user experience and company success. My goal is to continue to use my analytical and creative skills, develop my skillset and contribute to technology that improves our way of life. </p> <br/>
          <p className='font-style: italic'>My hobbies include gaming, watching scary movies, doing nails and spending time with my friends and family.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:1}}} className=" pl-5 z-[99] tracking-wider">
          <h5>My skills include:</h5>
          <div className='flex flex-wrap justify-center pt-[2%]'>
           {skills_array.map((skill)=> {
            return(
              <motion.div whileHover={[{scale:1.35},{rotate:-5}]}   key={skill} className=' px-[15px] py-[10px] mx-3 rounded-full bg-white/70 object-cover shadow-xl cursor-pointer'> 
                <div className=' '>
                  <Image src={skill.img} alt="/" width={35} height={35}/>
                </div>
                <div className="opacity-0 bg-slate-600/50 rounded-full hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-center text-sm text-white font-semibold">{skill.name}</div>
              </motion.div>
            )
          })} 
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:1.4}}} className=" pl-5 max-w-[100%] z-[99] tracking-wider pt-[2%]">
          <h5>Learn more about me:</h5>
        {/* </motion.div> */}
        <div className="flex items-center text-center justify-center px-[60%] md:px-[30%] pt-[2%] z-[99] bg-cover bg-center custom-img bg-fixed">
          <div className=" text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <Link href="http://linkedin.com/in/tasreenmowreen" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin/>
              </a>
            </Link>
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-[12%]  hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <Link href="https://github.com/tmowreen97" legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <AiFillGithub/>
            </a>
            </Link>
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <Link href="https://medium.com/@tmowreen97" legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <BsMedium/>
            </a>
            </Link>
            
          </div>
          <div className="text-xl rounded-full shadow-xl text-[#696969] bg-white/70 shadow-gray-600/90 p-8 mx-[12%] hover:bg-slate-600/50 hover:text-[#F9FBFD] hover:scale-[1.35] ease-in-out duration-200 cursor-pointer">
            <Link href="/assets/Tasreen Mowreen Resume_pdf.pdf" legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <BsPersonLinesFill/>
            </a>
            </Link>
            
          </div>

        </div>
        </motion.div>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default About;