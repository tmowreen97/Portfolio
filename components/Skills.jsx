import {BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi'; 
import {SiRubyonrails, SiNextdotjs, SiRubysinatra} from 'react-icons/si'
import {DiRubyRough} from 'react-icons/di'
import {BsFiletypeSql} from 'react-icons/bs'
import Image from 'next/image';



function Skills (){

  const skills_array = ['/assets/JS.png', '/assets/html-logo.png', '/assets/css-logo.png', '/assets/react-logo.png', '/assets/next-js-logo.png', '/assets/tailwind-logo.png', '/assets/ruby-logo.png', '/assets/ruby-on-rails-logo.png', '/assets/sql-logo.png', '/assets/postgresql-logo.png', '/assets/sinatra-logo.png']
  return(
    <div className="w-full h-full text-center bg-cover bg-center custom-img bg-fixed pb-[7%]">
      <div className="max-w-[1240px] justify-center items-center mx-auto">
        <div className="text-left flex-col items-center justify-center max-w-[98%] pt-[40%] md:pt-[15%] z-[90] p-[6.5%]">
          <div className='text-left pb-[8%]'>
            <h1 className="text-5xl md:text-7xl">Skills</h1>
          </div>
          <div>
            <div >
              <div className='grid grid-cols-2 md:grid-cols-4 rounded-full gap-[10%] justify-center items-center'>
                {skills_array.map((skill)=> {
                  return(
                    <div key={skill} className='items-center mx-auto py-50px px-100px justify-between text-center max-w-[200px] shadow-xl p-6 md:p-8 bg-white/60 hover:scale-125 ease-in duration-300 cursor-pointer'>
                      <Image alt='/' src={`${skill}`} width={64} height={64}/>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Skills;