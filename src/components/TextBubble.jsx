import React, { useEffect, useState } from "react";
import Dialogue from "./Dialogues";

const TextBubble = ({ query }) => {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsVisible(false);
      }, 3000); // Change 5000 to the number of milliseconds you want (5 seconds in this example)

      return () => clearTimeout(timer); // Clear the timer when the component unmounts
   }, []);

   if (!isVisible) {
      return null; // Return null when you want to "close" the component
   }
   let length = query.length;
   return (
      <div>
         <div className="fixed top-0 left-0 h-screen w-screen">
            <div className="absolute top-[33%] flex w-full justify-center opacity-70 ">
               <div className="bg-white rounded-full p-5">
                  <h1
                     className={
                        length < 5
                           ? "animate-typingShort overflow-hidden whitespace-nowrap font-nav"
                           : "animate-typingLong overflow-hidden whitespace-nowrap font-nav"
                     }
                  >
                     {console.log(length)}
                     {Dialogue[0][query]}
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
