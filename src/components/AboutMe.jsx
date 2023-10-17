import React from "react";
import iframe from "./iframe.css?inline";
const AboutMe = () => {
   return (
      <div>
         <style>{iframe}</style>
         <div className="h-screen w-screen flex xl:items-center justify-center">
            <div className="w-[80%] h-[80%]">
               <div className="relative top-[15%] md:top-[5%] aspect-[3/4] xl:aspect-video w-full bg-white">
                  <div className="block xl:flex">
                     <div>1</div>
                     <div>2</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutMe;
