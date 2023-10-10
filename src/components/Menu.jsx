import React, { useState } from "react";

const Menu = (open, setIsOpen) => {
   const [isVisible, setIsVisible] = useState(true);

   const handleButtonClick = () => {
      setIsVisible(false);
   };

   return (
      <div>
         {isVisible && (
            <div className="menu" id="menu">
               <h1>Angel Gregory's Portfolio</h1>
               <div className="overlay">
                  <div className="overlay-content">
                     <button onClick={handleButtonClick}>Walk Around</button>
                     {/* Add your overlay content here */}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Menu;
