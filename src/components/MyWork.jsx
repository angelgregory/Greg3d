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
         <style>{iframe}</style>
         <div className="flex justify-center items-center h-screen">
            <div className="relative w-[70%]">
               <img className="w-full aspect-video" src={bg} alt="" />
               <div className="absolute top-0 h-[90%] w-full">
                  <div className="p-10 h-full">
                     <div
                        className="w-[10%] cursor-pointer pb-5"
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
                     <div className="w-[10%] cursor-pointer">
                        <img
                           src={mail}
                           onPointerEnter={(e) =>
                              (e.currentTarget.src = mailOpen)
                           }
                           onPointerLeave={(e) => (e.currentTarget.src = mail)}
                           alt="Email Me"
                        />
                        <p className="text-center font-nav">Email Me</p>
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-0 w-full h-[10%]">
                  <img
                     className="absolute left-10 cursor-pointer top-[-30] scale-75 hover:scale-100"
                     src={off}
                     onPointerDown={() => {
                        setIsClicked(true);
                     }}
                     alt=""
                  />
               </div>
               {isWork ? (
                  <div className="w-[80%] h-[80%] absolute top-5 right-5 rounded-md overflow-clip">
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
