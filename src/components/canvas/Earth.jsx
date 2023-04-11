import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');


  return (
    <primitive 
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{ 
        fov: 45,  /**This will make the object appear bigger on the screen, on the smaller screen, the contact and earth sphere will look divided in their own sections, thanks to the flex property, when the screen expands, the contact and spehere will be right next to one another */
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]

      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} /**So that we don't accidentally rotate our planet sideways */
          minPolarAngle={Math.PI / 2}
        /> {/**This will allow us to move/rotate the planet around */}

        <Earth />
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas;