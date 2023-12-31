import { Html, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useMemo, useState } from "react";
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
import Cork from "./components/Cork";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Note from "./components/Note";
import AddNote from "./components/AddNote";

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
   const [isOnCork, setIsOnCork] = useState(false);
   const [isOnWardrobe, setIsOnWardRobe] = useState(false);
   const [isOnCabinet, setIsOnCabinet] = useState(false);
   const [isOnBed, setIsOnBed] = useState(false);
   const [isOnFan, setIsOnFan] = useState(false);
   const [isOnMenu, setIsOnMenu] = useState();
   // useEffect(() => {
   //    if (isOnCabinet) {
   //       place = "cabinet";
   //    }
   // }, []);

   if (isClose) {
      setIsOnDesk(false);
      setIsClose(false);
      setIsOnWardRobe(false);
      setIsOnCabinet(false);
      setIsOnBed(false);
      setIsOnFan(false);
      setIsOnCork(false);
   }
   const title = "Greg's Portfolio";
   return (
      <Router>
         <KeyboardControls map={map} disabled={true}>
            {" "}
            <Helmet>
               <title>{title}</title>
               <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            </Helmet>
            {/* <RouterProvider router={router} /> */}
            <Canvas shadows camera={{ position: [0, 6, 42], fov: 80 }}>
               <color attach="background" args={["#dbecfb"]} />
               <Suspense>
                  {/* you can use Physics debug to show guiding lines on objects --greg */}
                  <Physics
                     // debug
                     gravity={[0, -9.8, 0]}
                  >
                     <Experience
                        isOnDesk={isOnDesk}
                        setIsOnDesk={setIsOnDesk}
                        isOnWardrobe={isOnWardrobe}
                        setIsOnWardRobe={setIsOnWardRobe}
                        isOnCabinet={isOnCabinet}
                        setIsOnCabinet={setIsOnCabinet}
                        isOnBed={isOnBed}
                        setIsOnBed={setIsOnBed}
                        isOnFan={isOnFan}
                        setIsOnFan={setIsOnFan}
                        isOnCork={isOnCork}
                        setIsOnCork={setIsOnCork}
                     />
                  </Physics>
               </Suspense>
            </Canvas>
          <Menu setIsOnMenu={setIsOnMenu} />
            {isOnDesk ? (
               <MyWork isClose={isClose} setIsClose={setIsClose} />
            ) : isOnWardrobe ? (
               <About isClose={isClose} setIsClose={setIsClose} />
            ) : isOnCork ? (
               <Cork isClose={isClose} setIsClose={setIsClose} />
            ) : (
               ""
            )}
           <div className="xl:hidden">{isOnMenu ? <MenuControls /> : ""}</div>
            {isOnCabinet || isOnBed || isOnFan ? (
               <div>
                  <TextBubble
                     query={
                        isOnCabinet
                           ? "cabinet"
                           : isOnBed
                           ? "bed"
                           : isOnFan
                           ? "fan"
                           : ""
                     }
                  />
               </div>
            ) : null}
            {/* <Instructions /> */}
            {/* <Cork /> */}
         </KeyboardControls>
         <Routes>
            <Route path="/" element={""} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/AddNote" element={<AddNote />} />
         </Routes>
      </Router>
   );
}

export default App;
