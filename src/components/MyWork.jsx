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
            <div className="">
               <img className="relative h-[70%] aspect-video" src={bg} alt="" />
            </div>
         </div>
      </div>
   );
};

export default MyWork;
