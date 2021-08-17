// import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, useGLTF, Effects } from "@react-three/drei";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
import { Suspense } from "react";
import c4d from "./c4d.jpg";
import "./App.css";

extend({ BloomPass, GlitchPass });
const Tori = () => {
  const { nodes } = useGLTF("tori2.gltf");

  return (
    <group rotation={[Math.PI / 8, Math.PI * 1.2, 0]}>
      <mesh geometry={nodes.Torus001.geometry}>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

export default function App() {
  return (
    <div className="App">
      <nav>Home</nav>
      <div className="intro">
        <h1>Hello this is an H1</h1>
        <p>
          lorem mf ipsum
          sdfjasdklfjasdfljasdlfjsladjfsdkljfsdjsadlfjasdfkljasdjklsdfjkasdfjsdfjksdfjksdfjksdlfjsdflkjsdlfkjasdlkfjasdlkfsal;dfsaldkfaslkdj
        </p>
        <p>wow so cool responsive design!</p>
      </div>
      <div className="imgDiv">
        <p>this is an image div :)</p>
        <img src={c4d} alt="render" title="image made in cinema4D" />
      </div>
      <Canvas>
        <Effects>
          <bloomPass attachArray="passes" />
          <glitchPass attachArray="passes" />
        </Effects>
        <fog attach="fog" args={["red", 1, 50]} />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
        <directionalLight intensity={0.5} color="blue" />
        <ambientLight intensity={0.2} color="red" />
        <Suspense fallback={null}>
          <Tori />
        </Suspense>
      </Canvas>
    </div>
  );
}
