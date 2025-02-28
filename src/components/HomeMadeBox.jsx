import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import about from "../assets/profileImages/aboutMe.png";
import endorse from "../assets/profileImages/endorsements.png";
import proj from "../assets/profileImages/projects.png";
import reading from "../assets/profileImages/readingList.png";
import hat from "../assets/profileImages/bowler.jpg";
import shoes from "../assets/profileImages/shoes.png";
import EventTracker from "../EventTracker";

export const HomeMadeBox = ({setView,viewEnum, isMobile}) => {
    const tracker = EventTracker("HomeMadeBox page");
    const rightRef = useRef();
    const leftRef = useRef();
    const topRef = useRef();
    const bottomRef = useRef();
    const frontRef = useRef();
    const backRef = useRef();
    const boxRef = useRef();

    const top = useLoader(THREE.TextureLoader,[hat]);
    const right = useLoader(THREE.TextureLoader,[endorse]);
    const front = useLoader(THREE.TextureLoader, [about]);
    const left = useLoader(THREE.TextureLoader, [reading]);
    const back = useLoader(THREE.TextureLoader, [proj]);
    const bottom = useLoader(THREE.TextureLoader, [shoes]);


    useEffect(() => {
        leftRef.current.rotation.y = 3*Math.PI/2;
        rightRef.current.rotation.y = Math.PI/2;
        topRef.current.rotation.x = Math.PI/2;
        bottomRef.current.rotation.x = Math.PI/2;
        backRef.current.rotation.y = Math.PI;
        topRef.current.rotation.z = Math.PI;
    },[]);

    return (
        <mesh
            ref={boxRef}
        >
            <mesh
                ref={rightRef}
                position={[5,0,0]}
                onClick={() => {
                    tracker("visit endorsements from homeMadeBox");
                    setView(viewEnum.endorsements);
                }}
            >
                <planeGeometry
                    args={[10,isMobile ? 8 : 10]}
                />
                <meshStandardMaterial
                    map={right[0]}
                    side={THREE.FrontSide}
                />
            </mesh>
            <mesh
                ref={leftRef}
                position={[-5,0,0]}
                onClick={() => {
                    tracker("visit readingList from homeMadeBox");
                    setView(viewEnum.books);
                }}
            >
                <planeGeometry
                    args={[10,isMobile ? 8 : 10]}
                />
                <meshStandardMaterial
                    map={left[0]}
                    side={THREE.FrontSide}
                />
            </mesh>
            <mesh
                ref={topRef}
                position={[0,isMobile ? 4 : 5,0]}
            >
                <planeGeometry
                    args={[10,10]}
                />
                <meshStandardMaterial
                    map={top[0]}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh
                ref={bottomRef}
                position={[0,isMobile ? -4 : -5,0]}
            >
                <planeGeometry
                    args={[10,10]}
                />
                <meshStandardMaterial
                    map={bottom[0]}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh
                ref={frontRef}
                position={[0,0,5]}
                onClick={() => {
                    tracker("visit aboutMe from homeMadeBox");
                    setView(viewEnum.about);
                }}
            >
                <planeGeometry
                    args={[10,isMobile ? 8 : 10]}
                />
                <meshStandardMaterial
                    side={THREE.FrontSide}
                    map={front[0]}
                />
            </mesh>
            <mesh
                ref={backRef}
                position={[0,0,-5]}
                onClick={() => {
                    tracker("visit projects from homeMadeBox");
                    setView(viewEnum.projects);
                }}
            >
                <planeGeometry
                    args={[10,isMobile ? 8 : 10]}
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