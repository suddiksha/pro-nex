import React, { useRef ,useEffect} from 'react';
import '../assests/css/b1.css';

import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Model(props) {
  const { scene } = useGLTF("/b2.glb");
  const modelRef = useRef();

  // Rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

function B2({ modelRef, isActive }) {
  const localRef = useRef();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  const canvasStyle = isExtraSmallScreen
    ? { width: "240px", height: "260px" } // screens below 700px
    : isSmallScreen
    ? { width: "280px", height: "320px" } // screens 768px or less
    : { width: "360px", height: "420px" }; // Default size

  const modelVariants = {
    hidden: { x: "-100vw", opacity: 0 }, 
    visible: { x: 0, opacity: 1 }, 
  };

  useEffect(() => {
    // Reset the animation when the slide becomes active
    if (isActive && localRef.current) {
      localRef.current.rotation.x = Math.PI / 2; // Reset to top view
      localRef.current.rotation.y = 0; // Reset the slight right turn
    }
  }, [isActive]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: "easeOut" }}
      variants={modelVariants}
      style={{ width: '100%', height: '100%' }}  // Add explicit width/height
    >
      <Canvas
        className="custom-canvas Canvas1"
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 0, 10] }}
        style={canvasStyle}  // Ensure canvas has defined size
      >
        <ambientLight intensity={1.5} />
        <PresentationControls speed={1.5} global zoom={1.2}>
          <Stage environment={null} shadows={false}>
            <Model ref={modelRef || localRef} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </motion.div>
  );
}

export default B2;
