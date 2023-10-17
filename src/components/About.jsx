import React, { useState } from "react";
import bg from "../assets/images/background-cartoon.jpg";
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
               <div className="bg-white portrait:w-[70%] landscape:h-[75%] portrait:aspect-[9/16] landscape:aspect-video rounded-3xl portrait:overflow-clip">
                  <div className="landscape:flex h-full">
                     <div className="landscape:w-[40%] h-full">
                        <div className="w-full h-full overflow-clip rounded-l-3xl">
                           <img src={bg} alt="" className="h-full bg-cover" />
                        </div>
                     </div>
                     <div className="landscape:w-[60%] h-full">2</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
