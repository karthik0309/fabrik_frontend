import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF } from '@react-three/drei';

const Model=(props)=>{
    const { scene } = useGLTF(props.src);
    return <primitive 
    object={scene} />;
}

const ImageViewer = ({img,color=false,fov}) => {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ fov: fov }}>
      {color && <color attach="background" args={["white"]} />}
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
         <Model src={img}/>
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default ImageViewer