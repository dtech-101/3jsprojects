import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface IObjectViewer{
    model?: string;
}

const ObjectViewer = ({model}:IObjectViewer) => {
    const modelPath = process.env.PUBLIC_URL + `${model}`;
    const modelObj  =  useLoader(GLTFLoader,modelPath)
  return (
    <Canvas style={{background:'rgb(6,6,7)'}}>
      <mesh>
        <primitive object={modelObj.scene}/>
       <meshBasicMaterial/>
        <spotLight intensity={50} position={[0,2,0]} color={"rgb(21,89,119)"}/>
        <spotLight intensity={50} position={[0,0.8,-1]} color={"rgb(21,93,121)"}/>
        <spotLight intensity={13} position={[0,0,1]} color={"rgb(146,186,187)"}/>
        <spotLight intensity={13} position={[1,-1,0]} color={"rgb(21,89,119)"}/>
        <spotLight intensity={13} position={[-1,-1,0]} color={"rgb(21,89,119)"}/>

        <OrbitControls/>
      </mesh>
    </Canvas>
  );
};

export default ObjectViewer;
