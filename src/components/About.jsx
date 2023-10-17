import React, { useState } from "react";
import bg from "../assets/images/background-cartoon.jpg";
import ag from "../assets/images/ag.png";
import { useRef } from "react";

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
               <div className="bg-white portrait:w-[70%] landscape:h-[75%] portrait:aspect-[9/16] landscape:aspect-video rounded-3xl portrait:overflow-y-scroll no-scrollbar snap-mandatory snap-y">
                  <div className="landscape:flex h-full relative">
                     <div className="landscape:w-[40%] h-full snap-center">
                        <div className="w-full flex justify-center">
                           <img
                              src={ag}
                              alt=""
                              className="absolute landscape:h-[130%] bottom-0"
                           />
                        </div>
                        <div className="w-full h-full overflow-clip landscape:rounded-l-3xl">
                           <img
                              src={bg}
                              alt=""
                              className="h-full object-fill"
                           />
                        </div>
                     </div>
                     <div className="landscape:w-[60%] h-full snap-center">
                        2
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
