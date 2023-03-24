import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const Sphere = () => {
  const canvasRef = useRef();

  const urls = [
    "./forest_r.png",
    "./forest_l.png",
    "./forest_u.png",
    "./forest_d.png",
    "./forest_f.png",
    "./forest_b.png",
  ];

  useEffect(() => {
    let count = -1;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    camera.position.set(0, 0, 800);

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const cubeTextureLoader = new THREE.CubeTextureLoader();

    // const urls2 = [
    //   "./imgMapping/right.png",
    //   "./imgMapping/left.png",
    //   "./imgMapping/up.png",
    //   "./imgMapping/down.png",
    //   "./imgMapping/front.png",
    //   "./imgMapping/back.png",
    // ];
    const textureMapping = cubeTextureLoader.load(urls);
    // const textureMapping2 = cubeTextureLoader.load(urls2);

    // const Mapping = [textureMapping, textureMapping2];

    const geometry = new THREE.SphereGeometry(
      (window.innerWidth < window.innerHeight
        ? window.innerWidth
        : window.innerHeight) / 3, // 球体の半径を画面の短辺の1/3に設定
      640,
      320
    );

    // const geometry = new THREE.SphereGeometry(300, 640, 320);
    const material = new THREE.MeshBasicMaterial({
      envMap: textureMapping,
      reflectivity: 1,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    let mouseX = 0,
      mouseY = 0;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = 200;

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }
    document.addEventListener("mousemove", onDocumentMouseMove);

    function start() {
      requestAnimationFrame(start);

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      sphere.rotation.y += 0.005;
      sphere.rotation.x += 0.005;

      renderer.render(scene, camera);
    }
    start();

    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onWindowResize);

    // imgChange();

    // function imgChange() {
    //   count++;
    //   if (count === Mapping.length) {
    //     count = 0;
    //   }
    //   material.envMap = Mapping[count];
    //   setTimeout(imgChange, 4000);
    //   return count;
    // }

    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);

  //   return <canvas ref={canvasRef} />;
  return <canvas style={{ width: "100%", height: "100%" }} ref={canvasRef} />;
};

export default Sphere;

// import React, { useRef } from "react";
// import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
// import {
//   CubeTextureLoader,
//   CubeCamera,
//   WebGLCubeRenderTarget,
//   LinearMipmapLinearFilter,
// } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// extend({ OrbitControls });

// const CameraControls = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   const controls = useRef();
//   useFrame(() => controls.current.update());
//   return (
//     <orbitControls
//       ref={controls}
//       args={[camera, domElement]}
//       autoRotate={true}
//       enableZoom={false}
//     />
//   );
// };

// function SkyBox() {
//   const { scene } = useThree();
//   const loader = new CubeTextureLoader();
//   // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
//   const texture = loader.load([
//     "./imgMapping/forest_r.png",
//     "./imgMapping/forest_l.png",
//     "./imgMapping/forest_u.png",
//     "./imgMapping/forest_d.png",
//     "./imgMapping/forest_f.png",
//     "./imgMapping/forest_b.png",
//   ]);

//   // Set the scene background property to the resulting texture.
//   scene.background = texture;
//   return null;
// }

// // Geometry
// function Sphere2() {
//   const { scene, gl } = useThree();
//   // The cubeRenderTarget is used to generate a texture for the reflective sphere.
//   // It must be updated on each frame in order to track camera movement and other changes.
//   const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
//     generateMipmaps: true,
//     minFilter: LinearMipmapLinearFilter,
//   });
//   const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
//   cubeCamera.position.set(0, 0, 0);
//   scene.add(cubeCamera);

//   // Update the cubeCamera with current renderer and scene.
//   useFrame(() => cubeCamera.update(gl, scene));

//   return (
//     <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
//       <directionalLight intensity={0.5} />
//       <sphereGeometry attach="geometry" args={[2, 32, 32]} />
//       <meshBasicMaterial
//         attach="material"
//         envMap={cubeCamera.renderTarget.texture}
//         color="white"
//         roughness={0.1}
//         metalness={1}
//       />
//     </mesh>
//   );
// }

// // Lights
// function Sphere() {
//   return (
//     <Canvas className="canvas">
//       <CameraControls />
//       <Sphere2 />
//       <SkyBox />
//     </Canvas>
//   );
// }

// export default Sphere;
