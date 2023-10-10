/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/cabinet/model.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cabinet(props) {
   const { nodes, materials } = useGLTF("./models/cabinet/model.glb");
   return (
      <group {...props} dispose={null}>
         <mesh
            geometry={nodes.mesh_0.geometry}
            material={materials["custom24(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_1.geometry}
            material={materials["greyLight(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_2.geometry}
            material={materials["brownDark(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_3.geometry}
            material={materials["brown(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_4.geometry}
            material={materials["carpetDarker(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_5.geometry}
            material={materials["carpetWhite(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_6.geometry}
            material={materials["plant(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_7.geometry}
            material={materials["metal(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_8.geometry}
            material={materials["paintWhite(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_9.geometry}
            material={materials["plastic(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_10.geometry}
            material={materials["window(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_11.geometry}
            material={materials["lightFront(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_12.geometry}
            material={materials["_defaultMat(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_13.geometry}
            material={materials["lightBack(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_14.geometry}
            material={materials["lightBlue(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_15.geometry}
            material={materials["carTire(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_16.geometry}
            material={materials["paintGreen(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_17.geometry}
            material={materials["paintRed(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_18.geometry}
            material={materials["metalPurple(Clone)"]}
         />
      </group>
   );
}

useGLTF.preload("./models/cabinet/model.glb");