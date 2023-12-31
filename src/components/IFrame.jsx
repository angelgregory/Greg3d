import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const IFrame = ({ children }) => {
   const [ref, setRef] = useState();

//   console.log("You are in the IFRAME BRANCH");

   useEffect(() => {
      if (ref) {
         ref.style.width = "100%";
         ref.style.height = "100%";
         ref.style.border = "none";
         ref.style.pointerEvents = "auto";

         // const iframeDocument = ref.contentDocument;
         // const globalCssLink = iframeDocument.createElement("link");
         // globalCssLink.rel = "stylesheet";
         // globalCssLink.href = "src/index.css"; // Update the path
         // iframeDocument.head.appendChild(globalCssLink);

         // allow style
         // const iframeDocument = ref.contentDocument;
         // var otherhead = iframeDocument.getElementsByTagName("head")[0];
         // var link = iframeDocument.createElement("link");
         // link.setAttribute("rel", "stylesheet");
         // link.setAttribute("type", "text/css");
         // link.setAttribute("href", "/src/index.css");
         // otherhead.appendChild(link);
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
