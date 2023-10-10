import {
   ContactShadows,
   Environment,
   OrbitControls,
   Html,
} from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Bed } from "./Furnitures/Bed";
import CharacterController from "./CharacterController";
import { Floor } from "./Furnitures/Floor";
import { Desktop } from "./Furnitures/Desktop";
import { Chair } from "./Furnitures/Chair";
import { Cabinet } from "./Furnitures/Cabinet";
import { Carpet } from "./Furnitures/Carpet";
import { Fan } from "./Furnitures/Fan";
import { Wardrobe } from "./Furnitures/Wardrobe";
import { Hamper } from "./Furnitures/Hamper";
import { useRef, useState } from "react";
import { Boxes } from "./Furnitures/Boxes";
import AboutMe from "./AboutMe";
import IFrame from "./IFrame.jsx";

// function IFrame({ children }) {
//    const [ref, setRef] = useState();
//    useEffect(() => {
//       if (ref) {
//          ref.style.width = "100%";
//          ref.style.height = "100vh";
//          ref.style.border = "none";
//          ref.style.pointerEvents = "auto";
//          // Include Tailwind CSS within the iframe's document
//          const iframeDocument = ref.contentDocument;
//          const tailwindLink = iframeDocument.createElement("link");
//          tailwindLink.rel = "stylesheet";
//          tailwindLink.href = "node_modules/tailwindcss/tailwind.css"; // Update the path
//          iframeDocument.head.appendChild(tailwindLink);
//       }
//    }, [ref]);

//    const container = ref?.contentDocument?.body;

