import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { useCallback, useEffect, useRef, useState } from "react";
import HomeMadeBox from "./HomeMadeBox";
import EventTracker from "../EventTracker";
import { Box } from "@mui/material";

export const AboutThree = ({setView,viewEnum,isMobile}) => {
    const tracker = EventTracker("AboutThree page");
    const [aspectWidth, setAspectWidth] = useState(200);
    const [aspectHeight, setAspectHeight] = useState(100);
    const [cameraNear, setCameraNear] = useState(1);
    const [cameraFar, setCameraFar] = useState(1000);
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);

    useEffect(() =>{
      tracker("view AboutThree");
      console.log("loading about three");
    },[]);

    const Mobile = () => <>
    <div id="canvas-container"
      style={{
        background: "yellow"
      }}
    >
      <Canvas
          camera={{position:[0,0,13], aspect: aspectWidth/aspectHeight, cameraNear, cameraFar}}
          style={{height: "100vw", width: "100vw", margin: 0, padding: "0", background: "black"}}
      >
          <ambientLight intensity={1} />
          <OrbitControls 
              enableZoom={false}
              autoRotate={true}
          />
          <HomeMadeBox setView={setView} viewEnum={viewEnum} isMobile={true} />
      </Canvas>
    </div>
  </>;

    const Desktop = () => <>
      <div id="canvas-container"
        style={{
          background: "black"
        }}
      >
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
            <HomeMadeBox setView={setView} viewEnum={viewEnum} isMobile={false} />
        </Canvas>
      </div>
    </>;

    return <Box>
      {
          isMobile ?
          <Mobile /> :
          <Desktop /> 
      }
  </Box>
}

export default AboutThree;