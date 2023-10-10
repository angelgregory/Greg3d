import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const IFrame = ({ children }) => {
   const [ref, setRef] = useState();
   useEffect(() => {
      if (ref) {
         ref.style.width = "100%";
         ref.style.height = "100vh";
         ref.style.border = "none";
         ref.style.pointerEvents = "auto";

         //allow style
         const iframeDocument = ref.contentDocument;
         const styleLink = iframeDocument.createElement("link");
         styleLink.rel = "stylesheet";
         styleLink.href = "src/index.css";
         iframeDocument.head.appendChild(styleLink);
      }
   }, [ref]);

   const container = ref?.contentDocument?.body;

   return (
      <iframe title="iframe" ref={setRef}>
         {container && createPortal(children, container)}
      </iframe>
   );
};

export default IFrame;
