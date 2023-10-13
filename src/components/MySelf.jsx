import React, { useEffect, useState } from "react";
import "animate.css";
import ag from "../assets/images/ag.png";
import background from "../assets/images/background-cartoon.jpg";
import ToFrame from "./ToFrame.jsx";
import { GrClose } from "react-icons/gr";
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
   font,
   lgHover,
} from "./styles";
import Questions from "./Questions";
const MySelf = ({ isClicked, setIsClicked }) => {
   const [showContent, setShowContent] = useState(0);

   const liClick = (index) => {
      setShowContent(index);
   };
   ToFrame();
   const [isIconHovered, setIsIconHovered] = useState(false);
   const handleButtonClick = () => {
      // Add your button click logic here
      console.log("Button clicked!"); // Verify if the click event is being triggered
   };

   return (
      <div>
         <style jsx global>{`
            @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Inter:wght@300;700&display=swap");

            body {
               margin: 0px;
               padding: 0px;
            }

            /* Apply the font to an element */
            .myText {
               font-family: "IBM Plex Mono", monospace;
               font-family: "Inter", sans-serif;
            }
            ul li:hover {
               text-decoration: underline;
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

                     <div
                        style={{
                           ...col.span2,
                           padding: "2rem 5rem",
                           ...font.nav,
                        }}
                     >
                        <div style={{ paddingRight: "5rem" }}>
                           <ul
                              style={{
                                 paddingLeft: "0",
                                 listStyleType: "none",
                                 ...flex,
                                 justifyContent: "space-between",
                              }}
                           >
                              <li
                                 style={{ cursor: "pointer" }}
                                 onClick={() => liClick(0)}
                              >
                                 Who
                              </li>
                              <li
                                 style={{ cursor: "pointer" }}
                                 onClick={() => liClick(1)}
                              >
                                 What
                              </li>
                              <li
                                 style={{ cursor: "pointer" }}
                                 onClick={() => liClick(2)}
                              >
                                 Where
                              </li>
                              <li
                                 style={{ cursor: "pointer" }}
                                 onClick={() => liClick(3)}
                              >
                                 When
                              </li>
                              <li
                                 style={{ cursor: "pointer" }}
                                 onClick={() => liClick(4)}
                              >
                                 Why
                              </li>
                           </ul>
                        </div>
                        <div style={{ ...absolute, margin: "10vh 0vh" }}>
                           <h1 style={{ ...font.bold }}>
                              {Questions[showContent].question}
                           </h1>
                           <p style={{ ...font.light, paddingRight: "15vw" }}>
                              {Questions[showContent].answer}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <img
                  src={ag}
                  style={{
                     ...absolute,
                     bottom: "0",
                     height: "130%",
                     left: "-3.5vw",
                  }}
               />
               <p
                  style={{
                     ...absolute,
                     top: "-30",
                     right: "-30",
                     fontSize: "2vh",
                     transition: "transform 0.4s, cursor 0.4s", // Add transitions for smooth effects
                     transform: isIconHovered
                        ? "scale(1.5) rotate(-90deg)"
                        : "scale(1) rotate(0deg)", // Enlarge and rotate on hover
                     cursor: isIconHovered ? "pointer" : "auto", // Change cursor to pointer on hover
                  }}
               >
                  <GrClose
                     onClick={() => {
                        setIsClicked(true);
                     }}
                     onMouseEnter={() => setIsIconHovered(true)} // Set isIconHovered to true on mouse enter
                     onMouseLeave={() => setIsIconHovered(false)} // Set isIconHovered to false on mouse leave
                  />
               </p>
            </div>
         </div>
      </div>
   );
};

export default MySelf;
