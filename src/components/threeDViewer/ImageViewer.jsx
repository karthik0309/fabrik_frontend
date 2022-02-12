import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF } from '@react-three/drei';

const Model=(props)=>{
    const { scene } = useGLTF(props.src);
    return <primitive 
    object={scene} />;
}

const ImageViewer = ({img}) => {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ fov: 2 }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
         <Model src={img}/>
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default ImageViewer