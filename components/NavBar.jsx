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
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/assets/TMlogo.png" alt="/" width='125' height='50'/>
      <div>
        <ul className="hidden md:flex">
        <Link href='/'>
          <li className="ml-10 text-sm uppercase hover:text-[#ECF4FA]">Home</li>
        </Link>
        <Link href='/'>
          <li className="ml-10 text-sm uppercase hover:text-[#ECF4FA]">About</li>
        </Link>
        <Link href='/'>
          <li className="ml-10 text-sm uppercase hover:text-[#ECF4FA]">Skills</li>
        </Link>
        <Link href='/'>
          <li className="ml-10 text-sm uppercase hover:text-[#ECF4FA]">Projects</li>
        </Link>
        <Link href='/'>
          <li className="ml-10 text-sm uppercase hover:text-[#ECF4FA]">Contact</li>
        </Link>
        </ul>
        <div onClick={handleMenu} className="md:hidden">
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      </div>
      {/* overlay for behind when menu is toggled */}
      <div className={toggleMenu ? "fixed left-0 top-0 w-full h-screen bg-black/40": ''}>
        <div className={
          toggleMenu ? "fixed left-0 top-0 w-[50%] h-screen bg-[#ECF4FA] ease-in duration-300 p-10": "fixed left-[-100%] top-0 ease-in-duration 300 p-10"
        }>
          {/* top section of menu bar */}
          <div className="flex w-full items-center justify-between">
            <Image src="/../public/assets/TMlogo.png" alt="/" width='80' height='50'/>
            <div onClick={handleMenu} className="rounded-full shadow-lg shadow-gray-400 p-2 hover:bg-slate-600/50">
              <AiOutlineClose/>
            </div>
          </div>
          <div className="border-b border-gray-300 my-10">
            <p className="w-[85%] md:w-[90%]">Let's create something together</p>
          </div>
          {/* Menu list */}
          <div className="py-4 px-4 flex flex-col">
            <ul className="uppercase text-sm">
              <Link href='/'>
                <li className="py-4 hover:font-bold hover:border-b">Home</li>
              </Link>
              <Link href='/'>
                <li className="py-4 hover:font-bold hover:border-b">About</li>
              </Link>
              <Link href='/'>
                <li className="py-4 hover:font-bold hover:border-b">Skills</li>
              </Link>
              <Link href='/'>
                <li className="py-4 hover:font-bold hover:border-b">Projects</li>
              </Link>
              <Link href='/'>
                <li className="py-4 hover:font-bold hover:border-b">Contact</li>
              </Link>
            </ul>
            {/* Connect menu */}
            <div className="pt-[60px]">
              <p className="my-8 uppercase tracking-widest text-sm">Let's connect:</p>
              <div className="flex justify-between items-center w-full sm-w-[80%] px-[20%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 hover:bg-slate-600/50">
                  <AiFillLinkedin/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 hover:bg-slate-600/50">
                  <AiFillGithub/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 hover:bg-slate-600/50">
                  <AiOutlineMail/>
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