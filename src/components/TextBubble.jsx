import React from "react";

const TextBubble = () => {
   return (
      <div>
         <div className="fixed top-0 left-0 h-screen w-screen">
            <div className="absolute top-[33%] flex w-full justify-center opacity-70 ">
               <div className="bg-white rounded-full p-5">
                  <h1 className="animate-typing overflow-hidden whitespace-nowrap">
                     nothing to see here yet
                  </h1>
               </div>
               <div
                  className="absolute top-16 z-10 w-0 h-0 
                            border-l-[10px] border-l-transparent
                            border-t-[15px] border-white
                            border-r-[10px] border-r-transparent"
               ></div>
            </div>
         </div>
      </div>
   );
};

export default TextBubble;
