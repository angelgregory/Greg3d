import React, { useState } from "react";
import { style, font } from "./MyWorksStyles";
import folder from "../assets/images/folder.png";
import folderOpen from "../assets/images/folder-open.png";
import mail from "../assets/images/mail.png";
import mailOpen from "../assets/images/mail-open.png";
import bg from "../assets/images/desktop-bg.png";
import off from "../assets/images/turn-off.png";
const MyWorks = ({ isClicked, setIsClicked }) => {
   const [isHovered, setIsHovered] = useState(false);

   return (
      <div>
         <style>{style}</style>
         <div className="h-screen w-screen flex middle center">
            <div className="relative container page ">
               <img className="bg w-full" src={bg} alt="" />
               <img
                  className="absolute bot off half z-1"
                  src={off}
                  alt=""
                  onClick={() => {
                     setIsClicked(true);
                  }}
               />
               <div className="folders  absolute top h-full">
                  <div className="flex flex-col middle">
                     <div className="folder w-full">
                        <img
                           className="w-full folder-scale"
                           src={folder}
                           onPointerEnter={(e) =>
                              (e.currentTarget.src = folderOpen)
                           }
                           onPointerLeave={(e) =>
                              (e.currentTarget.src = folder)
                           }
                           alt=""
                        />
                        <p style={{ ...font.nav }} className="folder-name">
                           My Works
                        </p>
                     </div>
                     <div className="folder w-full ">
                        <img
                           className="w-full folder-scale"
                           src={mail}
                           alt=""
                           onPointerEnter={(e) =>
                              (e.currentTarget.src = mailOpen)
                           }
                           onPointerLeave={(e) => (e.currentTarget.src = mail)}
                        />
                        <p style={{ ...font.nav }} className="folder-name">
                           Email Me
                        </p>
                     </div>
                  </div>
               </div>

               <div className="absolute backpage h-full w-full right-shadow"></div>
            </div>
         </div>
      </div>
   );
};

export default MyWorks;
