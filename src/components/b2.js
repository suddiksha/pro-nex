// components/b.js
import React from 'react';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model(props) {
  const { scene } = useGLTF("/b2.glb");

  return <primitive object={scene} {...props} />;
}

function B2() {
  return (
    <>
      <Canvas className="custom-canvas mb-5" dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute", width: "60%", height: "60%" }}>
        <color attach="background" args={["#ffffff"]}  />
        <PresentationControls speed={1.5} global zoom={1.2}>
          <Stage environment={null}>
            <Model />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default B2;
