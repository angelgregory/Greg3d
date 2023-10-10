// useCustomEffect.js
import { useEffect } from "react";

const ToFrame = () => {
   useEffect(() => {
      console.log(document); // <== here I get the document of the iframe parent
      // if I want to access the iframe document
      console.log(window.frames[0].document); // <== this works well
   }, []);
};

export default ToFrame;
