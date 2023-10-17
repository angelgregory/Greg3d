import React, { useState } from "react";
import iframe from "./iframe.css?inline";
import folder from "../assets/images/folder.png";
import folderOpen from "../assets/images/folder-open.png";
import mail from "../assets/images/mail.png";
import mailOpen from "../assets/images/mail-open.png";
import bg from "../assets/images/desktop-bg.png";
import off from "../assets/images/turn-off.png";
import WorkFolder from "./WorkFolder";
import IFrame from "./IFrame";
import { useRef } from "react";

const MyWork = ({ isClose, setIsClose }) => {
   const [isWork, setIsWork] = useState(false);
   const [isWorkFolder, setIsWorkFolder] = useState(false);
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
            <div className="w-full h-full flex justify-center items-center">
               <div className="border-2 border-black bg-slate-300 h-full w-full lg:h-[70%] lg:w-[70%] lg:aspect-video rounded-md overflow-clip">
                  <div className="h-[90%] p-10 flex ">
                     <div className=" w-[20%] h-full flex flex-col gap-10 text-center font-nav">
                        <div
                           className="w-[10vh] h-[10vh] flex flex-col items-center"
                           onClick={() => {
                              setIsWorkFolder(true);
                              console.log(isWorkFolder);
                           }}
                        >
                           <ImageHover
                              image1={folder}
                              image2={folderOpen}
                              className={"w-full cursor-pointer"}
                           />
                           <p>My Portfolio</p>
                        </div>
                        <div className="w-[10vh] h-[10vh] flex flex-col items-center">
                           <ImageHover
                              image1={mail}
                              image2={mailOpen}
                              className={"w-full cursor-pointer"}
                           />
                           <p>Contact Me</p>
                        </div>
                     </div>
                     <div className="w-[80%]">123123</div>
                  </div>
                  <div className="border-t-2 border-black bg-teal-500 w-full h-[10%] flex justify-center items-center">
                     <img
                        src={off}
                        alt=""
                        className="h-[80%] hover:h-[95%] cursor-pointer"
                        onClick={() => {
                           setIsClose(true);
                        }}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyWork;
