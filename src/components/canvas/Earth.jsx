// import { Suspense } from "react"
// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

// import CanvasLoader from '../Loader';

// const Earth = () => {

//   const earth = useGLTF('./planet/scene.gltf')

//   return (
//     <primitive 
//       object={earth.scene}
//       castShadow receiveShadow
     
//     />
//   )
// }

// const EarthCanvas = () => {
//   return (
//     <Canvas
//     shadows={true}
//     frameloop='demand'
//     gl={{ preserveDrawingBuffer: true}}
//     camera={{ }}
//     >
//     <Suspense fallback={<CanvasLoader />} />
//       <OrbitControls 
//         autoRotate
//         enableZoom={false}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
//       <Earth />
//     </Canvas>
//   )
// }

// export default EarthCanvas