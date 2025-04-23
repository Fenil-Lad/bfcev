import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import './Loader.css';

const Loader = ({ onUnload }) => {  // Add an onUnload callback to trigger unmount from the parent component
  const { scene } = useGLTF('/models/cube.glb');
  const [scale, setScale] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isScaleAnimating, setIsScaleAnimating] = useState(false); // New state for scale animation
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false); // New state for animation completion
  const cubeRef = useRef();

  // Responsive cube size based on screen width
  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 600 ? 0.6 : 1);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set cube color once model is loaded
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.material) {
          child.material.color.set(0xffffff);
        }
      });
    }
  }, [scene]);

  // Stop the rotation after 3 seconds and start scale animation
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        if (cubeRef.current) {
          // Stop the rotation and keep the cube facing the screen
          cubeRef.current.rotation.y = 0; // or another value if you want to adjust the exact facing angle
        }

        // Start the scale animation after the rotation stops
        setIsScaleAnimating(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Handle the scaling effect
  useEffect(() => {
    if (isScaleAnimating) {
      const timer = setInterval(() => {
        setScale((prevScale) => {
          const newScale = prevScale * 1.05; // Gradually increase scale
          if (newScale >= 5) { // Stop scaling when it reaches the desired size
            clearInterval(timer);
            setIsAnimationCompleted(true); // Set this state to true when animation completes
            return 5; // Max scale
          }
          return newScale;
        });
      }, 30); // Adjust timing for scaling speed

      return () => clearInterval(timer);
    }
  }, [isScaleAnimating]);

  // Change the background to black after animation completion
  useEffect(() => {
    if (isAnimationCompleted) {
      document.querySelector('.loader-container').style.backgroundColor = 'black';

      // Trigger unmount via callback after a short delay
      const unmountTimer = setTimeout(() => {
        onUnload(); // Call onUnload to unmount the component from the parent
      }, 1000); // Wait 1 second before unmounting for a smooth transition effect

      return () => clearTimeout(unmountTimer);
    }
  }, [isAnimationCompleted, onUnload]);

  return (
    <div className="loader-container">
      <Canvas
        className="canvas-container"
        camera={{ position: [0, 0, 3], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {scene && <primitive object={scene} scale={scale} ref={cubeRef} />}
        <OrbitControls
          enableZoom={false}
          autoRotate={isAnimating} // This will only be true during the animation
          autoRotateSpeed={25}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Loader;
