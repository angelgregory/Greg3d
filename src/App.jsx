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
   if (isClose) {
      setIsOnDesk(false);
      setIsClose(false);
   }
   return (
      <KeyboardControls map={map}>
         <Canvas shadows camera={{ position: [0, 6, 42], fov: 80 }}>
            <color attach="background" args={["#dbecfb"]} />
            <Suspense>
               <Physics debug gravity={[0, -9.8, 0]}>
                  <Experience
                     isOnDesk={isOnDesk}
                     setIsOnDesk={setIsOnDesk}
                     isOnWardrobe={isOnWardrobe}
                     setIsOnWardRobe={setIsOnWardRobe}
                  />
               </Physics>
            </Suspense>
         </Canvas>
         <Menu />
         {isOnDesk ? (
            <MyWork isClose={isClose} setIsClose={setIsClose} />
         ) : isOnWardrobe ? (
            <About />
         ) : (
            ""
         )}
         <div className="xl:hidden">
            <MenuControls />
         </div>
      </KeyboardControls>
   );
}

export default App;
