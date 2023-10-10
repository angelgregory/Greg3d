import React, { useEffect, useState } from "react";

const useInput = () => {
   const [input, setInput] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false,
      jump: false,
   });
   const keys = {
      KeyW: "forward",
      KeyS: "backward",
      KeyA: "left",
      KeyD: "right",
      Space: "jump",
   };
   const findKey = (key: string) => keys[key];
   useEffect(() => {
      const handleKeyDown = (e) => {
         setInput((m) => ({
            ...m,
            [findKey(e.code)]: true,
         }));
      };
      const handleKeyUp = (e) => {
         setInput((m) => ({
            ...m,
            [findKey(e.code)]: false,
         }));
      };
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
         document.removeEventListener("keydown", handleKeyDown);
         document.removeEventListener("keyup", handleKeyUp);
      };
   }, []);
   return input;
};

export default useInput;
