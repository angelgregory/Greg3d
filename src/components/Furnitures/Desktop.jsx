/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/desktop/model.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Desktop(props) {
   const { nodes, materials } = useGLTF("./models/desktop/model.glb");
   return (
      <group {...props} dispose={null}>
         <mesh
            geometry={nodes.mesh_0.geometry}
            material={materials["custom24(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_1.geometry}
            material={materials["metal(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_2.geometry}
            material={materials["woodDark(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_3.geometry}
            material={materials["custom19(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_4.geometry}
            material={materials["brownLight(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_5.geometry}
            material={materials["yellow(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_6.geometry}
            material={materials["brownDark(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_7.geometry}
            material={materials["green(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_8.geometry}
            material={materials["red(Clone)"]}
         />
         <mesh
            geometry={nodes.mesh_0_9.geometry}
            material={materials["metalDark(Clone)"]}
         />
      </group>
   );
}

useGLTF.preload("./models/desktop/model.glb");