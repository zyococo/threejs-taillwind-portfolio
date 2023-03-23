import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

///////////////////////////////////////////////
//環境マッピングを利用し、オブジェクトのみ周りを反射しているように見せる
///////////////////////////////////////////////

window.addEventListener("load", init);

const width = window.innerWidth;
const height = window.innerHeight;

function init() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, 1000);

  const canvasElement = document.querySelector("#myCanvas");
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    alpha: true, //背景透明
    antialias: true, ////HTMLのcanvasのid
  });
  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  const urls = [
    "./imgMapping/forest_r.png",
    "./imgMapping/forest_l.png",
    "./imgMapping/forest_u.png",
    "./imgMapping/forest_d.png",
    "./imgMapping/forest_f.png",
    "./imgMapping/forest_b.png",
  ];

  const cubeTextureLoader = new THREE.CubeTextureLoader();
  const textureMapping = cubeTextureLoader.load(urls);

  // DodecahedronGeometry version
  // const mappingGeometry = new THREE.DodecahedronGeometry(300, 0); //正十二面体（半径、詳細）
  // const mappingMaterial = new THREE.MeshPhongMaterial({
  //   envMap: textureMapping,
  //   reflectivity: 1,
  // });

  // const line = new THREE.LineSegments(
  //   new THREE.EdgesGeometry(mappingGeometry), // 線
  //   new THREE.LineBasicMaterial({
  //     color: 0x000000, // 線の色
  //   })
  // );

  // const mapping = new THREE.Mesh(mappingGeometry, mappingMaterial);
  // mapping.add(line);
  // scene.add(mapping);

  // SphereGeometry version
  const geometry = new THREE.SphereGeometry(300, 640, 320);
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

    // DodecahedronGeometryが回転する
    // mapping.rotation.y += 0.005;
    // mapping.rotation.x += 0.005;

    // SphereGeometryが回転する
    sphere.rotation.y += 0.005;
    sphere.rotation.x += 0.005;

    // レンダリング
    renderer.render(scene, camera);
  }
  start();

  onWindowResize();
  window.addEventListener("resize", onWindowResize);

  function onWindowResize() {
    const width = window.innerWidth;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, 400);

    windowHalfX = window.innerWidth / 2;
    windowHalfY = 200;

    camera.aspect = width / 400;
    camera.updateProjectionMatrix();
  }
}

///////////////////////////////////////////////
//環境マッピングを利用し、バックグラウンドを含めて周りを反射しているように見せる
///////////////////////////////////////////////

// const myCanvas = document.getElementById("myCanvas");

// //scene
// const scene = new THREE.Scene();

// //sizes
// const sizes = {
//   width: innerWidth,
//   height: 400,
// };

// //camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   3000
// );
// camera.position.set(0, 500, 1000);
// scene.add(camera);

// //renderer
// const renderer = new THREE.WebGLRenderer({ canvas: myCanvas, antialias: true });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// // Create cube render target
// const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(500);

// //cubeCamera
// const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
// scene.add(cubeCamera);

// //object
// const sphereMaterial = new THREE.MeshBasicMaterial({
//   envMap: cubeRenderTarget.texture,
//   refractionRatio: 1, //屈折率
//   reflectivity: 1,
//   // wireframe: true,
// });
// const sphereGeometry = new THREE.SphereGeometry(350, 50, 50);
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphere.position.set(0, 100, 0);
// scene.add(sphere);

// //controls
// const controls = new OrbitControls(camera, myCanvas);
// controls.enableDamping = true;

// const urls = [
//   "./imgMapping/right.png",
//   "./imgMapping/left.png",
//   "./imgMapping/up.png",
//   "./imgMapping/down.png",
//   "./imgMapping/front.png",
//   "./imgMapping/back.png",
// ];

// const loader = new THREE.CubeTextureLoader();
// scene.background = loader.load(urls);

// function animate() {
//   cubeCamera.update(renderer, scene);
//   renderer.render(scene, camera);
//   controls.update();

//   requestAnimationFrame(animate);
// }

// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// animate();

///////////////////////////////////////////////
// 鏡ではなく反射ただの3Dオブジェクト
///////////////////////////////////////////////

// // ページの読み込みを待つ;
// window.addEventListener("load", init);

// // canvasのサイズを指定
// const width = window.innerWidth; //ウインドウの横の長さ
// const height = 400; //エリアの縦の長さ

