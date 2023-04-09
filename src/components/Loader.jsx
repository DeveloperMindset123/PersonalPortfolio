import { Html, useProgress} from '@react-three/drei';
//The purpose of the canvasLoader is to smoothen the 3d model from frequenly crashing

const Loader = () => {

  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{   /*CSS code within rendering component needs to be enclosed within two brackers {{}}, rather than one */
          fontsize: 14,
          color: '#f1f1f1',
          fontweight: 800,
          marginTop: 40
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader;