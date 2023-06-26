import {BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi'; 
import {SiRubyonrails, SiNextdotjs, SiRubysinatra} from 'react-icons/si'
import {DiRubyRough} from 'react-icons/di'
import {BsFiletypeSql} from 'react-icons/bs'
import Image from 'next/image';



function Skills (){

  const skills_array = ['/assets/JS.png', '/assets/html-logo.png', '/assets/css-logo.png', '/assets/react-logo.png', '/assets/next-js-logo.png', '/assets/tailwind-logo.png', '/assets/ruby-logo.png', '/assets/ruby-on-rails-logo.png', '/assets/sql-logo.png', '/assets/postgresql-logo.png', '/assets/sinatra-logo.png']
  return(
    <div className="w-screen h-screen text-center bg-cover bg-center custom-img bg-fixed">
      <div className=" max-w-[1240px] justify-center items-center mx-auto">
        <div className="text-left flex-col items-center justify-center max-w-[100%] pt-[10%] z-[90] p-[6.5%]">
          <div className='text-left pb-[5%]'>
            <h1 className="text-7xl">Skills</h1>
          </div>
          <div>
            <div className=''>
              <div className='grid grid-cols-2 md:grid-cols-4 rounded-full gap-[10%] justify-between items-center'>
                {skills_array.map((skill)=> {
                  return(
                    <div className='items-center m-auto max-w-[200px] shadow-xl p-8 bg-white/60 hover:scale-125 ease-in duration-300'>
                      <Image src={`${skill}`} width={64} height={64}/>
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