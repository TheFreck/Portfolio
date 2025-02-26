import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState } from "react";
import HomeMadeBox from "./HomeMadeBox";

export const AboutThree = ({setView,viewEnum}) => {
    const [aspectWidth, setAspectWidth] = useState(200);
    const [aspectHeight, setAspectHeight] = useState(100);
    const [cameraNear, setCameraNear] = useState(1);
    const [cameraFar, setCameraFar] = useState(1000);

    return (
      <div id="canvas-container">
        <Canvas
            camera={{position:[0,0,12], aspect: aspectWidth/aspectHeight, cameraNear, cameraFar}}
            style={{height: "100vh", width: "100vw", margin: 0, padding: 0, background: "black"}}
            shadows
        >
            <ambientLight intensity={1} />
            <OrbitControls 
                enableZoom={false}
                autoRotate={true}
            />
            <HomeMadeBox setView={setView} viewEnum={viewEnum} />
        </Canvas>
      </div>
    )
}

export default AboutThree;