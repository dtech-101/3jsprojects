import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ObjectViewer from "./objectViewer";

function App() {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <button onClick={()=>{
        console.log("clicked")
      }}>
        <ObjectViewer model={"/robot.glb"} />
      </button>
      <h1>Otiete Ayebanua</h1>
    </div>
  );
}

export default App;
