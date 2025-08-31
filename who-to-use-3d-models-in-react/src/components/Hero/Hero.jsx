import { Suspense } from 'react'
import './hero.css'
import ScrollSvg from './ScrollSvg'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'

const Hero = () => {
  return (
    <section className="section">
      <article className="left">
        {/* Title */}
        <h1 className='my-2 text-2xl'>How to Convert 3D Models to a React Component ( gltf to glb, glb to jsx) </h1> 
        <ScrollSvg />

      </article>


      <article className="right w-full h-[70%]">
        <Canvas>
          <Suspense fallback='Loading 3D model'>

            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 3]} />


            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial color="#DB8B9B" attach="material" distort={0.5} speed={2} />
            </Sphere>

            <OrbitControls/>
          </Suspense>
        </Canvas>
      </article>

      {/* Others: bg, 3d, hero-image */}
      <div className="bg" />



    </section>
  )
}

export default Hero