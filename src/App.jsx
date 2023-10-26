import { Html, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo, useState } from "react";
import { Experience } from "./components/Experience";
import Menu from "./components/Menu";
import "./index.css";
import MenuControls from "./components/MenuControls";
import MyWork from "./components/MyWork";
import About from "./components/About";
import Instructions from "./components/Instructions";
import { Helmet } from "react-helmet";
import favicon from "./assets/images/icon.png";
import TextBubble from "./components/TextBubble";
export const Controls = {
   forward: "forward",
   back: "back",
   left: "left",
   right: "right",
   jump: "jump",
};

function App() {
   const map = useMemo(
      () => [
         { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
         { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
         { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
         { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
         { name: Controls.jump, keys: ["Space"] },
      ],
      []
   );
   const [isOnDesk, setIsOnDesk] = useState(false);
   const [isClose, setIsClose] = useState(false);
   const [isOnWardrobe, setIsOnWardRobe] = useState(false);
   const [isOnCabinet, setIsOnCabinet] = useState(false);
   if (isClose) {
      setIsOnDesk(false);
      setIsClose(false);
      setIsOnWardRobe(false);
      setIsOnCabinet(false);
   }
   const title = "Greg's Portfolio";
   return (
      <KeyboardControls map={map}>
         <Helmet>
            <title>{title}</title>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
         </Helmet>
         <Canvas shadows camera={{ position: [0, 6, 42], fov: 80 }}>
            <color attach="background" args={["#dbecfb"]} />
            <Suspense>
               {/* you can use Physics debug to show guiding lines on objects --greg */}
               <Physics gravity={[0, -9.8, 0]}>
                  <Experience
                     isOnDesk={isOnDesk}
                     setIsOnDesk={setIsOnDesk}
                     isOnWardrobe={isOnWardrobe}
                     setIsOnWardRobe={setIsOnWardRobe}
                     isOnCabinet={isOnCabinet}
                     setIsOnCabinet={setIsOnCabinet}
                  />
               </Physics>
            </Suspense>
         </Canvas>
         <Menu />
         {isOnDesk ? (
            <MyWork isClose={isClose} setIsClose={setIsClose} />
         ) : isOnWardrobe ? (
            <About isClose={isClose} setIsClose={setIsClose} />
         ) : (
            ""
         )}
         <div className="xl:hidden">
            <MenuControls />
         </div>
         {isOnCabinet ? (
            <div>
               <TextBubble />
            </div>
         ) : null}
         {/* <Instructions /> */}
      </KeyboardControls>
   );
}

export default App;
