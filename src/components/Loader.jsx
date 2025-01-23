import React from 'react';
import { Html } from '@react-three/drei';
import Gear from './Gear';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import * as THREE from "three";

const Loader = () => {
    const [showGear, setShowGear] = useState(true);
 
    return (
    <>
      {/* Loading UI (HTML overlay) */}
      <Html center>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-20 h-20  rounded-full animate-spin"></div>
        </div>
      <button onClick={() => setShowGear((prev) => !prev)}>
        Toggle Gear
      </button>
      </Html>
      
      <Gear />
      
      {/* Render 3D Gear */}
    </>
  );
};

export default Loader;
