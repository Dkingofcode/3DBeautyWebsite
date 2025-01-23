/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DianaV.Mendoza (https://sketchfab.com/DianaV.Mendoza)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/makeup-cosmetics-97038c2b5b7d44b1851ba9e33fbd20d7
Title: Makeup & Cosmetics
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MakeUpCosmetics(props) {
  const { nodes, materials } = useGLTF('/models/makeup__cosmetics.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder13_Black_0.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder13_blinn5_0.geometry}
        material={materials.blinn5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder13_Iron_0.geometry}
        material={materials.Iron}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder13_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder13_Wood_0.geometry}
        material={materials.Wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder13_Blush_0.geometry}
        material={materials.Blush}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder13_Crystal_0.geometry}
        material={materials.Crystal}
      />
    </group>
  )
}

useGLTF.preload('/models/makeup__cosmetics.glb');

