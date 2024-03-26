import React from 'react';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model(props) {
  const { scene } = useGLTF("/b2.glb");

  return <primitive object={scene} {...props} />;
}

function B2() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas className="custom-canvas mb-5" dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <ambientLight intensity={1.5} /> 
        <PresentationControls speed={1.5} global zoom={1.2}>
          <Stage environment={null}>
            <Model />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default B2;
