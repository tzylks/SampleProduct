import logo from './logo.svg';
import './App.css';
import * as THREE from 'three'
import gsap from 'gsap'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { useRef, useState, Suspense } from 'react'
import Styled from './Styled'


let camera, scene, renderer, canvas, cubeCamera
let innerW = window.innerWidth;
let innerH = window.innerHeight;
let cube

function App() {

  // scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x87ceeb)



  // const ambientLight = new THREE.AmbientLight(0xaaaaaa)
  // scene.add(ambientLight)

  // const light1 = new THREE.PointLight()
  // light1.position.set(10, 10, 10)
  // light1.castShadow = true
  // light1.shadow.bias = -0.0002
  // light1.shadow.mapSize.height = 1024
  // light1.shadow.mapSize.width = 1024
  // scene.add(light1)


  // canvas = document.querySelector('.webgl')
  // canvas.width = innerW
  // canvas.height = innerH

  // const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, { format: THREE.RGBFormat, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
  // cubeCamera = new THREE.CubeCamera(1, 100000, cubeRenderTarget)
  // scene.add(cubeCamera)

  // camera = new THREE.PerspectiveCamera(75, innerW / innerH, 0.01, 1000)
  // camera.position.set(1.75, 1.75, 3.5)


  // renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  // renderer.setSize(innerW, innerH)
  // renderer.shadowMap.enabled = true
  // renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2)



  // // const cubeGeo = new THREE.BoxGeometry(1, 1, 1)
  // const chromeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000, envMap: cubeRenderTarget.texture });
  // // const car = new THREE.Mesh(cubeGeo, chromeMaterial);
  // // scene.add(car);

  // // car.position.y = 1



  // const planeGeometry = new THREE.PlaneGeometry(25, 25)
  // const texture = new THREE.TextureLoader().load('img/grid.png')
  // const plane = new THREE.Mesh(
  //   planeGeometry,
  //   chromeMaterial
  // )
  // plane.rotateX(-Math.PI / 2)
  // plane.receiveShadow = true
  // scene.add(plane)


  // window.addEventListener('resize', onWindowResize, false)
  // function onWindowResize() {
  //   camera.aspect = window.innerWidth / window.innerHeight
  //   camera.updateProjectionMatrix()
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2)

  // }

  // // car.visible = true;
  // // cubeCamera.position.copy(car.position);
  // cubeCamera.update(renderer, scene);

  // const controls = new OrbitControls(camera, canvas)
  // controls.enableDamping = true
  // controls.enableZoom = true

  // const loader = new GLTFLoader();

  // loader.load('./scene.gltf', (gltf) => {
  //   console.log(gltf)
  //   const root = gltf.scene
  //   scene.add(root)
  //  ;})

  const Model = () => {

    const gltf = useLoader(GLTFLoader, "./scene.gltf");
    const ref = useRef();
    useFrame(() => {
      
      ref.current.rotation.y += 0.004
      ref.current.position.y = (1 + Math.sin(1.2 / 2)) / 10
    });

    return (
      <>

        <primitive ref={ref} position={[0, 0, 0]} rotation={[0, (Math.PI), 0]} object={gltf.scene} scale={10} />

      </>
    );
  };


  // const tick = () => {


  //   // car.rotation.x += 0.01
  //   renderer.render(scene, camera)
  //   window.requestAnimationFrame(tick)
  // }

  // tick()

  return (
    <>

      <Canvas
        shadowMap
        shadows dpr={[1, 2]}

        camera={{ position: [0, 0, 25], fov: 75 }}
        style={{
          position: "fixed",
          left: 0,
          top: 0,

        }}>
        <ambientLight intensity={.2} />

        <Suspense fallback={null}>

          <OrbitControls />
          <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
          <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
          <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />

          <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
          <Model />

          <pointLight position={[250, 10, 100]} />
        </Suspense>
      </Canvas>
    </>
  );
}



export default App;
