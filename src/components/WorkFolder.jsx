import React from "react";
// import { style } from "./MyWorksStyles";
import iframe from "./iframe.css?inline"

const WorkFolder = () => {
   return (
      <div className="">
         <style>{iframe}</style>
         {/* <style>{style}</style> */}
         <div className="flex flex-col flex-col-reverse justify-end">
            {/* <div className="works h-full w-full"> */}
            <div>hi</div>
            <div>hello</div>
            <div>Okay</div>
         </div>
      </div>
   );
};

export default WorkFolder;
