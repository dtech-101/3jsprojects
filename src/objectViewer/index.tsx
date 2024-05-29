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
    <Canvas>
      <mesh>
        <primitive object={modelObj.scene}/>
        <ambientLight intensity={2}/>
        <OrbitControls/>
      </mesh>
    </Canvas>
  );
};

export default ObjectViewer;