// function init() {
//   // シーンを作る
//   const scene = new THREE.Scene();

//   // カメラを作る
//   const camera = new THREE.PerspectiveCamera(45, width / height);
//   camera.position.set(0, 0, 1000); // x,y,z座標でカメラの場所を指定

//   // レンダラーを作る
//   const canvasElement = document.querySelector("#myCanvas"); //HTMLのcanvasのid
//   const renderer = new THREE.WebGLRenderer({
//     canvas: canvasElement,
//     alpha: true, //背景を透明にする
//     antialias: true, //アンチエイリアス
//   });
//   // renderer.setSize(width, height); //サイズ

//   // ライトを作る
//   const light = new THREE.AmbientLight(0xffffff, 1); //環境光源（色、光の強さ）
//   scene.add(light);

//   // 画像
//   const loader = new THREE.TextureLoader();
//   const texture01 = loader.load("./img/img_01.jpg");
//   const texture02 = loader.load("./img/img_02.jpg");
//   const texture03 = loader.load("./img/img_03.jpg");

//   const textures = [texture01, texture02, texture03];

//   // 3Dオブジェクトを作る
//   const geometry = new THREE.DodecahedronGeometry(300, 0); // DodecahedronGeometry 正十二面体（半径、詳細）

//   // 枠線を作成
//   const line = new THREE.LineSegments(
//     new THREE.EdgesGeometry(geometry), // 線
//     new THREE.LineBasicMaterial({
//       color: 0x000000, // 線の色
//     })
//   );

//   const material = new THREE.MeshPhongMaterial({
//     map: texture01,
//   });

//   const mesh = new THREE.Mesh(geometry, material);
//   mesh.add(line);
//   scene.add(mesh);

//   // マウス
//   let mouseX = 0,
//     mouseY = 0; // マウス座標

//   let windowHalfX = window.innerWidth / 2;
//   let windowHalfY = 200;

//   function onDocumentMouseMove(event) {
//     mouseX = event.clientX - windowHalfX;
//     mouseY = event.clientY - windowHalfY;
//   }
//   document.addEventListener("mousemove", onDocumentMouseMove);

//   // アニメ―ション
//   function start() {
//     requestAnimationFrame(start);

//     camera.position.x += (mouseX - camera.position.x) * 0.05;
//     camera.position.y += (-mouseY - camera.position.y) * 0.05;
//     // 原点方向を見つめる
//     camera.lookAt(scene.position);

//     //球体が回転する
//     mesh.rotation.y += 0.005;
//     mesh.rotation.x += 0.005;

//     // レンダリング
//     renderer.render(scene, camera);
//   }
//   start();

//   // ウインドウのリサイズ対応
//   onWindowResize();
//   window.addEventListener("resize", onWindowResize);

//   function onWindowResize() {
//     // ウインドウ幅を取得
//     const width = window.innerWidth;
//     // レンダラーのサイズを調整する
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(width, 400);

//     windowHalfX = window.innerWidth / 2;
//     windowHalfY = 200;

//     // カメラのアスペクト比を正す
//     camera.aspect = width / 400;
//     camera.updateProjectionMatrix();
//   }

//   // 多面体の画像切り替え
//   let count = -1;
//   imgChange();
//   function imgChange() {
//     count++;
//     // カウントが画像の枚数と同じになると0に戻る
//     if (count == textures.length) count = 0;
//     material.map = textures[count];
//     setTimeout(imgChange, 4000);
//     setTimeout(function () {
//       setTimeout(function () {
//         kvElement.classList.remove("fadeInObj");
//       }, 20),
//         kvElement.classList.add("fadeInObj");
//     }, 40);
//   }

//   // KV背景の画像切り替え
//   const backgrounds = [
//     "./img/img_03.jpg",
//     "./img/img_01.jpg",
//     "./img/img_02.jpg",
//   ];
//   const kvElement = document.querySelector("#kv"); //HTMLののid
//   bgChange();
//   function bgChange() {
//     count++;

//     // カウントが画像の枚数と同じになると0に戻る
//     if (count == backgrounds.length) count = 0;
//     kvElement.style.backgroundImage = "url(" + backgrounds[count] + ")";
//     setTimeout(bgChange, 4000);
//     setTimeout(function () {
//       setTimeout(function () {
//         kvElement.classList.remove("fadeInBg");
//       }, 2000),
//         kvElement.classList.add("fadeInBg");
//     }, 4000);
//   }
// }
