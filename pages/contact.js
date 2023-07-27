import Contact from "../components/Contact"
import NavBar from "../components/NavBar"
// import { createContext, useContext, useState } from 'react';
// const ThankYouContext = createContext()

const MyContact = () => {
  // const [isThankYou, setIsThankYou] = useState(false);
  return(
    // <ThankYouContext.Provider value={{isThankYou}}>
      <div>
        <NavBar/>
        <Contact/>
      </div>
    /* </ThankYouContext.Provider> */
    
    
  )
}

export default MyContact;