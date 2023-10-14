import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { globalStyles } from "./MySelfStyles";
export const Controls = {
   forward: "forward",
   back: "back",
   left: "left",
   right: "right",
   jump: "jump",
};
const MenuControls = () => {
   const simulateKeyDown = (key) => {
      const event = new KeyboardEvent("keydown", {
         key,
         code: `Key${key}`,
         which: key.charCodeAt(0),
         keyCode: key.charCodeAt(0),
      });

      // Dispatch the event on the document
      document.dispatchEvent(event);
   };

   const simulateKeyUp = (key) => {
      const event = new KeyboardEvent("keyup", {
         key,
         code: `Key${key}`,
         which: key.charCodeAt(0),
         keyCode: key.charCodeAt(0),
      });

      // Dispatch the event on the document
      document.dispatchEvent(event);
   };

   // Function to handle button click and simulate keydown events
   const handleButtonMouseDown = (key) => () => {
      simulateKeyDown(key);
   };

   // Function to handle button release and simulate keyup events
   const handleButtonMouseUp = (key) => () => {
      simulateKeyUp(key);
   };

   return (
      <div>
         <style>{globalStyles}</style>
         <div className="relative controls">
            <div className="flex">
               <div className="ctrl-button blank"></div>
               <button
                  className="ctrl-button click"
                  onPointerEnter={handleButtonMouseDown("W")}
                  onPointerLeave={handleButtonMouseUp("W")}
               >
                  W
               </button>
               <div className="ctrl-button"></div>
            </div>
            <div className="flex">
               <button
                  className="ctrl-button click"
                  onPointerEnter={handleButtonMouseDown("A")}
                  onPointerLeave={handleButtonMouseUp("A")}
               >
                  A
               </button>
               <button
                  className="ctrl-button click"
                  onPointerEnter={handleButtonMouseDown("S")}
                  onPointerLeave={handleButtonMouseUp("S")}
               >
                  S
               </button>
               <button
                  className="ctrl-button click"
                  onPointerEnter={handleButtonMouseDown("D")}
                  onPointerLeave={handleButtonMouseUp("D")}
               >
                  D
               </button>
            </div>
         </div>
      </div>
   );
};

export default MenuControls;
