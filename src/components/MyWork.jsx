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

const MyWork = ({ isClicked, setIsClicked }) => {
   const [isWork, setIsWork] = useState(false);
   return (
      <div>
         <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
         />
         <style>{iframe}</style>
         <div
            className="flex justify-center items-center h-screen"
            onClick={() => {
               {
                  isWork ? setIsWork(false) : null;
               }
               console.log(isWork);
            }}
         >
            <div className="relative w-[70%] h-[70%]">
               <img className="w-full h-full" src={bg} alt="" />
               <div className="absolute top-0 h-[90%] w-full">
                  <div
                     className={`flex justify-around lg:${"block p-10 h-full"}`}
                  >
                     <div
                        className=" w-[30%] lg:w-[10%] cursor-pointer pb-5"
                        onClick={() => {
                           setIsWork(!isWork), console.log(isWork);
                        }}
                     >
                        <img
                           className=""
                           src={folder}
                           onPointerEnter={(e) =>
                              (e.currentTarget.src = folderOpen)
                           }
                           onPointerLeave={(e) =>
                              (e.currentTarget.src = folder)
                           }
                           alt="My Portfolio"
                        />
                        <p className="text-center font-nav">My Portfolio</p>
                     </div>
                     <div className="w-[30%] lg:w-[10%] cursor-pointer">
                        <img
                           src={mail}
                           onPointerEnter={(e) =>
                              (e.currentTarget.src = mailOpen)
                           }
                           onPointerLeave={(e) => (e.currentTarget.src = mail)}
                           alt="Email Me"
                        />
                        <p className="text-center font-nav">Contact Me</p>
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-0 w-full h-[10%]">
                  <img
                     className="absolute left-10 cursor-pointer top-[-30] scale-75 hover:scale-100"
                     src={off}
                     onClick={() => {
                        setIsClicked(true);
                     }}
                     alt=""
                  />
               </div>
               {isWork ? (
                  <div
                     className={`w-[80%] h-[80%] absolute top-5 right-5 rounded-md overflow-clip`}
                  >
                     <IFrame>
                        <WorkFolder />
                     </IFrame>
                  </div>
               ) : null}
            </div>
         </div>
      </div>
   );
};

export default MyWork;
