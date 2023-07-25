import {motion} from 'framer-motion';

function Contact(){
  return(
    <div className="min-w-screen h-screen text-center justify-center bg-cover bg-center custom-img bg-fixed ">
      <div className="pt-[12%] mx-[15%] max-w-[1240px] justify-center items-center text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 , transition:{delay:0.2}}}className="mb-[15px]">
          <h1 className="text-5xl md:text-7xl text-left">Contact Me:</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 , transition:{delay:0.6}}} className="md:flex justify-between">
          <div className="max-w-[40%] mx-5 text-left tracking-wider text-md mt-[50px]">
            <p>I would love to hear from you!</p>
            <p>Please feel free to contact me through this form with any questions or business inquiries.</p>
          </div>
          <div className="md:w-[45%] bg-cover bg-center custom-img bg-fixed ">
            <ContactForm/>
          </div>
          
        </motion.div>
  </div>
    </div>
    
    
)
}

export default Contact;


function ContactForm(){
  return(
    <form class="bg-white/40 shadow-md rounded-xl px-10 pt-8 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your name"/>
      <p class="text-red-500 text-xs italic">Please write your name.</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
      <p class="text-red-500 text-xs italic">Please write your email.</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
        Message
      </label>
      <textarea class="max-h-[125px] min-h-[50px] shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your message"/>
      <p class="text-red-500 text-xs italic">Please write a message.</p>
    </div>
    <div class="flex items-center justify-center">
      <button class="rounded-xl shadow text-[#696969] bg-white/70 shadow-gray-600/90  hover:bg-slate-600/50 hover:text-[#F9FBFD] ease-in-out duration-200 cursor-pointer p-[10px] focus:shadow-outline " type="button">
        Send
      </button>
      {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
  )
}