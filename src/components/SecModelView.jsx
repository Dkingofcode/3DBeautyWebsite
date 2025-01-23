import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Lights";
import Loader from "./Loader";
import { Suspense } from "react";
import MakeupKit from "./MakeUpkit";
import MakeUpCosmetics from "./MakeUpCosmetics";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {/* Camera Setup */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Scene Lights */}
      <Lights />

      {/* Orbit Controls */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} position={[0, -1, 0]} scale={[1, 1, 1]}>
        {/* Suspense to handle async loading */}
        <Suspense fallback={<Loader><h1>Loading....</h1></Loader>}>
          <MakeUpCosmetics
            scale={[0.2, 0.2, 0.2]} // Adjust scale to fit the scene
            position={[0, -0.5, 0]} // Center vertically if needed
            rotation={[0, Math.PI / 4, 0]} // Rotate slightly for a better view
          />
        </Suspense>

        {/* Optional: Add a bounding box for debugging */}
        {/* <mesh>
          <boxHelper args={[groupRef.current, "red"]} />
        </mesh> */}
      </group>
    </View>
  );
};

export default ModelView;
