import { useEffect, useRef } from "react";
import * as THREE from "three";
import AboutMe from "./AboutMe";
import { useFrame, useLoader } from "@react-three/fiber";
import about from "../assets/profileImages/aboutMe.png";
import endorse from "../assets/profileImages/endorsements.png";
import proj from "../assets/profileImages/projects.png";
import reading from "../assets/profileImages/ReadingList.png";
import { OrbitControls } from "@react-three/drei";

export const HomeMadeBox = ({setView,viewEnum}) => {
    const rightRef = useRef();
    const leftRef = useRef();
    const topRef = useRef();
    const bottomRef = useRef();
    const frontRef = useRef();
    const backRef = useRef();
    const boxRef = useRef();

    const right = useLoader(THREE.TextureLoader,[endorse]);
    const front = useLoader(THREE.TextureLoader, [about]);
    const left = useLoader(THREE.TextureLoader, [reading]);
    const back = useLoader(THREE.TextureLoader, [proj]);

    useEffect(() => {
        leftRef.current.rotation.y = 3*Math.PI/2;
        rightRef.current.rotation.y = Math.PI/2;
        topRef.current.rotation.x = Math.PI/2;
        bottomRef.current.rotation.x = Math.PI/2;
        backRef.current.rotation.y = Math.PI;
    },[]);

    return (
        <mesh
            ref={boxRef}
        >
            <mesh
                ref={rightRef}
                position={[5,0,0]}
                onClick={() => setView(viewEnum.endorsements)}
            >
                <planeGeometry
                    args={[10,10]}
                />
                <meshStandardMaterial
                    map={right[0]}
                    side={THREE.FrontSide}
                />
            </mesh>
            <mesh
                ref={leftRef}
                position={[-5,0,0]}
                onClick={() => setView(viewEnum.books)}
            >
                <planeGeometry
                    args={[10,10]}
                />
                <meshStandardMaterial
                    map={left[0]}
                    side={THREE.FrontSide}
                />
            </mesh>
            <mesh
                ref={topRef}
                position={[0,5,0]}
            >
                <planeGeometry
                    args={[10,10]}
                />
                <meshStandardMaterial
                    color="blue"
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh
                ref={bottomRef}
                position={[0,-5,0]}
            >
                <planeGeometry
                    args={[10,10]}
                />
                <meshStandardMaterial
                    color="yellow"
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh
                ref={frontRef}
                position={[0,0,5]}
                onClick={() => setView(viewEnum.about)}
            >
                <planeGeometry
                    args={[10,10]}
                />
                <meshStandardMaterial
                    side={THREE.FrontSide}
                    map={front[0]}
                />
            </mesh>
            <mesh
                ref={backRef}
                position={[0,0,-5]}
                onClick={() => setView(viewEnum.projects)}
            >
                <planeGeometry
                    args={[10,10]}
                />
                <meshStandardMaterial
                    map={back[0]}
                    side={THREE.FrontSide}
                />
            </mesh>
        </mesh>
    );
}

export default HomeMadeBox;