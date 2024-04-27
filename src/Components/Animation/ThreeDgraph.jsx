import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDGraph = () => {
  const canvasRef = useRef(null);
  let scene, camera, renderer;
  let nodes = [];

  useEffect(() => {
    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
      camera.position.z = 20;

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

      // Ellipsoid radii
      const a = 13; // Radius along the x-axis
      const b = 10.16; // Radius along the y-axis
      const c = 8.8; // Radius along the z-axis

      // Generate 60 nodes on the surface of the ellipsoid
      for (let i = 0; i < 150; i++) {
        let theta = Math.random() * 2 * Math.PI; // Random angle for longitude
        let phi = Math.acos(2 * Math.random() - 1); // Random angle for latitude

        // Cartesian coordinates for the ellipsoid surface
        let x = a * Math.sin(phi) * Math.cos(theta);
        let y = b * Math.sin(phi) * Math.sin(theta);
        let z = c * Math.cos(phi);

        const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow color
        let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, z);
        nodes.push(sphere);
        scene.add(sphere);
      }

      for (let i = 0; i < 100; i++) {
        let x, y, z;
        do {
          x = Math.random() * 2 - 1; // Generate a value between -1 and 1
          y = Math.random() * 2 - 1; // Generate a value between -1 and 1
          z = Math.random() * 2 - 1; // Generate a value between -1 and 1
        } while (x*x + y*y + z*z > 1); // Check if the point is inside the unit sphere

        // Scale the points to fit the ellipsoid
        x *= a;
        y *= b;
        z *= c;

        const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, z);
        nodes.push(sphere);
        scene.add(sphere);
      }

      animate();
    };

    const handleResize = () => {
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    init();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const animate = () => {
    requestAnimationFrame(animate);
    scene.rotation.x += 0;
    scene.rotation.y += 0.005;
    renderer.render(scene, camera);
  };

  return (
    
      <canvas ref={canvasRef} />
  
  );
};

export default ThreeDGraph;