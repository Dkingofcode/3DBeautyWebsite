// className='absolute border border-red-700 top-0 left-0 w-full h-full flex justify-center items-center

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

const Gear = ({ isVisible, fadeOut }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/gears.glb');
  const [hasStopped, setHasStopped] = useState(false);

  // Define gear radii (assumed based on the model size or measured visually)
  const gearRadii = [1.5, 1, 0.75]; // Example radii for the gears

  // Calculate rotation speeds based on gear radii
  const baseSpeed = 0.5; // Base speed for the smallest gear
  const rotationSpeeds = gearRadii.map((radius) => baseSpeed * (gearRadii[0] / radius));

  // Animation for fade-in and fade-out
  const { scale, opacity } = useSpring({
    scale: isVisible && !hasStopped ? 1 : 0.5,
    opacity: isVisible && !hasStopped ? 1 : 0,
    config: { tension: 200, friction: 30 },
    onRest: () => {
      if (!isVisible && fadeOut) {
        setHasStopped(true); // Stop the rotation when fully faded out
      }
    },
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (group.current && !hasStopped) {
      group.current.children.forEach((gear, index) => {
        gear.rotation.z = elapsedTime * rotationSpeeds[index] * (index % 2 === 0 ? 1 : -1); // Alternate directions
      });
    }
  });

  return (
    <a.group ref={group} dispose={null} scale={scale} style={{ opacity }}>
      <mesh
        geometry={nodes.pGear1_blinn3_0.geometry}
        material={materials.blinn3}
        position={[-1.75, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.pGear2_phong2_0.geometry}
        material={materials.phong2}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.pGear3_blinn2_0.geometry}
        material={materials.blinn2}
        position={[1.75, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
};

useGLTF.preload('/models/gears.glb');

export default Gear;
