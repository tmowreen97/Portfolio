import {React, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';

function NavBar(){
  const[toggleMenu, setToggleMenu]= useState(false)

  const handleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  return(
    <div className='fixed w-full h-20 z-[100] '>
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16 tracking-wider">
        <Link href='/'>
          <div className="hover:scale[1.25]">
            <Image src={"/assets/tm-logo-light-white.png"} alt="/" width='100' height='45'/>
          </div>
        </Link>
      <div>
        <ul className="hidden md:flex">
        <Link href='/'>
          <li className="ml-10 text-sm uppercase hover:font-extrabold">Home</li>
        </Link>
        <Link href='/#about'>
          <li className="ml-10 text-sm uppercase hover:font-extrabold">About</li>
        </Link>
        <Link href='/projects'>
          <li className="ml-10 text-sm uppercase hover:font-extrabold">Projects</li>
        </Link>
        <Link href='/contact'>
          <li className="ml-10 text-sm uppercase hover:font-extrabold">Contact</li>
        </Link>
        </ul>
        <div onClick={handleMenu} className="md:hidden">
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      </div>
      {/* overlay for behind when menu is toggled */}
      <div className={toggleMenu ? "fixed left-0 top-0 w-full h-screen bg-black/40 tracking-wider": ''}>
        <div className={
          toggleMenu ? "fixed left-0 top-0 w-[75%] h-screen bg-[#20203d] ease-in duration-500 p-10": "fixed left-[-100%] top-0 h-screen ease-in duration-500 p-10 tracking-wider"
        }>
          {/* top section of menu bar */}
          <div className="flex w-full items-center justify-between">
            <Image src="/assets/tm-logo-light-white.png" alt="/" width='80' height='50'/>
            <div onClick={handleMenu} className="rounded-full shadow-lg shadow-black p-2 bg-slate-600 hover:bg-white/50 cursor-pointer">
              <AiOutlineClose/>
            </div>
          </div>
          <div className=" border-gray-300 my-10 ">
            <p className="w-[85%] md:w-[90%]">Let's create something together</p>
          </div>
          {/* Menu list */}
          <div className="py-4 px-4 flex flex-col tracking-wider ease-in-out duration-200">
            <ul onClick={handleMenu} className="uppercase text-sm">
              <Link href='/'>
                <li className="py-4 hover:font-extrabold">Home</li>
              </Link>
              <Link href='/#about'>
                <li className="py-4 hover:font-extrabold">About</li>
              </Link>
              <Link href='/projects'>
                <li className="py-4 hover:font-extrabold">Projects</li>
              </Link>
              <Link href='/contact'>
                <li className="py-4 hover:font-extrabold">Contact</li>
              </Link>
            </ul>
            {/* Connect menu */}
            <div className="pt-[60px]">
              <p className="my-8 uppercase tracking-widest text-sm">Let's connect:</p>
              <div className="flex justify-between items-center w-full sm-w-[80%] px-[10%]">
                <div onClick={handleMenu} className="rounded-full shadow-lg shadow-black p-3 bg-slate-600 hover:bg-white/50 cursor-pointer hover:scale-[1.35] ease-in-out duration-200" >
                  <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillLinkedin/>
                    </a>
                  </Link>
                </div>
                <div onClick={handleMenu} className="rounded-full shadow-lg shadow-black p-3 bg-slate-600 hover:bg-white/50 cursor-pointer hover:scale-[1.35] ease-in-out duration-200">
                <Link href="https://github.com/tmowreen97" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillGithub/>
                    </a>
                  </Link>
                  
                </div>
                <div onClick={handleMenu} className="rounded-full shadow-lg shadow-black p-3 bg-slate-600 hover:bg-white/50 cursor-pointer hover:scale-[1.35] ease-in-out duration-200">
                <Link href="/contact" legacyBehavior>
                    <a>
                      <AiOutlineMail/>
                    </a>
                  </Link>
                </div>
                
                
                
              </div>
            </div>
          </div>

        </div>


      </div>
      

    </div>
  )
} 

export default NavBar;