import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu} from 'react-icons/ai';

function NavBar(){
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
          <li className="ml-10 text-sm uppercase hover:text-[#ECF4FA]">Contact</li>
        </Link>
        </ul>
        <div className="md:hidden">
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      </div>
      

    </div>
  )
} 

export default NavBar;