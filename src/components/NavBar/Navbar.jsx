import React from 'react'
import Logo from "../../assets/logo.jpeg";
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-800
    dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-3 sm:py-2">
        <div className="container flex justify-between
        items-center">
            <div>
                <a href="#"
                    className="font-bold text-2xl 
                    sm:text-3xl flex gap-2"
                >
                    <img src={Logo} alt="Logo"
                    className="w-10 " />
                    Shopsky
                </a>
            </div>
            {/* search bar and order button */}
            <div>
                <div className="group">
                    <input 
                        type="text" 
                        placeholder="search" 
                        className="w-[200px] sm:w-[200px] 
                        group-hover:w-[300px] transition-all 
                        duration-300 rounded-full border
                         border-gray-300 px-2 py-1 focus:outline-none
                         focus:border-1 focus:border-primary" 
                    />
                </div>
            </div>
        </div>
     </div>
      {/* lower navbar */}
      <div></div>
    </div>
  )
}

export default Navbar