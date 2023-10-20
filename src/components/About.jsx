import React, { useState } from "react";
import bg from "../assets/images/background-cartoon.jpg";
import ag from "../assets/images/ag.png";
import { useRef } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import Questions from "./Questions";

const About = ({ isClose, setIsClose }) => {
   const [isWork, setIsWork] = useState(false);
   const [isWorkFolder, setIsWorkFolder] = useState(false);
   const [showContent, setShowContent] = useState(0);

   const liClick = (index) => {
      setShowContent(index);
   };
   const ImageHover = ({ image1, image2, className }) => {
      const imageRef = useRef(null);

      return (
         <img
            onPointerEnter={() => {
               imageRef.current.src = image2;
            }}
            onPointerLeave={() => {
               imageRef.current.src = image1;
            }}
            src={image1}
            alt=""
            ref={imageRef}
            className={className}
         />
      );
   };
   return (
      <div>
         <div className="fixed top-0 left-0 h-screen w-screen z-10">
            <div className="w-[full] h-full flex justify-center items-center">
               <div className="bg-white portrait:w-full portrait:h-full landscape:h-[75%] portrait:aspect-[9/16] landscape:aspect-video rounded-3xl portrait:overflow-y-scroll no-scrollbar snap-mandatory snap-y relative">
                  <div
                     className="absolute z-10 bg-white rounded-full w-16 text-4xl flex justify-center m-4 cursor-pointer"
                     onClick={() => setIsClose(true)}
                  >
                     <IoReturnDownBackOutline className=" text-slate-800" />
                  </div>
                  <div className="landscape:flex h-full relative">
                     <div className="landscape:w-[40%] h-full snap-center">
                        <div className="w-full flex justify-center">
                           <img
                              src={ag}
                              alt=""
                              className="absolute landscape:h-[130%] object-cover h-full bottom-0"
                           />
                        </div>
                        <div className="w-full h-full overflow-clip landscape:rounded-l-3xl">
                           <img
                              src={bg}
                              alt=""
                              className="h-full w-full object-cover"
                           />
                        </div>
                     </div>
                     <div className="landscape:w-[60%] h-full snap-center z-30 p-5 font-nav relative portrait:pt-10 landscape:px-20">
                        <div className="cursor-pointer lg:text-2xl ">
                           <ul className="flex justify-between ">
                              <li onClick={() => liClick(0)}>Who</li>
                              <li onClick={() => liClick(1)}>What</li>
                              <li onClick={() => liClick(2)}>Where</li>
                              <li onClick={() => liClick(3)}>When</li>
                              <li onClick={() => liClick(4)}>Why</li>
                           </ul>
                        </div>
                        <div className="h-full flex flex-col justify-center gap-10 px-10">
                           <h1 className="font-bold lg:text-6xl text-lg">
                              {Questions[showContent].question}
                           </h1>
                           <p className="font-light lg:text-2xl text-md">
                              {Questions[showContent].answer}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
