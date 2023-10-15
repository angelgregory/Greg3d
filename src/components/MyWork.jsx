import React from "react";
import iframe from "./iframe.css?inline";
import folder from "../assets/images/folder.png";
import folderOpen from "../assets/images/folder-open.png";
import mail from "../assets/images/mail.png";
import mailOpen from "../assets/images/mail-open.png";
import bg from "../assets/images/desktop-bg.png";
import off from "../assets/images/turn-off.png";
const MyWork = () => {
   return (
      <div>
         <style>{iframe}</style>
         <div className="flex justify-center items-center h-screen">
            <div className="relative w-[70%]">
               <img className="w-full aspect-video" src={bg} alt="" />
               <div className="absolute top-0 h-[90%] ">
                  <div className="p-[2%] ">
                     <div className="w-[10%]">
                        <img
                           className=""
                           src={folder}
                           onPointerEnter={(e) =>
                              (e.currentTarget.src = folderOpen)
                           }
                           onPointerLeave={(e) =>
                              (e.currentTarget.src = folder)
                           }
                           alt=""
                        />
                        <p className="text-center font-nav">My Portfolio</p>
                     </div>
                     <div className="w-[10%]">
                        <img
                           src={mail}
                           onPointerEnter={(e) =>
                              (e.currentTarget.src = mailOpen)
                           }
                           onPointerLeave={(e) => (e.currentTarget.src = mail)}
                           alt=""
                        />
                        <p className="text-center font-nav">Email Me</p>
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-0 h-[10%]">2</div>
            </div>
         </div>
      </div>
   );
};

export default MyWork;
