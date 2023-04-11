import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ( isMobile ) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");   //fix:me --> change it one of your own gltf models later on in the project
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
      /*Now that we added isMobile as a prompt, we will simply be adding ternary opeartors and adjusting the values for the smaller screen */
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.00, -1.75]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const[isMobile, setIsMobile] = useState(false);  /*we need to ensure the first body component of our website also looks smooth and adaptative for mobile based devices as we did with the navbar */

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width : 500px)');  /* if the width of the screenis 500px or below, we will apply these settings */
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = () => {
      setIsMobile(event.matches);
    }
    /* Since we are in the user effect, we will also have to close the userEffect after opening it, we first add an event lsitener and then remove it within the return, aka rendering section */
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
  };
}, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;  //after adding the isMobile component and chaning this to export default ComputersCanvas from export default Computers, the 3d model displayed with the progress bar as intended.