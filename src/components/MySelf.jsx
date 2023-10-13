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
} from "./styles";

const MySelf = ({ isClicked, setIsClicked }) => {
   ToFrame();
   const handleButtonClick = () => {
      // Add your button click logic here
      console.log("Button clicked!"); // Verify if the click event is being triggered
   };

   return (
      <div>
         {/* <link rel="stylesheet" type="text/css" href="/src/index.css" /> */}
         <div
            style={{
               ...flex,
               ...itemsCenter,
               ...justifyCenter,
               ...h.screen,
               ...bg.white,
            }}
         >
            <div>
               <div>
                  <div></div>
                  <div>
                     <div>
                        image
                        {/* <img src={background} /> */}
                     </div>
                     <div>
                        <div>
                           <ul>
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
