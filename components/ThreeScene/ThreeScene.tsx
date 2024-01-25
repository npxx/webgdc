"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({alpha:true});
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshNormalMaterial({ color: 0xffff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

      new OrbitControls(camera, renderer.domElement);

      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 2;

    //   renderer.render(scene, camera);
      
      const renderScene = () => {
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };
    
      renderScene();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
  
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
  
        renderer.setSize(width, height);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };

    }

  }, []);
  return <div ref={containerRef} />;

  

};
export default ThreeScene;