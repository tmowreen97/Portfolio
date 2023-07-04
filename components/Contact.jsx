function Contact(){
  return(
    <div className="w-screen h-screen text-center justify-center bg-cover bg-center custom-img bg-fixed">
      <div className="md:max-w-[1240px] w-full h-full flex items-center justify-center text-center ">
        <div className="mx-[auto] ">
          <div className="mx-[15%]">
            <h1 className="text-5xl md:text-7xl text-left">Contact Me:</h1>
            <p className="text-left ">I would love to hear from you! Leave your name and email so I can get back to you!</p>
          </div>
          
        </div>
      <div class="w-full max-w-[35%] max-h-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
          <p class="text-red-500 text-xs italic">Please write a message.</p>
        </div>
        <div class="flex items-center justify-center">
          <button class="rounded shadow text-[#696969] bg-white/70 shadow-gray-600/90  hover:bg-slate-600/50 hover:text-[#F9FBFD] ease-in-out duration-200 cursor-pointer p-[10px] focus:shadow-outline " type="button">
            Send
          </button>
          {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a> */}
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        {/* &copy;2020 Acme Corp. All rights reserved. */}
      </p>
  </div>
    </div>
    </div>
    
    
)
}

export default Contact;