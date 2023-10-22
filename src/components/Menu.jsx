import React, { useState } from "react";

const Menu = (open, setIsOpen) => {
   const [isVisible, setIsVisible] = useState(true);

   const handleButtonClick = () => {
      setIsVisible(false);
   };

   return (
      <div>
         {isVisible && (
            <div className="absolute top-0 flex flex-col gap-5 text-lg justify-center items-center h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm">
               <h1>Angel Gregory's Portfolio</h1>
               <div className="flex flex-col gap-5">
                  <a
                     onClick={handleButtonClick}
                     href="#_"
                     class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-lg group hover:text-black"
                  >
                     <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-50 rounded-full group-hover:w-56 group-hover:h-56"></span>
                     <span class="relative">Walk Around</span>
                  </a>
                  <a
                     onClick={handleButtonClick}
                     href="#_"
                     class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-lg group hover:text-black"
                  >
                     <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-50 rounded-full group-hover:w-56 group-hover:h-56"></span>
                     <span class="relative">Controls</span>
                  </a>
                  {/* Add your overlay content here */}

                  {/* Add your overlay content here */}
               </div>
            </div>
         )}
      </div>
   );
};

export default Menu;
