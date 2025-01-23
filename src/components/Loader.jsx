import React from 'react';
import { Html } from '@react-three/drei';
import { useState } from 'react';

const Loader = () => {
  return (
    <>
      {/* Loading UI (HTML overlay) */}
      <Html center>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60">
          {/* Spinner Container */}
          <div className="flex flex-col items-center space-y-4">
            {/* Spinner */}
            <div className="relative w-16 h-16">
              {/* Outer Circle */}
              <div className="absolute w-full h-full border-4 border-t-transparent border-blue-400 rounded-full animate-spin"></div>
              {/* Inner Circle */}
              <div className="absolute top-2 left-2 w-12 h-12 border-4 border-t-transparent border-blue-200 rounded-full animate-[spin_1.5s_linear_reverse]"></div>
            </div>

            {/* Loading Text */}
            <p className="text-white text-sm font-medium tracking-wide">
              Preparing your experience...
            </p>
          </div>
        </div>
      </Html>
    </>
  );
};

export default Loader;
