import React, { useEffect } from "react";
import "animate.css";
import ag from "../assets/images/ag.png";
import background from "../assets/images/background-cartoon.jpg";
import ToFrame from "./ToFrame.jsx";
import {
   flex,
   itemsCenter,
   justifyCenter,
   h,
   relative,
   rounded,
   bg,
   aspectVideo,
   overflow,
   absolute,
   grid,
   col,
} from "./styles";

const MySelf = ({ isClicked, setIsClicked }) => {
   ToFrame();
   const handleButtonClick = () => {
      // Add your button click logic here
      console.log("Button clicked!"); // Verify if the click event is being triggered
   };

   return (
      <div>
         <style jsx global>{`
            body {
               margin: 0px;
               padding: 0px;
            }
         `}</style>
         {/* <link rel="stylesheet" type="text/css" href="/src/index.css" /> */}
         <div
            style={{
               ...flex,
               ...itemsCenter,
               ...justifyCenter,
               ...h.screen,
            }}
         >
            <div
               style={{
                  ...relative,
                  ...rounded,
                  width: "60vw",
                  ...aspectVideo,
               }}
            >
               <div
                  style={{
                     ...relative,
                     ...rounded,
                     width: "60vw",
                     ...aspectVideo,
                     ...overflow.hidden,
                  }}
               >
                  <div
                     style={{
                        ...absolute,
                        width: "60vw",
                        ...aspectVideo,
                        ...bg.white,
                        opacity: "0.70",
                     }}
                  ></div>
                  <div
                     style={{
                        ...absolute,
                        ...grid.gc3,
                        ...h.full,
                        width: "60vw",
                     }}
                  >
                     <div style={{ ...relative, ...col.span1 }}>
                        <img
                           src={background}
                           style={{ ...h.full, width: "100%" }}
                        />
                     </div>
                     <div style={{ ...col.span2, padding: "1rem" }}>
                        <div style={{ paddingRight: "5rem" }}>
                           <ul
                              style={{
                                 ...flex,
                                 gap: "2.5rem",
                                 justifyContent: "flex-end",
                              }}
                           >
                              <li>Who</li>
                              <li>What</li>
                              <li>Where</li>
                              <li>When</li>
                              <li>Why</li>
                           </ul>
                        </div>
                        <div>
                           <h1>Who Is Greg</h1>
                           <p>ASDJKASDJKASDJKLKLASD</p>
                        </div>
                     </div>
                  </div>
               </div>
               image
               {/* <img src={ag} /> */}
            </div>
            <button
               onClick={() => {
                  setIsClicked(true);
               }}
            >
               Click Me
            </button>
         </div>
      </div>
   );
};

export default MySelf;
