"use client"

import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Box from "@/component/3D/Box";
import OrbitControls from "@/component/3D/OrbitControls";
import Light from "@/component/3D/Light";
import Floor from "@/component/3D/Floor";
import Draggable from "@/component/3D/Draggable";
import {Suspense} from "react";
import Iphone3D from "@/component/3D/Iphone13"
import {Environment} from "@react-three/drei";

export default function Home() {
  return (
    <div className={css.scene}>
        
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <Environment preset="city" />
        <ambientLight color={"white"} intensity={5} />
        <Light position={[0, 3, 0]} />
        {/* <Draggable> */}
        <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
            <Iphone3D/>

        </Suspense>
        {/* </Draggable> */}
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}