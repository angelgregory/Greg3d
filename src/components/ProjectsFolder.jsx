import React from "react";
// import { style } from "./MyWorksStyles";
import iframe from "./iframe.css?inline";
import arayat from "../assets/images/works/arayat.png";
import coffee from "../assets/images/works/coffee.png";
import naga from "../assets/images/works/naga.png";
import phgo from "../assets/images/works/phgo.png";
import StudyGo from "../assets/images/works/StudyGo.png";
import irony from "../assets/images/works/THE-IRONY.png";
import trabahero from "../assets/images/works/trabahero.png";
import lipatpat from "../assets/images/works/lipatpat-white.png";
const WorkFolder = () => {
   return (
      <div className="">
         <style>{iframe}</style>
         {/* <style>{style}</style> */}
         <div className="bg-white flex flex-col">
            <div className="grid grid-cols-2 pb-2">
               <div className="">
                  <img className="bg-cover" src={coffee} alt="" />
               </div>
               <div className="pl-2 flex flex-col justify-between">
                  <img className=" " src={StudyGo} alt="" />
                  <img className=" " src={phgo} alt="" />
                  <img className=" " src={trabahero} alt="" />
                  <img className=" " src={arayat} alt="" />
               </div>
            </div>
            <img src={naga} alt="" />
            <div className="grid grid-cols-2 ">
               <div>
                  <img src={irony} alt="" />
               </div>
               <div className="pl-2">
                  <img src={lipatpat} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default WorkFolder;