//    return (
//       <iframe title="iframe" ref={setRef}>
//          {container && createPortal(children, container)}
//       </iframe>
//    );
// }
export const Experience = () => {
   const handleButtonClick = () => {
      // Triggered when the button inside the canvas is clicked
      console.log("onCanvas");
   };
   const ref = useRef();
   const [isIntersected, setIsIntersected] = useState(false);
   const [isClicked, setIsClicked] = useState(false);
   if (isIntersected) {
      if (isClicked) {
         setIsIntersected(false);
         setIsClicked(false);
      }
   }
   // const [carpetPosition, setCarpetPosition] = useState([-3, -100, 5]);
   const animationSpeed = 2; // Adjust the speed of the animation
   // useEffect(() => {
   //    if (isIntersected) {
   //       // Animate carpet moving up (increase y-coordinate)
   //       const targetY = 4; // Change the target y-coordinate as needed
   //       const animate = () => {
   //          setCarpetPosition((prevPosition) => {
   //             const newY = prevPosition[1] + animationSpeed;
   //             if (newY < targetY) {
   //                requestAnimationFrame(animate);
   //             }
   //             return [-3, newY, 5];
   //          });
   //       };
   //       animate();
   //    } else {
   //       // Animate carpet moving down (decrease y-coordinate)
   //       const targetY = -100; // Change the target y-coordinate as needed
   //       const animate = () => {
   //          setCarpetPosition((prevPosition) => {
   //             const newY = prevPosition[1] - animationSpeed;
   //             if (newY > targetY) {
   //                requestAnimationFrame(animate);
   //             }
   //             return [-3, newY, 5];
   //          });
   //       };
   //       animate();
   //    }
   // }, [isIntersected]);
   const srcDoc = <AboutMe />;
   return (
      <>
         <OrbitControls />
         {/* Lights */}
         <Environment preset="forest" />
         <directionalLight
            position={[5, 5, 5]}
            intensity={0.3}
            castShadow
            color={"#9e69da"}
         />

         {/* End of Lights */}

         {/* Background */}

         {/* End of Background */}

         {/* Stage */}
         <RigidBody
            colliders={false}
            type="fixed"
            position-y={-3}
            friction={2}
            ref={ref}
         >
            {/* invi walls */}
            <CuboidCollider args={[8, 1, 8]} position={[0, 11, 0]} />
            <CuboidCollider args={[1, 5, 8]} position={[8, 5, 0]} />
            <CuboidCollider args={[8, 5, 1]} position={[0, 5, 8]} />
            <CuboidCollider args={[1, 5, 8]} position={[-8, 5, 0]} />
            <CuboidCollider args={[8, 5, 1]} position={[0, 5, -8]} />
            <group>
               <ContactShadows
                  frames={1}
                  position={[0, 0.25, 0]}
                  scale={80}
                  opacity={0.42}
                  far={50}
                  blur={0.8}
                  color={"#aa9acd"}
               />
               {/* Bed */}
               <CuboidCollider args={[1.7, 1.25, 3]} position={[5.5, 0, -4]} />
               <Bed
                  scale={[4, 4, 4]}
                  position={[5.5, 1, -4]}
                  rotation-y={[-(Math.PI / 180) * 90]}
               />
               {/* Desktop */}
               <CuboidCollider
                  args={[1.5, 2.25, 2]}
                  position={[-6, 0, -1]}
                  sensor
                  onIntersectionEnter={() => {
                     setIsIntersected(true);
                     console.log("Entering intersection: isIntersected true");
                  }}
                  onIntersectionExit={() => {
                     setIsIntersected(false);
                     console.log("Exiting intersection: isIntersected false");
                  }}
               />
               <CuboidCollider args={[1.25, 2.25, 2]} position={[-6, 0, -1]} />
               <Desktop
                  scale={[4, 4, 4]}
                  position={[-6, 2.25, -1]}
                  rotation-y={[-(Math.PI / 180) * 90]}
               />
               {/* Chair */}
               <CuboidCollider
                  args={[0.5, 2, 0.5]}
                  position={[-3.5, 0, -1.5]}
               />
               <Chair
                  scale={[4, 4, 4]}
                  position={[-4, 0.25, -2]}
                  rotation-y={[-(Math.PI / 180) * 90]}
               />
               {/* Cabinet */}
               <CuboidCollider args={[3, 6, 0.5]} position={[-1, 0, -6]} />
               <Cabinet
                  scale={[5, 5, 5]}
                  position={[-1, 4, -6]}
                  rotation-y={[-(Math.PI / 180) * 90]}
               />
               {/* Carpet */}

               {/* <Carpet
                  scale={[3.5, 3.5, 3.5]}
                  position={carpetPosition}
                  rotation-y={[-(Math.PI / 180) * 90]}
               /> */}
               <Carpet
                  scale={[3.5, 3.5, 3.5]}
                  position={[-3, 0.2, 5]}
                  rotation-y={[-(Math.PI / 180) * 90]}
               />

               {/* Wardrobe */}
               <CuboidCollider args={[1.05, 1, 2]} position={[-6, 3, 4]} />
               <Wardrobe
                  scale={[5, 3, 5]}
                  position={[-6, 2, 4]}
                  rotation-y={[-(Math.PI / 180) * 90]}
               />
               {/* Fan */}
               <CuboidCollider args={[1, 2.25, 1]} position={[-6, 0, -5]} />
               <Fan
                  scale={[5, 5, 5]}
                  position={[-6, 2, -5]}
                  rotation-y={[-(Math.PI / 180) * 90]}
               />
               {/* Hamper */}
               <Hamper
                  scale={[4, 5, 4]}
                  position={[-6, 0.9, 6.7]}
                  rotation-y={[-(Math.PI / 180) * 90]}
               />
            </group>
            {/* Floor */}
            <CuboidCollider args={[8, 1, 8]} position={[0, -0.8, 0]} />
            <Floor scale={[4, 4, 4]} />
         </RigidBody>

         <RigidBody position={[-6, 5, 4]} rotation-y={[-(Math.PI / 180) * 90]}>
            <Boxes scale={[5, 5, 5]}></Boxes>
         </RigidBody>
         <Html fullscreen zIndexRange={[0, 0]}>
           

            {isIntersected ? (
               <div
                  className={
                     isIntersected
                        ? "animate__animated animate__bounceInUp"
                        : ""
                  }
               >
                  <IFrame>
                     <AboutMe
                        isClicked={isClicked}
                        setIsClicked={setIsClicked}
                     />
                  </IFrame>
               </div>
            ) : (
               // <iframe
               //    className="rounded-[50px] w-[100vw] h-auto aspect-[16/9] "
               //    srcDoc={ReactDOMServer.renderToString(srcDoc)}
               // />
               ""
            )}
         </Html>
         {/* <group onClick={() => alert("Hellooo")}>
            <Billboard
               follow={true}
               lockX={false}
               lockY={false}
               onClick={handleButtonClick}
               lockZ={false} // Lock the rotation on the z axis (default=false)
            >
               <Box color="blue"></Box>
               <Text fontSize={1}>I'm a billboard</Text>
            </Billboard>

            <Html fullscreen zIndexRange={[0, 0]}>
               <div
                  className={
                     isIntersected
                        ? "animate__animated animate__backInUp "
                        : "animate__animated animate__bounceOutDown"
                  }
               >
                  <AboutMe />
               </div>
            </Html>
         </group> */}
         <CharacterController />
         {/* End of Stage */}
      </>
   );
};
