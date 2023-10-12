import React, { useEffect } from "react";
import "animate.css";
import ag from "../assets/images/ag.png";
import background from "../assets/images/background-cartoon.jpg";
import ToFrame from "./ToFrame.jsx";

const AboutMe = ({ isClicked, setIsClicked }) => {
   ToFrame();
   const handleButtonClick = () => {
      // Add your button click logic here
      console.log("Button clicked!"); // Verify if the click event is being triggered
   };
   return (
      <div>
         <link rel="stylesheet" type="text/css" href="/index.css" />
         <div className="flex items-center justify-center h-screen myscreen">
            <div className="relative rounded-[50px] w-[60vw] aspect-[16/9]">
               <div className="relative rounded-[50px] w-[60vw] aspect-[16/9]  overflow-hidden">
                  <div className="absolute w-[60vw] aspect-[16/9] bg-white opacity-70 "></div>
                  <div className="absolute grid grid-cols-3 h-full">
                     <div className="relative MyImage col-span-1 ">
                        <img src={background} className="h-full" alt="" />
                     </div>
                     <div className="articles col-span-2">
                        <div className="navbar font-nav pr-10 pt-5">
                           <ul className="flex gap-10 justify-end">
                              <li>Who</li>
                              <li>What</li>
                              <li>Where</li>
                              <li>When</li>
                              <li>Why</li>
                           </ul>
                        </div>
                        <div className="absolute content px-24 py-[10%] ">
                           <h1 className="font-bold text-3xl text-black">
                              Who Is Greg
                           </h1>
                           <p className="font-light pt-3">
                              ASDJKASDJKASDJKLKLASD
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <img
                  src={ag}
                  className="ag absolute bottom-0 h-[calc(130%)] left-[-3.5vw]"
                  alt=""
               />
            </div>
            <button
               onClick={() => {
                  setIsClicked(true);
               }}
            >
               Click Me
            </button>
         </div>
      </div>
   );
};

export default AboutMe;
