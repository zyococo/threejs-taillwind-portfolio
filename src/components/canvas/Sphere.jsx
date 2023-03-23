import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const Sphere = () => {
  const canvasRef = useRef();

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

    const urls = [
      "./imgMapping/forest_r.png",
      "./imgMapping/forest_l.png",
      "./imgMapping/forest_u.png",
      "./imgMapping/forest_d.png",
      "./imgMapping/forest_f.png",
      "./imgMapping/forest_b.png",
    ];

    const urls2 = [
      "./imgMapping/right.png",
      "./imgMapping/left.png",
      "./imgMapping/up.png",
      "./imgMapping/down.png",
      "./imgMapping/front.png",
      "./imgMapping/back.png",
    ];
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
