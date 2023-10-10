import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import { useRef, useEffect } from "react";
import { Controls } from "../App";
import Character from "./Character";
import * as THREE from "three";
import useInput from "./useInput";
import Menu from "./Menu";

const JUMP_FORCE = 20;

const MOVEMENT_SPEED = 2;
const MAX_VEL = 6;

const CharacterController = () => {
   const { forward, backward, left, right, jump } = useInput();
   // const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
   // const leftPressed = useKeyboardControls((state) => state[Controls.left]);
   // const rightPressed = useKeyboardControls((state) => state[Controls.right]);
   // const backPressed = useKeyboardControls((state) => state[Controls.back]);
   // const forwardPressed = useKeyboardControls(
   //    (state) => state[Controls.forward]
   // );
   const rigidbody = useRef();
   const isOnFloor = useRef(true);
   useFrame((state, delta) => {
      const impulse = { x: 0, y: 0, z: 0 };
      if (jump && isOnFloor.current) {
         // setTimeout(() => {
         //    // Apply the jump force after the delay
         impulse.y += JUMP_FORCE;
         isOnFloor.current = false;
         //    rigidbody.current.applyImpulse(impulse, true);
         // }, 250); // Adjust the delay duration as needed
      }

      const linvel = rigidbody.current.linvel();
      let changeRotation = false;
      if (right && linvel.x < MAX_VEL) {
         impulse.x += MOVEMENT_SPEED;
         changeRotation = true;
      }
      if (left && linvel.x > -MAX_VEL) {
         impulse.x -= MOVEMENT_SPEED;
         changeRotation = true;
      }
      if (backward && linvel.z < MAX_VEL) {
         impulse.z += MOVEMENT_SPEED;
         changeRotation = true;
      }
      if (forward && linvel.z > -MAX_VEL) {
         impulse.z -= MOVEMENT_SPEED;
         changeRotation = true;
      }

      rigidbody.current.applyImpulse(impulse, true);

      if (changeRotation) {
         const angle = Math.atan2(linvel.x, linvel.z);
         character.current.rotation.y = angle;
      }
      // CAMERA FOLLOW
      const characterWorldPosition = character.current.getWorldPosition(
         new THREE.Vector3()
      );

      const targetCameraPosition = new THREE.Vector3(
         characterWorldPosition.x,
         0,
         characterWorldPosition.z + 14
      );
      targetCameraPosition.y = 8;
      state.camera.position.lerp(targetCameraPosition, delta * 2);
      // state.camera.position.x = characterWorldPosition.x;
      // state.camera.position.z = characterWorldPosition.z + 14;

      const targetLookAt = new THREE.Vector3(
         characterWorldPosition.x,
         0,
         characterWorldPosition.z
      );

      state.camera.lookAt(targetLookAt);
   });

   const character = useRef();
   return (
      <group>
         <RigidBody
            gravityScale={2}
            ref={rigidbody}
            colliders={false}
            scale={[1.25, 1.25, 1.25]}
            enabledRotations={[false, false, false]}
            onCollisionEnter={() => {
               isOnFloor.current = true;
            }}
         >
            <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
            <group ref={character}>
               <Character />
            </group>
         </RigidBody>
      </group>
   );
};

export default CharacterController;
