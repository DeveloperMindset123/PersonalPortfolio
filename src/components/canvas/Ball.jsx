import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';
import CanvasLoader from '../Loader';  //this is the one that loads the percentages icon

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);


  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>  {/*The mesh component will bring up the physical shape of our object, similar to unreal engine based concept */}
        <icosahedronGeometry args={[1,1]} /> {/*This specirfies the shape of the 3d model, in this case, it's an icosahedron */}
        <meshStandardMaterial  /*this will crate more relaistic effects of our mesh, giving it shadows, roughness, depth */
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0,0,1]}
          rotation={[ 2* Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}
//the canvas code is the same as the hero section wehre we generated our first 3d model
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}> {/*This will create the loading effect */}
        <OrbitControls
          enableZoom={false}
          /*maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} , we wnat ot be able to rotate up and down, left and right */
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default BallCanvas;  //we need to make sure we are exporting the ballCavas, nto the actual ball