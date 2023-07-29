import React from "react";
import NavBar from "../components/NavBar";
import ContactThankYou from "../components/ContactThankYou";

function ThankYou(){
  return(
    <div>
      <NavBar/>
      <ContactThankYou/>
      {/* <div className='bg-cover bg-center custom-img bg-fixed text-center justify-center items-center text-xs pt-[5%] pb-5 flex'>
            <p>© Tasreen Mowreen 2023 |</p>
            <p></p>
            <a className="text-xs pl-1" target="_blank" href="https://media.giphy.com/media/Skv6LLzPcpxv3uEaCn/giphy.gif" rel="noopener noreferrer">
              background img source
            </a>
          </div> */}
    </div>
  )
}

export default ThankYou;